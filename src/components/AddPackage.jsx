import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import AdminNavBar from './AdminNavBar'

const AddPackage = () => {
    const [input, setInput] = new useState(
        {
            packageName:"",
            packageDes:"",
            packageAmount:""
    }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/package/addpackage", input).then((response) => {
            console.log(response.data)

            if (response.data.status == "success") {
                alert("Package added")
                setInput(
                    {
                        packageName:"",
                        packageDes:"",
                        packageAmount:""
                }
                )

            }
            else {
                alert("Something went wrong ...")
                setInput(
                    {
                        packageName:"",
                        packageDes:"",
                        packageAmount:""
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

                        <label htmlFor="" className="form-label">Package Name</label>
                        <input type="text" className="form-control" name="packageName" value={input.packageName} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Package Description</label>
                        <input type="text" className="form-control" name="packageDes" value={input.packageDes} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Package Price</label>
                        <input type="text" className="form-control" name="packageAmount" value={input.packageAmount} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={readValues}>Add Package</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPackage