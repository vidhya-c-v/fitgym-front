import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import UserNavBar from './UserNavBar';
import { useEffect } from 'react';

const UserProfile = () => {
    const [input, setInput] = new useState(
        {
            _id: sessionStorage.getItem("userid")
        }
    )
    const [output, setOutput] = useState([]);

    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/member/viewmemberpackage", input,{headers:{token:sessionStorage.getItem("token")}}).then((response) => {
            setOutput(response.data)
            console.log(response.data)

        })
    }
    useEffect(() => { readValues() }, [])
    return (
        <div className='homebg'>
            <UserNavBar/>
            <br>
            </br>
            <br></br>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        {
                            output.map(
                                (value,index)=>{
                                    return <div class="card border-dark mb-3" >
                                    <div class="card-header">Profile</div>
                                    <div class="card-body">
                                        <h2 class="card-title">Name: {value.name}</h2>
                                        <h5 class="card-text">Place : {value.place}</h5>
                                        <h5 class="card-text">Age : {value.age}</h5>
                                        <h5 class="card-text">Height : {value.height}</h5>
                                        <h5 class="card-text">Weight : {value.weight}</h5>
                                        <h5 class="card-text">Blood Group :{value.bloodGroup}</h5>
                                        <h5 class="card-text">Email : {value.email}</h5>
                                        <h5 class="card-text">Joined Date : {value.registerDate}</h5>
                                        <h5 class="card-text">Package Name : {value.package_name}</h5>
                                        <h5 class="card-text">Package Amount : {value.package_amount}</h5>
                                        <h5 class="card-text">Due Amount : {value.dueAmount}</h5>
                                        <h5 class="card-text">Remaining days for due : {value.remainingDaysForNextDue}</h5>        
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