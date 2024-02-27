import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">FitGym</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/adminHomePage">Admin Portal</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Users
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Add Users</Link></li>
            <li><Link className="dropdown-item" to="#">View Users</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Trainers
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Add Trainers</Link></li>
            <li><Link className="dropdown-item" to="#">View Trainers</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Packages
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Add Package</Link></li>
            <li><Link className="dropdown-item" to="#">View Package</Link></li>
          </ul>
        </li>

        <button className="btn btn-outline-light">Logout</button>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Trainers" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search </button>
      </form>
    </div>
  </div>
</nav>


        </div>
    )
}

export default AdminNavBar