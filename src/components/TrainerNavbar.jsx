import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TrainerNavbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.clear()
        navigate('/trainerlogin')
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
                                <Link className="nav-link active" aria-current="page" to="/trainerhomepage"><font color="white">Trainer Home</font></Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Attendence
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Mark Attendence</Link></li>
                                    <li><Link className="dropdown-item" to="#">View Attendence</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=""><font color="white">View Profile</font></Link>
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

export default TrainerNavbar