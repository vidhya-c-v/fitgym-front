import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const AdminLogin = () => {
    const navigate=useNavigate()
    const [input,setInput] = new useState(
        {
          "username":"",
          "password":""
        }
      )
      const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})
      }
      const readValues = ()=>{
        console.log(input)
        if(input.username=="admin" && input.password=="admin")
        {
            navigate("/adminHomePage")
          
          setInput({
            "username":"",
            "password":""
          })
        }
        else
        {
          alert("Invalid Username or Password")
          setInput(
            {
                "username":"",
                "password":""
              }
          )
        }
      }
  return (
    <div>
        <NavBar/>

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
                                                            <input type="text" className="form-control" name="username" value={input.usernam} onChange={inputHandler} />
                                                        </div>
                                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                            <label htmlFor="" className="form-label">PASSWORD</label>
                                                            <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler}/>
                                                        </div>
                                                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                        <center> <button className="btn btn-success" onClick={readValues}>Login</button></center>
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
