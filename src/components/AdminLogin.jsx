import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const AdminLogin = () => {
    const [input,setInput] = useState({

        "username":"",
        "password":""
    })
    const navigate=useNavigate()
    

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    

    const readValues=()=>{
        if (input.username == 'admin' && input.password == 'admin') 
        {

            alert("Succesfully loged in")
            navigate('/adminHomePage')
            
            
            
        } else 
        {
            
            alert("Incorrect Password")
            
        }
    }
    return (
        <div>

            <NavBar />

            <div className="container">
                <div className="row g-4">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br />
                        <h1><center><b>Admin Login</b></center></h1>
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
                                                            <label htmlFor="" className="form-label">USERNAME</label>
                                                            <input type="text" name="username" id="username" className="form-control" value={input.username} onChange={inputHandler}/>
                                                        </div>
                                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                            <label htmlFor="" className="form-label">PASSWORD</label>
                                                            <input type="password" name="password" id="password" className="form-control" value={input.password} onChange={inputHandler}/>


                                                        </div>



                                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                            <Link class="btn btn-primary" onClick={readValues}>LOGIN</Link>

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

export default AdminLogin