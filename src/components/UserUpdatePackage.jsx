import React, { useState } from 'react';
import axios from 'axios';
import UserNavBar from './UserNavBar';

const UserUpdatePackage = () => {
    const [input, setInput] = useState({
        email: "",
        packagename: ""
    });

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const updateUserPackage = async () => {
        if (!input.email || !input.packagename) {
            alert("Please provide email and package name");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/api/package/updatepackage", input);
            console.log(response.data);
            alert("Updated package successfully");
            // After updating the package, fetch user details to reflect changes in the user profile
            fetchUserDetails(input.email);
        } catch (error) {
            console.error("Error updating package:", error);
        }
    };

    const fetchUserDetails = async (email) => {
        try {
            const response = await axios.post("http://localhost:3001/api/member/viewmemberdetails", { email });
            // Handle the response to update user profile details in the frontend
            console.log("User details:", response.data);
            // You can set state or update the user profile directly here
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    return (
        <div>
            <UserNavBar />
            <br></br>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <h1>Update Package</h1>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">User Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={input.email}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Package Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="packagename"
                            value={input.packagename}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-info" onClick={updateUserPackage}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserUpdatePackage;
