import React from 'react'
import UserNavBar from './UserNavBar'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const PackageDetails = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3001/api/package/viewallpackage").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            <UserNavBar/>
            <div className="container">
                <div className="row g-3">

                    {
                        data.map(
                            (value, index) => {
                                return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <div class="card">
                                    <div class="card-header">
                                        Current Package
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.packageName}</h5>
                                        <p class="card-text">{value.packageDes}</p>
                                        <p class="card-text">{value.packageAmount}</p>
                                    </div>
                                </div>
        
                            </div>
                            })
                    }
                    
                    
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default PackageDetails