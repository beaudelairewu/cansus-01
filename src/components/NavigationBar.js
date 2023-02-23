import React, { useState } from 'react'
// import logo from './assets/logo_160x43.png'
import {useAuth} from '../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'
import { NavDropdown, Nav, Navbar, Container, Image} from "react-bootstrap"



export default function NavigationBar() {

    const navigate = useNavigate()
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState("")

    function goToLogin(){
        navigate('/login')
    }

    async function handleLogout() {
        setError("")
        try {
          await logout()
          navigate("/login")
        } catch (err){
          setError("Failed to log out")
        }
      }

    return (
        <div className="NavbarComponent">
            <Navbar bg="white" expand="sm" className="shadow-sm">
            <Container fluid>
              <Navbar.Brand href="/" style={{color:"#645CBB"}}>Cansus
                {/* <Image width="105" src={logo}></Image> */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  {/* <Nav.Link href="/">Research</Nav.Link> */}
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/map">Map</Nav.Link>
                </Nav>
                <Nav>

                    {(currentUser == null) 
                    ? 
                      <button className="btn btn-outline-success btn-sm" style={{color:"645CBB"} } onClick={goToLogin} >Log In</button>
                    :  
                    <button className='btn btn-outline-danger btn-sm' onClick={handleLogout}>Log Out</button>
                  
                    } 
                  
                    
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}
