import React from 'react'
import { Link } from 'react-router-dom'

const UserNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        <img src="https://us.123rf.com/450wm/imogi/imogi1805/imogi180500240/102169959-vintage-fitness-concept.jpg?ver=6" alt="Bootstrap" width="100" height="80" />
                        <font color="white"><b> &nbsp;&nbsp;FitGym</b></font>

                    </Link>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><font color="white">Home</font></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><font color="white">Profile</font></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><font color="white">Package</font></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><font color="white">Logout</font></Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default UserNavBar