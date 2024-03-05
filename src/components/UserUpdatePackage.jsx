import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar'; // Import your AdminNavBar component
import UserNavBar from './UserNavBar';

const UserUpdatePackage = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState({
        _id: sessionStorage.getItem("userid"),
        email :"",
        packagename: ""
    })


    const getData = () => {
        axios.get("http://localhost:3001/api/package/viewallpackage")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            })
    }

    const getEmail = ()=>{
        axios.get("http://localhost:3001/api/member/viewmemberdetails", input._id).then(
            (response)=>{
                setInput(prevState =>({...prevState,email:response.data.email}))
            }
        )
    }

    useEffect(() => {
        getData()
    }, [])

    const inputHandler = (event) => {
       setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues = () => {
        if (!input._id) {
            alert("User ID is missing")
            return
        }

        const updateData = {
            userId: input._id,
            packagename: input.packagename
        };

        axios.post("http://localhost:3001/api/package/updatepackage", updateData)
            .then((response) => {
                console.log(response.data);
                alert("updated package successfully")
            })
            .catch((error) => {
                console.error("Error updating package:", error);
            })
    }

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
                        <label htmlFor="" className="form-label">User</label>
                        <input
                            type="text"
                            className="form-control"
                            value={input._id}
                            onChange={inputHandler}
                            disabled
                        />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Package Name</label>
                        <select className="form-control" name="packagename" id="" onChange={inputHandler}>
                            <option>--Select package--</option>
                            {
                                data.map(
                                    (value, index) => {
                                        return <option value={value.packageName} >{value.packageName}</option>

                                    }
                                )
                            }
                        </select>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-info" onClick={readValues}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserUpdatePackage;
