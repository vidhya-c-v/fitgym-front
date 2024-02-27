import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-danger">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">FitGym</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/adminHomePage">Admin Portal</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Users
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Add Users</Link></li>
                                    <li><Link class="dropdown-item" to="#">View Users</Link></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Trainers
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Add Trainers</Link></li>
                                    <li><Link class="dropdown-item" to="#">View Trainers</Link></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Package
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="#">Add Package</Link></li>
                                    <li><Link class="dropdown-item" to="#">Update Package</Link></li>
                                    <li><Link class="dropdown-item" to="#">View Package</Link></li>
                                </ul>
                            </li>

                        </ul>

                        <button className="btn btn-outline-light">Logout</button>

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default AdminNavBar