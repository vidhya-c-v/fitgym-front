import React, { useState } from 'react'
import AdminNavBar from './AdminNavBar'
import axios, { Axios } from 'axios'
import { useEffect } from 'react'

const AddUser = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3001/api/package/viewallpackage").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])

    const [input, setInput] = new useState(
        {
            name: "",
            place: "",
            age: "",
            height: "",
            weight: "",
            bloodGroup: "",
            email: "",
            password: "",
            packageId: ""


        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValues = () => {
        axios.post("http://localhost:3001/member/addmember", input).then(
            (response) => {
                if (response.data.status == "success") {

                    alert("success")

                    setInput({

                        name: "",
                        place: "",
                        age: "",
                        height: "",
                        weight: "",
                        bloodGroup: "",
                        email: "",
                        password: "",
                        packageId: ""
                    })

                }
                else {

                    alert("failed to add")

                }
            }
        )
    }
    return (
        <div>
            <AdminNavBar />
            <br></br>

            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Place</label>
                        <input type="text" className="form-control" name="place" value={input.place} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Age</label>
                        <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Height</label>
                        <input type="text" className="form-control" name="height" value={input.height} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Weight</label>
                        <input type="text" className="form-control" name="weight" value={input.weight} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Blood group</label>
                        <label htmlFor="" className="form-label" name='bloodGroup' value={input.bloodGroup} onChange={inputHandler}>Blood Group</label>
                        <select name="" id="" className="form-control">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Package Id</label>
                        <select className="form-control" name="packageId" id="" onChange={inputHandler}>
                            {
                                data.map(
                                    (value, index) => {
                                        return <option value={value._id} >{value.packageName}</option>

                                    }
                                )
                            }
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={input.password} onChange={inputHandler} />

                    </div>
                    {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Registraion Fees Paid</label>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                YES
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                NO
                            </label>
                        </div>
                    </div> */}

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center> <button className="btn btn-primary" onClick={readValues} >Add Member</button></center>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default AddUser