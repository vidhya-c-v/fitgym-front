import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AdminNavBar from './AdminNavBar';

const AdminPage = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchPendingRequests();
    }, []);

    const fetchPendingRequests = async () => {
        axios.get('http://localhost:3001/api/admin/pendingRequests').then((response) => {
                setRequests(response.data);
            })
    };

    const handleReject = (id) => {
        axios.put(`http://localhost:3001/api/admin/rejectRequest/${id}`).then((response) => {
            // Refresh pending requests after approving/rejecting
            fetchPendingRequests();
            // Show alert based on the status
            if (response.data.status == 'rejected successfully') {
                alert('Request successfully rejected.');
            } else {
                alert('Something went wrong');
            }
        })
        
    };

    const handleApproval = (id) => {
        axios.put(`http://localhost:3001/api/admin/approveRequest/${id}`).then((response) => {
            // Refresh pending requests after approving/rejecting
            fetchPendingRequests();
            // Show alert based on the status
            if (response.data.status == 'same package') {
                alert('Already same package');
            }
            else if (response.data.status == 'approved successfully') {
                alert('Request approved successfully');
            } else {
                alert('Something went wrong');
            }
        })
    };

    return (
        <div>
            <AdminNavBar />
            <h1>Pending Package Change Requests</h1>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>New Package ID</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((value, index) => {
                                    return <tr>
                                        <td>{value.userId.name}</td>
                                        <td>{value.newPackageId.packageName}</td>
                                        <td>{value.status}</td>
                                        
                                        <td>
                                            
                                            <button className='btn btn-success' onClick={() => handleApproval(value._id)}>Approve</button>
                                            &nbsp;<button className='btn btn-danger' onClick={() => handleReject(value._id)}>Reject</button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
