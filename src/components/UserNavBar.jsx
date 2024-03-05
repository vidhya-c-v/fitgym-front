import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserNavBar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.clear()
        navigate('/userlogin')
    };

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

                            

                        </ul>
                        <button className="btn btn-outline-light" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default UserNavBar