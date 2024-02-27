import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import UserNavBar from './UserNavBar';

const UserProfile = () => {
    const [input, setInput] = new useState(
        {
            userId: sessionStorage.getItem("userId")
        }
    )
    const [output, setOutput] = useState([]);

    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/post/viewown", input).then((response) => {
            setOutput(response.data)
            console.log(response.data)

        })
    }
    return (
        <div>
            <UserNavBar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div class="card border-dark mb-3" >
                            <div class="card-header">Profile</div>
                            <div class="card-body">
                                <h2 class="card-title">Name</h2>
                                <h5 class="card-text">Place</h5>
                                <h5 class="card-text">Age</h5>
                                <h5 class="card-text">Height</h5>
                                <h5 class="card-text">Weight</h5>
                                <h5 class="card-text">Blood Group</h5>
                                <h5 class="card-text">Email</h5>
                                <h5 class="card-text">Place</h5>
                                <h5 class="card-text">Place</h5>
                                <h5 class="card-text">Place</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div class="card">
                            <div class="card-header">
                                Current Package
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Package Name</h5>
                                <p class="card-text">Package Description</p>
                                <p class="card-text">Price</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserProfile