import React, {useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import {useNavigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { login } = useAuth()

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/map")
            console.log('login successful')
        } catch (err) {
            setError("Failed to Login")
        }
        setLoading(false)

    }

    return (
            <div className="Login">
                <Container className="d-flex align-items-center justify-content-center" 
                style={{minHeight:"100vh"}}>
                    <div className="w-100" style={{maxWidth: "400px"}}>
                            {error && <Alert variant="danger">{error}</Alert>}
                        <Card>
                            <Card.Body>
                            <br></br>
                            <h2 className="text-center mb-4 " style={{color:"#645CBB"}} >Login</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label style={{float:"left"}}>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label style={{float:"left"}}>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <br></br>
                                {/* <Button disabled={loading} className="w-100 btn-success" type="submit">
                                Log In
                                </Button> */}
                                <button className='btn btn-success w-100' type="submit" disabled={loading}>Log in</button>
                                <br></br><br></br>
                            </Form>
                            </Card.Body>
                        </Card>
                        <div className="w-100 text-center mt-2">
                            {/* Don't have an account? <Link to="/signup" style={{color:'#008000'}}>Sign Up</Link> */}
                        </div>
                    </div>
                </Container>
            </div>
    )
}