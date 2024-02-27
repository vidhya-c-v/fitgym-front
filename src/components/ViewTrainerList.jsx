import React from 'react'

const ViewTrainerList = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">E-mail</th>
                                            <th scope="col">Age</th>
                                            
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <th scope="row">Name</th>
                                            <td>E-mail</td>
                                            <td>Age</td>
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

export default ViewTrainerList