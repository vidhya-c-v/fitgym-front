import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row g-4">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                                                            <br/>
                                                            <label htmlFor="" className="form-label">EMAIL-ID</label>
                                                            <input type="email" name="" id="" className="form-control" />
                                                        </div>
                                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                            <label htmlFor="" className="form-label">PASSWORD</label>
                                                            <input type="password" name="" id="" className="form-control" />


                                                        </div>



                                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                            <Link class="btn btn-primary" >LOGIN</Link>

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

export default UserLogin