import React, { useState } from 'react'

import axios from 'axios'
import AdminNavBar from './AdminNavBar'

const TrainerSearch = () => {
    const [input, setInput] = new useState(
        {
            "emailid": ""
        }
    )
    const [data, setData] = new useState([])


    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })

    }


    const readValues = () => {
        axios.post("http://localhost:3001/api/trainer/searchtrainer", { emailid: input.emailid }).then(
            (response) => {
                setData(response.data)
                if (response.data.length == 0) {
                    alert("no trainer found")
                }
            })
    }

    return (
        <div>
            <AdminNavBar />
            <div className="container bg-light">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12
col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">TrainerId</label>
                                <input type="text" className="form-control"
                                    name="emailid" value={input.emailid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success"
                                    onClick={readValues}>CHECK</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                                <h2>Trainer-Details</h2>
                                <ul>
                                    {
                                        data.map((value, index) => {
                                            return <li>
                                                <strong>TrainerId:</strong> {value.emailid}  <br />
                                                <strong>Name:</strong> {value.name} <br />
                                                <strong>Age:</strong> {value.age} <br />
                                               
                                                
                                            </li>
                                        }
                                        )}
                                </ul>
                                


                            

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerSearch
