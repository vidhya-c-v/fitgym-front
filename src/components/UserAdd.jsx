import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const UserAdd = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3001/api/package/viewallpackage").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])
    const [input, setInput] = new useState(

        {
            "name": "",
            "place":"",
            "age": "",
            "height":"",
            "weight":"",
            "bloodGroup":"",
            "emailid": "",
            "password": "",
            "packageId":""


        }
    )

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })

    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/member/addmember", input).then((response) => {
            console.log(response.data)
            if (response.data.status == "success") {
                alert("Succesfully Registered")
                setInput(
                    {

                        "name": "",
                        "place":"",
                        "age": "",
                        "height":"",
                        "weight":"",
                        "bloodGroup":"",
                        "emailid": "",
                        "password": "",
                        "packageId":""


                    }
                )

            } else {
                alert("Something went wrong")
            }
        })
    }
  return (
    <div>
        <AdminNavBar/>

        <br /><br />
            <div className="container">
                <div className="row">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Place</label>
                                <input type="text" className="form-control" name='place' value={input.place} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name='age' value={input.age} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Height</label>
                                <input type="text" className="form-control" name='height' value={input.height} onChange={inputHandler}  />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text" className="form-control" name='weight' value={input.weight} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <input type="text" className="form-control" name='bloodGroup' value={input.bloodGroup} onChange={inputHandler}  />
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
                                <label htmlFor="" className="form-label">E-mail</label>
                                <input type="text" name="email" id="" value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" id="" value={input.password} onChange={inputHandler}  />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValues} >Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default UserAdd