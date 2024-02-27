import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <div>

<nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src="https://us.123rf.com/450wm/imogi/imogi1805/imogi180500240/102169959-vintage-fitness-concept.jpg?ver=6" alt="Bootstrap" width="100" height="80" />
                        <font  color="white"><b> &nbsp;&nbsp;FitGym</b></font>

    </a>
  
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><font  color="white">Home</font></a>
        </li>
        

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <font  color="white"> Login</font>
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Admin login</Link></li>
            <li><Link className="dropdown-item" to="#">Trainer login</Link></li>
            <li><Link className="dropdown-item" to="#">User login</Link></li>
=======
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="https://us.123rf.com/450wm/imogi/imogi1805/imogi180500240/102169959-vintage-fitness-concept.jpg?ver=6" alt="FitGym" width="100" height="80" />
          <span className="text-white"><b> &nbsp;&nbsp;FitGym</b></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/adminlogin">Admin login</Link></li>
                <li><Link className="dropdown-item" to="/trainerLogin">Trainer login</Link></li>
                <li><Link className="dropdown-item" to="/userlogin">User login</Link></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
