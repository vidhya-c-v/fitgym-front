import React from 'react'
import UserNavBar from './UserNavBar'
import AdminNavBar from './AdminNavBar'

const ViewUserList = () => {
  return (
    <div>
        <AdminNavBar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Place</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Height</th>
                                            <th scope="col">Weight</th>
                                            <th scope="col">Blood Group</th>
                                            <th scope="col">E-mail</th>
                                            <th scope="col">Package</th>
                                            <th scope="col">Registration Date</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <th scope="row">Name</th>
                                            <td>Place</td>
                                            <td>Age</td>
                                            <td>Height</td>
                                            <td>Weight</td>
                                            <td>Blood</td>
                                            <td>mail</td>
                                            <td>Package</td>
                                            <td>Registration</td>
                                            <td><button className="btn btn-danger">Delete</button></td>
                                        </tr>
                                        
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

export default ViewUserList