import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserNavBar from './UserNavBar';

const TransactionHistory = () => {
    const [history,setHistory]=useState([])
        console.log(sessionStorage.getItem("token"))
    const fetchUserHistory = () => {
        axios.post("http://localhost:3001/api/transaction/view-transactions", { memberId: sessionStorage.getItem("userid") }, { headers: { token: sessionStorage.getItem("token") } })
            .then((response) => {
                setHistory(response.data);
            })
    };
    useEffect(() => { fetchUserHistory(); }, []);
  return (
    <div>
        <UserNavBar/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                      <table class="table">
                          <thead>
                              <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">PackageName</th>
                                  <th scope="col">PackageDes</th>
                                  <th scope="col">PackageAmount</th>
                                  <th scope="col">Payment Status</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Payment Date</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                history.map(
                                    (value,index)=>{
                                        return <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.packageId.packageName}</td>
                                            <td>{value.packageId.packageDes}</td>
                                            <td>{value.packageId.packageAmount}</td>
                                            <td>{value.status}</td>
                                            <td>{value.transactionAmount}</td>
                                            <td>{value.paymentDate}</td>
                                        </tr>
                                    }
                                )
                              }
                          </tbody>
                      </table>

        </div>
    </div>
</div>


    </div>
  )
}

export default TransactionHistory