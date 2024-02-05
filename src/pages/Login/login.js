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
        <div className='backgroundColorLogin'>
            
            <Container id="containerLogin">
                <img id="imgAtmoLogoLogin" src='' alt=''/>
                <Row id="rowContainerLogin">
                    <Col sm={9} id='colFormLogin'>
                        <Label id='textLogin'>Login</Label>
                        <Form onSubmit={handleLogin}>
                            <div>
                                <Label for="email"></Label>
                                <Input
                                    placeholder='Email'
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='mb-3'>
                                <Label for="password"></Label>
                                <Input
                                    placeholder='Senha'
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div id='divBtnLogin'>
                                <Button id='btnEntrarLogin' type="submit"><div className='fw-semibold'>Entrar</div></Button>
                                <Label id='forgotPassword' >Esqueceu a senha ?</Label>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    )
}

export default Login
