import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'

const Home = () => {
    
        const [data, setData] = new useState([])
        const getData = () => {
          axios.get("http://localhost:3001/api/package/viewallpackage").then(
            (response) => { setData(response.data) })
        }
        useEffect(() => { getData() }, [])
    return (
        <div className='homebg'>
            <NavBar />
            <br></br>
            <div className="container">
                <div className="row g-4">
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card">
                            <img height="300px" src="https://www.bodybuilding.com/images/2021/april/dumbbell_rear_delt_row-700xh.gif" class="card-img-top" alt="..." />

                        </div>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card">
                            <img height="300px" src="https://31.media.tumblr.com/e63ea8558db47480f1f1537273b886b6/tumblr_mrg85yn8SK1ro3593o1_500.gif" class="card-img-top" alt="..." />

                        </div>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card">
                            <img height="300px" src="https://media.post.rvohealth.io/wp-content/uploads/sites/2/2022/01/GRT-05.05.AlternatingDumbbellBenchPress.gif" class="card-img-top" alt="..." />

                        </div>

                    </div>
                </div>
            </div>
            <br></br>

            <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row"><center>
              
              <h4><font color="white">PACKAGES</font></h4></center>
               {
                data.map(
                  (value, index) => {
                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                      <div className="card">

                        <div className="card-body">
                        <h5 className="card-title">Package Name: {value.packageName}</h5>
                          <p className="card-text">Description: {value.packageDes}</p>
                          <p className="card-text">Amount: {value.packageAmount}</p>


                        </div>
                      </div>
                    </div>
                  }
                )
              }

            </div>
          </div>
        </div>
      </div>
            
            {/* <div class="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card" >
                            <img height="250px" src="https://centaur-wp.s3.eu-central-1.amazonaws.com/creativereview/prod/content/uploads/2022/03/extra-logo-old-new.gif?auto=compress,format&q=60&w=1080&h=1080" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">EXTRA PACKAGE</h5>
                                <p class="card-text">Two trainer for many</p>
                                <p class="card-text">999</p>

                            </div>
                        </div>
                    </div>

                    <div class="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card" >
                            <img height="250px" src="https://img.freepik.com/free-vector/premium-collection-badge-design-vector_53876-43822.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1708992000&semt=ais" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">PREMIUM PACKAGE</h5>
                                <p class="card-text">Five trainer for many</p>
                                <p class="card-text">4999</p>

                            </div>
                        </div>
                    </div>


                </div> */}
            {/* </div> */}

            <br /><br />

            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                        <div class="card">
                            <img height="260px"
                                src="https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png"
                                class="card-img-top" alt="..." />






                        </div>
                    </div>
                    <div class="col col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">ABOUT US</h3>
                                <hr></hr>
                                <p class="card-text">FitGym revolutionizes the fitness landscape with its groundbreaking unisex gym classes,
                                    welcoming individuals of all genders to embark on a journey towards better health and vitality together.
                                    As a pioneer in inclusive fitness, FitGym offers a diverse range of classes and programs tailored to
                                    accommodate the unique needs and goals of every participant, regardless of gender. From high-intensity
                                    interval training to yoga and everything in between, FitGym's experienced instructors provide expert guidance
                                    and support, fostering a supportive and motivating environment for all.  Whether you're a seasoned athlete or just starting out, FitGym is committed to
                                    helping you unleash your full potential and embrace a healthier, happier lifestyle.</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <br></br>


            <br></br>

            <div className="container" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1708992000&semt=ais')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>

                <div className="row">
                    <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                            <br></br><br></br><br></br>
                            <div className="card">
                                <div className="card-body">
                                    <img height="150px" src="https://media.glamour.com/photos/6581eaa61a3a643f59419d93/1:1/w_1080,h_1080,c_limit/Go-To-Gym.gif" class="card-img-top" alt="..." />

                                    <div className="container">
                                        <div className="row g-3">
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <label htmlFor="" className="form-label">EMAIL-ID</label>
                                                <input type="email" name="" id="" className="form-control" />
                                            </div>
                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <label htmlFor="" className="form-label">PASSWORD</label>
                                                <input type="password" name="" id="" className="form-control" />


                                            </div>



                                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <Link class="btn btn-primary" >USER LOGIN</Link>

                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </center>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                        {/* <div className="card">
                            <img height="388px" src="https://m.media-amazon.com/images/I/71B5IqJqMGS.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text"><h3><font color="green">ALBUM-APP</font></h3></p>
                                </div>
                        </div> */}

                    </div>
                </div>
            </div>

            <br></br>





            <Footer />








        </div>
    )
}

export default Home