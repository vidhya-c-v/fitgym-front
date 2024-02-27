import React from 'react'
import AdminNavBar from './AdminNavBar'

const Search = () => {
  return (
    <div>
        <AdminNavBar/>
        <br>
        </br>

        <div className="container bg-secondary">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">MemberId</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">CHECK</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h2>Member - Details</h2>
                                <ul>
                                     <li>
                                                <strong>MemberId:</strong>  <br />
                                                <strong>name:</strong>  <br />
                                                <strong>age:</strong>  <br />
                                                <strong>place:</strong>  <br />
                                                <strong>phoneNo:</strong>  <br />

                                                <strong>package:</strong>  <br />
                                            </li>
                                        
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Search