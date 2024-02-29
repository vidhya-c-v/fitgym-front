import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const TrainerLogin = () => {

    const [input, setInput] = new useState(
        {
            "emailid": "",
            "password": ""
        }
    )
    const navig = useNavigate()
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        axios.post("http://localhost:3001/api/trainer/signintrainer", input).then(
            (response) => {
                if (response.data.status == "success") {
                    sessionStorage.setItem("trainerid", response.data.trainerdata._id)
                    navig("/trainerhomepage")
                    setInput(
                        {
                            "emailid": "",
                            "password": ""
                        }
                    )
                } else if (response.data.status == "incorrect password") {
                    alert("Incorrect Password")
                    setInput(
                        {
                            "emailid": "",
                            "password": ""
                        }
                    )
                }
                else {
                    alert("No user Found")
                }
            }
        )
    }



    return (
        <div>
            <NavBar />

            <div className="container" >
                <div className="row g-4">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br />
                        <h1><center><b>Trainer Login </b></center></h1>
                        <div className="container">
                            <div className="row g-4">
                                <center>
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <br /><br />
                                        <div className="card">
                                            <div className="card-body">
                                                <img height="150px" src="https://media.glamour.com/photos/6581eaa61a3a643f59419d93/1:1/w_1080,h_1080,c_limit/Go-To-Gym.gif" class="card-img-top" alt="..." />

                                                <div className="container">
                                                    <div className="row g-3">
                                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                            <br />
                                                            <label htmlFor="" className="form-label">EMAIL-ID</label>
                                                            <input type="email" name="emailid" value={input.emailid} onChange={inputHandler}  className="form-control" />
                                                        </div>
                                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                            <label htmlFor="" className="form-label">PASSWORD</label>
                                                            <input type="password" name="password" value={input.password} onChange={inputHandler}  className="form-control" />

                                                        </div>
                                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                            <Link class="btn btn-primary" onClick={readValues} >LOGIN</Link>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>

    )
}

export default TrainerLogin
