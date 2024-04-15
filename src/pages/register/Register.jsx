import { useState } from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_AlAngulo.png'
import Login from '../../components/Login/Login'
import './register.css'
function Register() {
	const [showModal, setShowModal] = useState(false)
	const [phone, setPhone] = useState('')
	const reg = /^[0-9]+$/
	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleShowModal = () => {
		setShowModal(true)
	}
	const handlePhoneChange = (e) => {
		const inputValue = e.target.value
		if (!reg.test(inputValue)) {
			// Display error message or handle invalid input
			console.log('Invalid phone number')
		} else {
			setPhone(inputValue)
		}
	}
	return (
		<>
			<Container className='justify-content-center d-flex register-container w-100 align-content-center  '>
				<Row className='d-flex  justify-content-center align-content-center   align-align-items-center  py-2 px-0 px-md-4  '>
					<Col
						className=' d-none d-md-flex justify-content-center flex-column align-content-center px-5'
						xs={12}
						md={6}
						xl={6}>
						<Image className='logo-img pb-4' src={logo} />
						<Card className=' justify-content-center align-content-center card-info'>
							<Card.Body className='align-content-center align-text-center '>
								<Card.Title className='tittle'>
									Contactate con nosotros sin problemas
								</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									Siempre atentos a tus consultas
								</Card.Subtitle>
								<Card.Text className='text-card'>
									La mejor app de alquiler de canchas en Argentina.
								</Card.Text>
								<div className='card-links d-flex flex-row gap-2'>
									<NavLink to={'/productos'} className='text-decoration-none '>
										Productos en nuestra tienda
									</NavLink>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col
						className='  d-flex justify-content-center align-content-center'
						xs={12}
						md={6}
						xl={6}>
						<Form className='form-register align-content-center '>
							<h1 className='title register-title '>Formulario de Registro</h1>
							<Form.Group className='mb-2 form-group'>
								<Form.Label className='form-label'>Direccion email</Form.Label>
								<Form.Control
									id='email'
									required
									type='email'
									minLength={5}
									maxLength={40}
									placeholder='Ingresa un email'
								/>
								<Form.Text className='text-muted'>
									Nunca compartiremos tu email con nadie
								</Form.Text>
							</Form.Group>

							<Form.Group className='mb-3'>
								<div className='box'>
									<Form.Label className='form-label'>Contraseña</Form.Label>
									<Form.Control
										id='password'
										required
										type='password'
										minLength={8}
										maxLength={20}
										placeholder='Ingresa una contraseña de 8-20 caracteres'
									/>
								</div>
								<div className='box mt-3'>
									<Form.Label className='form-label'>
										Telefono celular
									</Form.Label>
									<Form.Control
										id='phone'
										required
										type='text'
										minLength={9}
										maxLength={10}
										placeholder='Celular, ej: 3816646368'
										value={phone}
										onChange={handlePhoneChange}
									/>
								</div>
								<div className='box mt-3'>
									<Form.Label className='form-label'>Nombre</Form.Label>
									<Form.Control
										id='name'
										required
										minLength={4}
										maxLength={20}
										type='text'
										placeholder='Nombre'
									/>
								</div>
								<div className='box mt-3'>
									<Form.Label className='form-label'>Apellido</Form.Label>
									<Form.Control
										id='lastname'
										required
										minLength={4}
										maxLength={20}
										type='text'
										placeholder='Apellido'
									/>
								</div>
								<div className='box mt-3'>
									<Form.Label className='form-label'>Imagen</Form.Label>
									<Form.Control
										id='url'
										required
										type='url'
										placeholder='Agrega una url de tu imagen'
									/>
								</div>
							</Form.Group>

							<Button variant='primary' type='submit'>
								Registrarse
							</Button>
							<div className='box-link'>
								<NavLink onClick={handleShowModal} className={'redirect-link'}>
									Ya tienes una cuenta? Ingresa
								</NavLink>
								<Login show={showModal} handleClose={handleCloseModal} />
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Register
