import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AdminNavBar from './AdminNavBar'

const UpdatePackage = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3001/api/package/viewallpackage").then((response) => {
            setData(response.data)
        })
    } 
    useEffect(() => { getData() }, [])

    const [input, setInput] = new useState(
        {
            email: "",
            packagename: ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        
        console.log(input)
        axios.post("http://localhost:3001/api/package/updatepackage", input).then((response) => {
            console.log(response.data)
            if (response.data.status == "invalid user") {
                alert("Invalid user email")
            }
            
            if (response.data.status == "invalid package") {
                alert("Invalid package name")
            }

            if (response.data.status == "success") {
                alert("Package updated successfully")
                setInput(
                    {
                        email: "",
                        packagename: ""
                    }
                )

            }
            else {
                alert("Something went wrong ...")
                setInput(
                    {
                        email: "",
                        packagename: ""
                    }
                )
            }
        })
    }
    return (
        <div>
            <AdminNavBar/>
            <br></br>

            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">User Email</label>
                        <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                    </div>
                     <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Package Id</label>
                                <select className="form-control" name="packageId" id="" onChange={inputHandler}>
                                <option>--Select package--</option>
                                    {
                                        data.map(
                                            (value, index) => {
                                                return <option value={value._id} >{value.packageName}</option>

                                            }
                                        )
                                    }
                                </select>
                            </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValues}>Update Package</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdatePackage