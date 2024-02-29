import React, { useState } from 'react'

import axios from 'axios'
import AdminNavBar from './AdminNavBar'

const SearchUser = () => {
    const [input, setInput] = new useState(
        {
            "email": ""
        }
    )
    const [data, setData] = new useState([])


    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })

    }


    const readValues = () => {
        axios.post("http://localhost:3001/api/member/search", { email: input.email }).then(
            (response) => {
                setData(response.data)
                if (response.data.length == 0) {
                    alert("no member found")
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
                                <label htmlFor="" className="form-label">MemberId</label>
                                <input type="text" className="form-control"
                                    name="email" value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success"
                                    onClick={readValues}>CHECK</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                                <h2>Member-Details</h2>
                                <ul>
                                    {
                                        data.map((value, index) => {
                                            return <li>
                                                <strong>MemberId:</strong> {value.email}  <br />
                                                <strong>Name:</strong> {value.name} <br />
                                                <strong>Age:</strong> {value.age} <br />
                                                <strong>Place:</strong> {value.place} <br />
                                                <strong>Regsiter Date:</strong> {value.registerDate} <br />
                                                <strong>PackageId:</strong> {value.packageId} <br />
                                                <strong>Last Package Update Date:</strong> {value.lastPackageUpdateDate} <br />
                                                
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

export default SearchUser
