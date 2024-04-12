import React from 'react'
import Link from 'react-router-dom'
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import { CiLinkedin, CiInstagram, CiMail } from "react-icons/ci";
import './about.css'
import tomiProfile from './profiles/perfilTomi.jpg'
const About = () => {
    return (
        <>
            <Container className='d-flex justify-content-center align-content-center w-100'>
                <Row className='d-flex justify-content-center w-100 pt-5'>
                    <Col className='d-flex justify-content-center flex-md-row flex-column  pt-5 gap-4' xs={12} md={12}>
                    <Card  >
                            <div className="img-container">
                            <Card.Img className=' profile-image pt-2 rounded-circle'  src={tomiProfile} />

                            </div>
                            <Card.Body className='d-flex justify-content-center flex-column '>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className="social-icons d-flex flex-row pt-3">
                                    <CiMail className='w-100 icon' />
                                    <CiLinkedin className='w-100 icon' />
                                    <CiInstagram className='w-100 icon ' />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card  >
                        <div className="img-container">
                            <Card.Img className=' profile-image pt-2 rounded-circle'  src={tomiProfile} />

                            </div>
                            <Card.Body className='d-flex justify-content-center flex-column '>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className="social-icons d-flex flex-row pt-3">
                                    <CiMail className='w-100 icon' />
                                    <CiLinkedin className='w-100 icon' />
                                    <CiInstagram className='w-100 icon ' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center flex-md-row flex-column  pt-5 gap-4' xs={12} md={12}>
                        <Card  >
                        <div className="img-container">
                            <Card.Img className=' profile-image pt-2 rounded-circle'  src={tomiProfile} />

                            </div>
                            <Card.Body className='d-flex justify-content-center flex-column '>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className="social-icons d-flex flex-row pt-3">
                                    <CiMail className='w-100 icon' />
                                    <CiLinkedin className='w-100 icon' />
                                    <CiInstagram className='w-100 icon ' />
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                        <div className="img-container">
                            <Card.Img className=' profile-image pt-2 rounded-circle'  src={tomiProfile} />
                            </div>
                            <Card.Body className='d-flex justify-content-center flex-column '>
                                <div className="description-info">
                                    <Card.Title className='name'>Tomas Williams</Card.Title>
                                    <Card.Text className='description'>
                                        Soy un compañero muy colaborador, me gusta el buen ambiente dentro del equipo
                                        <br />y siempre trato de cumplir a tiempo con todas mis tareas en el proyecto.
                                        <br />
                                        Siempre dispuesto a seguir aprendiendo y aportanto.
                                    </Card.Text>
                                </div>
                                <div className="social-icons d-flex flex-row pt-3">
                                    <Link  className='w-100 link-light '><CiMail className='w-100 icon' /></Link>
                                    <CiLinkedin className='w-100 icon' />
                                    <CiInstagram className='w-100 icon ' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About