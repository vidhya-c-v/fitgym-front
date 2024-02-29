import React from 'react'
import UserNavBar from './UserNavBar'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import AdminNavBar from './AdminNavBar'

const PackageView = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3001/api/package/viewallpackage").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            <AdminNavBar />
            <div className="container">
                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sl.No</th>
                                <th scope="col">Package Nmae</th>
                                <th scope="col">Package Description</th>
                                <th scope="col">Package Price</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        data.map(
                            (value, index) => {
                                return <tr>
                                <th scope="row">{index+1}</th>
                                <td>{value.packageName}</td>
                                <td>{value.packageDes}</td>
                                <td>{value.packageAmount}</td>
                            </tr>

                            })
                    }
                    </tbody>
                    </table>
</div>
                </div>
            </div>
        </div>
    )
}

export default PackageView