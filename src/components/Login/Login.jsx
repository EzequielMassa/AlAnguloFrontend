import React, { useState } from 'react'
import {
	Button,
	Form,
	FormControl,
	FormGroup,
	FormLabel,
	Modal,
} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAuthContext } from '../../context/AuthContext'
import Spinner from '../Spinner/Spinner'
import './login.css'
function Login({ show, handleClose }) {
	const { registerLoading, registerError, login } = useAuthContext()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const navigate = useNavigate()
	const handleLogin = async (e) => {
		e.preventDefault()
		const formData = { email, password }
		await login(formData)
		const userlocal = localStorage.getItem('user')
		if (!userlocal) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Usuario o Contraseña mal ingresados',
			})
		} else {
			Swal.fire({
				title: 'Bienvenido a AlAngulo',
				confirmButtonText: 'Okey',
				confirmButtonColor: '#25a18e',
			}).then((result) => {
				if (result.isConfirmed) {
					handleClose()
					setEmail('')
					setPassword('')
				}
			})
			navigate('/')
		}
	}

	return (
		<Modal show={show} onHide={handleClose} centered>
			<div className='heading-text'>
				<h1 className='heading pt-2 '>Inicio de Sesión</h1>
			</div>
			<hr />
			<Modal.Body className='body-modal'>
				{registerLoading ? (
					<Spinner />
				) : (
					<div className='contenedor'>
						<Form className='form' onSubmit={handleLogin}>
							<FormGroup controlId='email'>
								<FormLabel className='form-label'>Email</FormLabel>
								<FormControl
									className='form-input'
									minLength={5}
									maxLength={40}
									name='email'
									type='email'
									required
									placeholder='Ingresa tu email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</FormGroup>
							<FormGroup className='mt-3' controlId='password'>
								<FormLabel className='form-label'>Contraseña</FormLabel>
								<FormControl
									name='password'
									minLength={8}
									maxLength={25}
									className='form-input'
									type={showPassword ? 'text' : 'password'}
									placeholder='Contraseña'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</FormGroup>
							<FormGroup className='mt-3' controlId='formBasicCheckbox'>
								<Form.Check
									type='checkbox'
									label='Mostrar contraseña'
									onChange={() => setShowPassword(!showPassword)}
								/>
							</FormGroup>
							<Button variant='primary' className='login-button' type='submit'>
								Iniciar Sesión
							</Button>
						</Form>
					</div>
				)}
			</Modal.Body>
			<Modal.Footer className='justify-content-center '>
				<div className='button-group'>
					<div className='secondary-buttons'>
						<Button variant='success'>
							<NavLink
								to={'/register'}
								onClick={handleClose}
								className='link-nav'>
								{' '}
								Registrate
							</NavLink>
						</Button>
						<Button variant='danger' onClick={handleClose}>
							Cancelar
						</Button>
					</div>
				</div>
			</Modal.Footer>
		</Modal>
	)
}

export default Login
