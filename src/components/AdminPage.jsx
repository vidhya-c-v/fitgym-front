import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AdminNavBar from './AdminNavBar';

const AdminPage = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchPendingRequests();
    }, []);

    const fetchPendingRequests = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/admin/pendingRequests');
            setRequests(response.data);
        } catch (error) {
            console.error('Error fetching pending requests:', error);
        }
    };

    const handleApproval = async (id, status) => {
        try {
            await axios.put(`http://localhost:3001/api/admin/approveRejectRequest/${id}`, { status });
            // Refresh pending requests after approving/rejecting
            fetchPendingRequests();
            // Show alert based on the status
            if (status === 'approved') {
                window.alert('Request successfully approved.');
            } else {
                window.alert('Request successfully rejected.');
            }
        } catch (error) {
            console.error('Error updating request:', error);
        }
    };

    return (
        <div>
            <AdminNavBar/>
            <h1>Pending Package Change Requests</h1>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>New Package ID</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map(request => (
                        <tr key={request._id}>
                            <td>{request.userId}</td>
                            <td>{request.newPackageId}</td>
                            <td>{request.status}</td>
                            <td>
                                <button onClick={() => handleApproval(request._id, 'approved')}>Approve</button>
                                <button onClick={() => handleApproval(request._id, 'rejected')}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;
