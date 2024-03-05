import React, { useEffect, useState } from 'react'
import UserNavBar from './UserNavBar'
import axios from 'axios';

const MyPackage = () => {

    const [input, setInput] = new useState(
        {
            _id: sessionStorage.getItem("userid")
        }
    )
    const [output, setOutput] = useState([]);

    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/member/viewmemberpackage", input,{headers:{token:sessionStorage.getItem("token")}}).then((response) => {
            setOutput(response.data)
            console.log(response.data)

        })
    }
    useEffect(() => { readValues() }, [])

    
  return (
    <div>
        <UserNavBar/>


        <br></br>
            <div className="container">
                <div className="row g-3">
                    

                    {
                        output.map(
                            (value, index) => {
                                return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    

                                <div class="card">
                                    <div class="card-header">
                                        My Package
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.package_name}</h5>
                                        {/* <p class="card-text">{value.packageDes}</p> */}
                                        <p class="card-text">{value.package_amount}</p>
                                    </div>
                                </div>
        
                            </div>
                            })
                    }
                    
                    
                    
                    
                    
                </div>
            </div>
    </div>
  )
}

export default MyPackage