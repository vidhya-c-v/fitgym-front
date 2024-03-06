import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'

const ViewTrainerList = () => {
    const [data, setData] = new useState([])
    const getData = () => {
        axios.get("http://localhost:3001/api/trainer/viewtrainers").then(
            (response) => {
                setData(response.data)
            }
        )
    }
    useEffect(() => { getData() }, [])

    const deleteAction = (id)=>{
        let data = {"_id":id}
        axios.post("http://localhost:3001/api/trainer/deletetrainer",data).then(
            (response)=>{
                if (response.data.status == "success") {
                    alert("deleted")
                    getData()
                }
            }
        )
    }

    return (
        <div>
            <AdminNavBar />
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <table class="table table-bordered border-danger">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">E-mail</th>
                                            <th scope="col">Age</th>

                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {

                                            data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.name}</th>
                                                        <td>{value.emailid}</td>
                                                        <td>{value.age}</td>
                                                        <td><button className="btn btn-danger" onClick={()=>{deleteAction(value._id)}}>Delete</button></td>
                                                    </tr>
                                                }
                                            )

                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTrainerList