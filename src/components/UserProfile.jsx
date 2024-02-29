import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import UserNavBar from './UserNavBar';
import { useEffect } from 'react';

const UserProfile = () => {
    const [input, setInput] = new useState(
        {
            // _id: sessionStorage.getItem("userId")
            _id:"65dd6377c734c3e661488d1f"
        }
    )
    const [output, setOutput] = useState([]);

    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/member/viewprofile", input,{headers:{token:sessionStorage.getItem("token")}}).then((response) => {
            setOutput(response.data)
            console.log(response.data)

        })
    }
    useEffect(() => { readValues() }, [])
    return (
        <div>
            <UserNavBar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        {
                            output.map(
                                (vlaue,index)=>{
                                    return <div class="card border-dark mb-3" >
                                    <div class="card-header">Profile</div>
                                    <div class="card-body">
                                        <h2 class="card-title">Name: {vlaue.name}</h2>
                                        <h5 class="card-text">Place : {vlaue.place}</h5>
                                        <h5 class="card-text">Age : {vlaue.age}</h5>
                                        <h5 class="card-text">Height : {vlaue.height}</h5>
                                        <h5 class="card-text">Weight : {vlaue.weight}</h5>
                                        <h5 class="card-text">Blood Group :{vlaue.bloodGroup}</h5>
                                        <h5 class="card-text">Email : {vlaue.email}</h5>
                                        <h5 class="card-text">Joined Date : {vlaue.registerDate}</h5>
                                    </div>
                                </div>
                                }
                            )
                        }

                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        {
                            output.map(
                                (value,index)=>{
                                    return <div class="card">
                                    <div class="card-header">
                                        Current Package
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Package Name : {value.packageId.packageName}</h5>
                                        <p class="card-text">Package Description : {value.packageId.packageDes}</p>
                                        <p class="card-text">Price : {value.packageId.packageAmount}</p>
                                    </div>
                                </div>
                                }
                            )
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserProfile