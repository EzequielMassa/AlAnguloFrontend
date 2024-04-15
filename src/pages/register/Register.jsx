import { useState } from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_AlAngulo.png'
import Login from '../../components/Login/Login'
import './register.css'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Register() {
	const navigate = useNavigate();
	const {loguedUser,
		registerLoading,
		registerError,
		register } = useAuthContext()
	const [showModal, setShowModal] = useState(false)
	const [	formData,setFormData] = useState({
		name:"",
		lastname:"",
		email:"",
		phone:"",
		image:"",
		password:""
		})
	const validateRegisterData = () =>{
		
	}
	const handleSubmit = (e) =>{
		e.preventDefault();

		register(formData)
		if(loguedUser){
			navigate('/')
		}
	}

	const reg = /^[0-9]+$/
	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleShowModal = () => {
		setShowModal(true)
	}
	const handleChange = (e)=>{
		setFormData({...formData,[e.target.name]:e.target.value})
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
						<Form onSubmit={handleSubmit} className='form-register align-content-center '>
							<h1 className='title'>Formulario de Registro</h1>
							<Form.Group className='mb-2 form-group'>
								<Form.Label className='form-label'>Direccion email</Form.Label>
								<Form.Control
									id='email'
									required
									name='email'
									value={formData.email}
									onChange={handleChange}
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
										onChange={handleChange}
										name='password'
										value={formData.password}
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
										value={formData.phone}
										name='phone'
										onChange={handleChange}
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
										name='name'
										value={formData.name}
										onChange={handleChange}
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
										name='lastname'
										value={formData.lastname}
										onChange={handleChange}
									/>
								</div>
								<div className='box mt-3'>
									<Form.Label className='form-label'>Imagen</Form.Label>
									<Form.Control
										id='url'
										type='url'
										placeholder='Agrega una url de tu imagen'
										name='image'
										value={formData.image}
										onChange={handleChange}
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
