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

    // Update user profile after package is successfully updated
    const updateUserProfile = () => {
        fetchUserDetails();
    };

    // Function to handle package selection
    const handlePackageSelection = (packageId) => {
        setSelectedPackageId(packageId);
        updateSelectedPackage(packageId);
    };

    // Function to update selected package for the user
    const updateSelectedPackage = (packageId) => {
        axios.post("http://localhost:3001/api/member/updatepackage", { userId: sessionStorage.getItem("userid"), packageId }, { headers: { token: sessionStorage.getItem("token") } })
            .then((response) => {
                console.log("Selected package updated successfully");
                updateUserProfile(); // Fetch updated user details after package update
            })
            .catch(error => {
                console.error("Error updating selected package:", error);
            });
    };

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
                                        {/* Display selected package details */}
                                        <div className="card border-dark mb-3">
                                            <div className="card-header">Selected Package</div>
                                            <div className="card-body">
                                                {allPackages.map(pkg => {
                                                    if (pkg._id === selectedPackageId) {
                                                        return (
                                                            <React.Fragment key={pkg._id}>
                                                                <h5 className="card-title">Package Name: {pkg.packageName}</h5>
                                                                <p className="card-text">Package Description: {pkg.packageDes}</p>
                                                                <p className="card-text">Package Amount: {pkg.packageAmount}</p>
                                                            </React.Fragment>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

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
                                            <button onClick={() => handlePackageSelection(pkg._id)}>Select</button>
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
