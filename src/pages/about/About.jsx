import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Col, Row, Button } from 'react-bootstrap';
import { CiLinkedin, CiMail } from "react-icons/ci";
import { BsGithub, BsLinkedin, BsMailbox2Flag } from 'react-icons/bs'
import './about.css'
import tomiProfile from './profiles/tomiProfile.jpg'
import ezeProfile from './profiles/perfilEze.png'
import fedeProfile from './profiles/perfilFede.jpg'
import facuProfile from './profiles/facuProfile.jpg'
const About = () => {
    return (
        <>
            <Container className='d-flex justify-content-center flex-column  align-content-center pt-5'>
                <h1 className='text-center'>Equipo de desarrollo de la app</h1>
                <Row className='d-flex justify-content-center w-100 pt-5'>
                    <Col className='d-flex justify-content-center flex-md-row flex-column  pt-2 gap-4' xs={12} md={12}>
                        <div className="card">
                            <img className="card-image" src={tomiProfile} alt="profile picture"></img>
                            <h2 className="card-title">Tomas Williams</h2>
                            <p className="card-text">Me considero buen compañero, siempre busco aportar al equipo.
                                Con este proyecto aprendi muchisimo y mi equipo nada mas que decir que gracias por todo lo que me ayudo y
                                por el aguante que pusimos todos para llegar a esto. </p>
                            <div className="social-icons d-flex flex-row w-100">
                                <NavLink to={"https://mail.google.com/mail/u/0/#inbox"} className='w-100  '><BsMailbox2Flag className='w-100 icon' /></NavLink>
                                <NavLink to={"https://www.linkedin.com/in/tomas-williams-neme-scheij-b60b8a1bb/"} className='w-100'> <BsLinkedin className='w-100 icon' /> </NavLink>
                                <NavLink to={"https://www.instagram.com/tomi_williams01/"} className='w-100'><BsGithub className='w-100 icon ' /></NavLink>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-image" src={ezeProfile} alt="profile picture"></img>
                            <h2 className="card-title">Ezequiel Massa</h2>
                            <p className="card-text">Me considero buen compañero, siempre busco aportar al equipo.
                                Con este proyecto aprendi muchisimo y mi equipo nada mas que decir que gracias por todo lo que me ayudo y
                                por el aguante que pusimos todos para llegar a esto.</p>
                            <div className="social-icons d-flex flex-row w-100">
                                <NavLink to={"https://mail.google.com/mail/u/0/#inbox"} className='w-100  '><BsMailbox2Flag className='w-100 icon' /></NavLink>
                                <NavLink to={"https://www.linkedin.com/in/tomas-williams-neme-scheij-b60b8a1bb/"} className='w-100'> <BsLinkedin className='w-100 icon' /> </NavLink>
                                <NavLink to={"https://www.instagram.com/tomi_williams01/"} className='w-100'><BsGithub className='w-100 icon ' /></NavLink>
                            </div>
                        </div>

                    </Col>
                    <Col className='d-flex justify-content-center flex-md-row flex-column  pt-5 gap-4' xs={12} md={12}>
                        <div className="card">
                            <img className="card-image" src={fedeProfile} alt="profile picture"></img>
                            <h2 className="card-title">Federico Code</h2>
                            <p className="card-text">Me considero buen compañero, siempre busco aportar al equipo.
                                Con este proyecto aprendi muchisimo y mi equipo nada mas que decir que gracias por todo lo que me ayudo y
                                por el aguante que pusimos todos para llegar a esto.</p>
                            <div className="social-icons d-flex flex-row w-100">
                                <NavLink to={"https://mail.google.com/mail/u/0/#inbox"} className='w-100  '><BsMailbox2Flag className='w-100 icon' /></NavLink>
                                <NavLink to={"https://www.linkedin.com/in/tomas-williams-neme-scheij-b60b8a1bb/"} className='w-100'> <BsLinkedin className='w-100 icon' /> </NavLink>
                                <NavLink to={"https://www.instagram.com/tomi_williams01/"} className='w-100'><BsGithub className='w-100 icon ' /></NavLink>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-image" src={facuProfile} alt="profile picture"></img>
                            <h2 className="card-title">Facundo Gimenez</h2>
                            <p className="card-text">Me considero buen compañero, siempre busco aportar al equipo.
                                Con este proyecto aprendi muchisimo y mi equipo nada mas que decir que gracias por todo lo que me ayudo y
                                por el aguante que pusimos todos para llegar a esto.</p>
                            <div className="social-icons d-flex flex-row w-100">
                                <NavLink to={"https://mail.google.com/mail/u/0/#inbox"} className='w-100  '><BsMailbox2Flag className='w-100 icon' /></NavLink>
                                <NavLink to={"https://www.linkedin.com/in/tomas-williams-neme-scheij-b60b8a1bb/"} className='w-100'> <BsLinkedin className='w-100 icon' /> </NavLink>
                                <NavLink to={"https://www.instagram.com/tomi_williams01/"} className='w-100'><BsGithub className='w-100 icon ' /></NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About