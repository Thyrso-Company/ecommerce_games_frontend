import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import api from '../../services/api'
import { Button, Form, Label, Input, Container, Row, Col } from 'reactstrap'
import Cookies from 'js-cookie'

import './style.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post('/api/login', {
                email,
                password,
            })

            const token = response.data.token

            Cookies.set("token", token, { expires: 7, secure: false })
            Cookies.set("userId", response.data.userId, { expires: 7, secure: false })
            Cookies.set("userName", response.data.userName, { expires: 7, secure: false })
            navigate("/dashboard")

        } catch (error) {
            console.error('Erro ao fazer login:', error)
        }
    }


    return (
        <>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Log In</h4>
                                                    <Form onSubmit={handleLogin}>
                                                        <div className="form-group">
                                                            <Input
                                                                type="email"
                                                                className="form-style"
                                                                placeholder="Email"
                                                                id="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                required />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <Input
                                                                type="password"
                                                                className="form-style"
                                                                placeholder="Password"
                                                                id="password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                required />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <Button type='submit' className="btn mt-4">Login</Button>
                                                        <p className="mb-0 mt-4 text-center"><a href="https://www.web-leb.com/code" className="link">Forgot your password?</a></p>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-3 pb-3">Sign Up</h4>
                                                    <div className="form-group">
                                                        <input type="text" className="form-style" placeholder="Full Name" />
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" className="form-style" placeholder="Email" />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" className="form-style" placeholder="Password" />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="https://www.web-leb.com/code" className="btn mt-4">Register</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login
