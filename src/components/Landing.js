import React from 'react'
import map from '../assets/map.png'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const navigate = useNavigate()
    function goToLogin(){
        navigate("/login")
    }
  return (
    <div style={{backgroundColor:"#645CBB"}}>
        <div  >
                <div className="mb-5 pb-5">
                    <div className="container-fluid">
                        <div id="landing-heading" className="d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                                        <h1 className="text-white  pt-5">
                                            <span>Welcome to </span>
                                            <span style={{color:"#FF8B13"}}>Cansus</span>
                                        </h1>
                                        <h2>An interactive tool for... </h2>
                                        <p>incooperation with...</p>
                                        <div className="col-3">
                                            {/* <Button variant="" href="/login">Get Started</Button> */}
                                            <button className="btn btn-outline-primary" onClick={goToLogin}>Get Started</button>
                                            {/* <button className="btn btn-outline-info" href="/login">Get Started</button> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 hero-img justify-content-left text-left">
                                        <img src={map}
                                        width="90%" className="img-fluid rounded mt-5 pt-5" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>
  )
}
