import React from 'react'
import AdminNavBar from './AdminNavBar'

const AddUser = () => {
    return (
        <div>
            <AdminNavBar />
            <br></br>

            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">MemberId</label>
                        <input type="text" className="form-control" name="packageName" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name="packageName" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Place</label>
                        <input type="text" className="form-control" name="packageDes" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Age</label>
                        <input type="text" className="form-control" name="packageAmount" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Height</label>
                        <input type="text" className="form-control" name="packageAmount" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Weight</label>
                        <input type="text" className="form-control" name="packageAmount" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Blood groop</label>
                        <input type="text" className="form-control" name="packageAmount" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">PackageId</label>
                        <input type="password" className="form-control" name="packageAmount" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name="packageAmount" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name="packageAmount" />

                    </div>
                    

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center> <button className="btn btn-primary" >Add Member</button></center>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddUser