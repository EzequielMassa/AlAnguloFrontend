import { useFormik } from 'formik'
import { useState } from 'react'
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import logo from '../../assets/images/logo_AlAngulo.png'
import Login from '../../components/Login/Login'
import { useAuthContext } from '../../context/AuthContext'
import './register.css'

function Register() {
	const navigate = useNavigate()
	const { loguedUser, registerLoading, registerError, register } =
		useAuthContext()
	const [showModal, setShowModal] = useState(false)

	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleShowModal = () => {
		setShowModal(true)
	}
	const formik = useFormik({
		initialValues: {
			name: '',
			lastname: '',
			email: '',
			phone: '',
			image: '',
			password: '',
		},
		validationSchema: Yup.object({
			name: Yup.string('Ingresa un nombre valido')
				.required('Completa este campo')
				.min(3, 'Minimo 3 letras')
				.max(150, 'Maximo 150 letras'),
			lastname: Yup.string('Ingresa un apellido valido')
				.required('Completa este campo')
				.min(3, 'Minimo 3 letras')
				.max(150, 'Maximo 150 letras'),
			email: Yup.string()
				.email('Ingresa un email valido')
				.required('Completa este campo'),
			phone: Yup.string()
				.required('Completa este campo')
				.matches(
					/^\+?\d{0,3}\s?\d{9}$/,
					'Ingresa un numero de telefono valido'
				),
			password: Yup.string()
				.required('Completa la password')
				.min(8, 'Ingresa minimo 8 caracteres')
				.max(100, 'Maximo 25 caracteres')
				.matches(
					/^(?!.*\s).{8,100}$/,
					'Debe tener entre 8 y 100 caracteres sin espacios en blanco'
				),
		}),
		onSubmit: (formData) => {
			if (formData.image === '') {
				formData.image =
					'https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/user-man-512.png'
			}
			register(formData)
			formik.handleReset()
			navigate('/')
		},
	})

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
						<Form
							onSubmit={formik.handleSubmit}
							className='form-register align-content-center '>
							<h1 className='title register-title '>Formulario de Registro</h1>

							<Form.Group className='mb-2 form-group'>
								<Form.Label className='form-label'>Direccion email</Form.Label>
								<Form.Control
									id='email'
									name='email'
									onChange={formik.handleChange}
									type='email'
									placeholder='Ingresa un email'
									isInvalid={formik.errors.email && formik.touched.email}
								/>
								<Form.Control.Feedback type='invalid'>
									{formik.errors.email}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group className='mb-3'>
								<div className='box'>
									<Form.Label className='form-label'>Contraseña</Form.Label>
									<Form.Control
										id='password'
										onChange={formik.handleChange}
										name='password'
										type='password'
										placeholder='Ingresa una contraseña de 8-20 caracteres'
										isInvalid={
											formik.errors.password && formik.touched.password
										}
									/>
									<Form.Control.Feedback type='invalid'>
										{formik.errors.password}
									</Form.Control.Feedback>
								</div>
								<div className='box mt-3'>
									<Form.Label className='form-label'>
										Telefono celular
									</Form.Label>
									<Form.Control
										id='phone'
										type='text'
										placeholder='Celular, ej: 3816646368'
										name='phone'
										onChange={formik.handleChange}
										isInvalid={formik.errors.phone && formik.touched.phone}
									/>
									<Form.Control.Feedback type='invalid'>
										{formik.errors.phone}
									</Form.Control.Feedback>
								</div>
								<div className='box mt-3'>
									<Form.Label className='form-label'>Nombre</Form.Label>
									<Form.Control
										id='name'
										type='text'
										placeholder='Nombre'
										name='name'
										onChange={formik.handleChange}
										isInvalid={formik.errors.name && formik.touched.name}
									/>
									<Form.Control.Feedback type='invalid'>
										{formik.errors.name}
									</Form.Control.Feedback>
								</div>
								<div className='box mt-3'>
									<Form.Label className='form-label'>Apellido</Form.Label>
									<Form.Control
										id='lastname'
										type='text'
										placeholder='Apellido'
										name='lastname'
										onChange={formik.handleChange}
										isInvalid={
											formik.errors.lastname && formik.touched.lastname
										}
									/>
									<Form.Control.Feedback type='invalid'>
										{formik.errors.lastname}
									</Form.Control.Feedback>
								</div>
								<div className='box mt-3'>
									<Form.Label className='form-label'>Imagen</Form.Label>
									<Form.Control
										id='image'
										type='text'
										placeholder='Agrega una url de tu imagen'
										name='image'
										onChange={formik.handleChange}
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
