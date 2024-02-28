import React from 'react'
import { Link } from 'react-router-dom'

const UserNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <font color="white"><b> &nbsp;&nbsp;FitGym</b></font>

                    </Link>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/userhomepage"><font color="white">User Home</font></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/userprofile"><font color="white">Profile</font></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/packagedetails"><font color="white">Package</font></Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="logout">
                            <button className="btn btn-outline-light" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default UserNavBar