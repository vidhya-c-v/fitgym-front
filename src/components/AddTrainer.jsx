import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const AddTrainer = () => {
    const [input, setInput] = new useState(
        {
            name: "",
            age: "",
            emailid: "",
            password: "",


        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        axios.post("http://localhost:3001/api/trainer/addtrainer", input).then(
            (response) => {
                if (response.data.status == "success") {

                    alert("success")

                    setInput({

                        name: "",
                        age: "",
                        emailid: "",
                        password: ""
                    })

                } else {

                    if (response.data.status == "incorrect password") {
                        alert("Failed")

                        setInput(
                            {
                                name: "",
                                age: "",
                                emailid: "",
                                password: "",

                            }
                        )
                    }

                }
            }
        )
    }
    return (
        <div>
            <AdminNavBar />
            <br /><br />
            <div className="container">
                <div className="row">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name='age' value={input.age} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">E-mail</label>
                                <input type="email" name="emailid" id="" className="form-control" value={input.emailid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id="" className="form-control" value={input.password} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValues}>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddTrainer