import React from 'react'
import { Link } from 'react-router-dom'

const TrainerNavbar = () => {
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
                                    <li><Link className="dropdown-item" to="/searchtrainer">Mark Attendence</Link></li>
                                    <li><Link className="dropdown-item" to="/searchuser">View Attendence</Link></li>
                                </ul>
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

export default TrainerNavbar