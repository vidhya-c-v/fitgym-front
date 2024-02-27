import React from 'react'
import AdminNavBar from './AdminNavBar'

const SearchTrainer = () => {
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
                                <label htmlFor="" className="form-label">TrainerId</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success">CHECK</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h2>Tainer - Details</h2>
                                
                                <br></br>
                                <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">TrainerId</th>
      <td>------</td>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>------</td>
      
    </tr>
    <tr>
      <th scope="row">Age</th>
      <td>------</td>
      
    </tr>
    <tr>
      <th scope="row">Place</th>
      <td>------</td>
      
    </tr>
    <tr>
      <th scope="row">PhoneNo</th>
      <td>------</td>
      
    </tr>
    <tr>
      <th scope="row">Gender</th>
      <td>------</td>
      
    </tr>
    <tr>
      <th scope="row">Salary</th>
      <td>------</td>
      
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

export default SearchTrainer