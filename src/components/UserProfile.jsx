import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserNavBar from './UserNavBar';

const UserProfile = () => {
    const [output, setOutput] = useState([]);
    const [allPackages, setAllPackages] = useState([]);
    const [selectedPackageId, setSelectedPackageId] = useState(null);

    const fetchUserDetails = () => {
        axios.post("http://localhost:3001/api/member/viewmemberdetails", { _id: sessionStorage.getItem("userid") }, { headers: { token: sessionStorage.getItem("token") } })
            .then((response) => {
                setOutput(response.data);
                setSelectedPackageId(response.data[0]?.package_id);
            })
            .catch(error => {
                console.error("Error fetching user details:", error);
            });
    };

    const fetchAllPackages = () => {
        axios.get("http://localhost:3001/api/package/viewallpackage")
            .then((response) => {
                setAllPackages(response.data);
            })
            .catch(error => {
                console.error("Error fetching all packages:", error);
            });
    };

    useEffect(() => {
        fetchUserDetails();
        fetchAllPackages();
    }, []); // Run once on component mount

    return (
        <div className='homebg'>
            <UserNavBar />
            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {/* Display user details */}
                        <div className="card border-dark mb-3">
                            <div className="card-header">Profile</div>
                            <div className="card-body">
                                {output.map((user, index) => (
                                    <React.Fragment key={index}>
                                        <h2 className="card-title">Name: {user.name}</h2>
                                        <h5 className="card-text">Place : {user.place}</h5>
                                        <h5 className="card-text">Age : {user.age}</h5>
                                        <h5 className="card-text">Height: {user.height}</h5>
                                        <h5 className="card-text">Weight: {user.weight}</h5>
                                        <h5 className="card-text">Bloodgroup: {user.bloodGroup}</h5>
                                        <h5 className="card-text">Join date: {user.registerDate}</h5>
                                        <h5 className="card-text">Due Amount : {user.dueAmount}</h5>
                                        <h5 className="card-text">Remaining days for due : {user.remainingDaysForNextDue}</h5>
                                        

                                        

                                        
                                        {/* Add more user details as needed */}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        {/* Display selected package details */}
                        {output.map((user, index) => (
                            <div key={index} className="card border-dark mb-3">
                                <div className="card-header">Selected Package</div>
                                <div className="card-body">
                                    <h5 className="card-title">Package Name: {user.package_name}</h5>
                                    <p className="card-text">Package Description: {user.package_description}</p>
                                    <p className="card-text">Package Amount: {user.package_amount}</p>
                                </div>
                            </div>
                        ))}

                        {/* Display all available packages */}
                        <h2><font color="white">All Available Packages</font></h2>
                        <div className="row">
                            {allPackages.map((pkg, index) => (
                                <div key={index} className="col-4">
                                    <div className={`card border-dark mb-3 ${pkg._id === selectedPackageId ? 'selected-package' : ''}`}>
                                        <div className="card-body">
                                            <h5 className="card-title">{pkg.packageName}</h5>
                                            <p className="card-text">{pkg.packageDes}</p>
                                            <p className="card-text">{pkg.packageAmount}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
