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
            <li><Link className="dropdown-item" to="/adduser">Add Users</Link></li>
            <li><Link className="dropdown-item" to="/viewuserlist">View Users</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Trainers
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/addtrainer">Add Trainers</Link></li>
            <li><Link className="dropdown-item" to="/viewtrainerlist">View Trainers</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Packages
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/addpackage">Add Package</Link></li>
            <li><Link className="dropdown-item" to="/updatepackage">Update Package</Link></li>
            <li><Link className="dropdown-item" to="/updatepackage">View Package</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Search
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/searchtrainer">Search Trainer</Link></li>
            <li><Link className="dropdown-item" to="/searchuser">Search Users</Link></li>
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

export default AdminNavBar