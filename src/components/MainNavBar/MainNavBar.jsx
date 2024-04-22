import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { IconContext } from 'react-icons'
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai'
import { HiBars4 } from 'react-icons/hi2'
import { IoLogIn } from 'react-icons/io5'
import { RiLogoutBoxFill, RiShoppingCartLine } from 'react-icons/ri'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../assets/images/logo_AlAngulo.png'
import { useAuthContext } from '../../context/AuthContext'
import { useUserContext } from '../../context/UserContext'
import Login from '../Login/Login'
import './MainNavBar.css'
export const MainNavBar = () => {
	const { user, setLoguedUser } = useAuthContext()
	const { userCart, getUserCart, setUserCart } = useUserContext()

	useEffect(() => {
		if (user.id) {
			getUserCart(user.id)
		}
	}, [user])

	const [showModal, setShowModal] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [showSearch, setShowSearch] = useState(false)
	const navigate = useNavigate()
	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleShowModal = () => {
		setShowModal(true)
	}

	const isAdmin = () => {
		if (Object.keys(user).length != 0) {
			return user && user.role === 'admin'
		} else {
			return false
		}
	}
	const isUser = () => {
		if (Object.keys(user).length != 0) {
			return user.role === 'user' || user.role === 'admin'
		} else {
			return false
		}
	}

	const [showCart, setShowCart] = useState(false)

	const total = userCart.total

	const handleCartToggle = () => setShowCart(!showCart)

	const handleLinkClick = () => {
		if (isOpen) {
			setIsOpen(false)
		}
	}
	const handleLogout = () => {
		Swal.fire({
			title: 'Cerrar Sesion ?',
			confirmButtonText: 'Si',
			confirmButtonColor: '#25a18e',
			showDenyButton: true,
			denyButtonText: `No`,
		}).then((result) => {
			if (result.isConfirmed) {
				localStorage.clear()
				setUserCart({})
				setLoguedUser({})
				navigate('/')
			}
		})
	}
	return (
		<>
			<div className=''>
				<header className='header'>
					<div className='nav-container'>
						<div className='nav'>
							<div className='menuBar' onClick={() => setIsOpen(!isOpen)}>
								{isOpen ? (
									<AiOutlineClose />
								) : (
									<IconContext.Provider
										value={{ className: 'global-class-name' }}>
										<span>
											<HiBars4 />
										</span>
									</IconContext.Provider>
								)}
							</div>
							<div className={isOpen ? 'smallMenu ' : 'menu'}>
								<NavLink
									to={'/'}
									className={'nav-link nav-link-style'}
									onClick={() => handleLinkClick()}>
									Inicio
								</NavLink>
								<NavLink
									to={'/productos'}
									className={'nav-link nav-link-style'}
									onClick={() => handleLinkClick()}>
									Productos
								</NavLink>
								<NavLink
									to={'/canchas'}
									className={'nav-link nav-link-style'}
									onClick={() => handleLinkClick()}>
									Canchas
								</NavLink>
								<NavLink
									to={'/nosotros'}
									className={'nav-link nav-link-style'}
									onClick={() => handleLinkClick()}>
									Nosotros
								</NavLink>

								{isAdmin() && (
									<NavLink
										to={'/admin'}
										className={'nav-link nav-link-style'}
										onClick={() => handleLinkClick()}>
										Admin
									</NavLink>
								)}
							</div>
							<NavLink to={'/'} className={'logo'}>
								<img src={logo} alt='logo' />
								<b className='logoName'>AlAngulo</b>
							</NavLink>
							<div className='noti'>
								{user.role === 'admin' ? (
									<></>
								) : (
									<IconContext.Provider
										value={{ className: 'global-class-name Nav-Icon' }}>
										<span className='cart' onClick={handleCartToggle}>
											<AiOutlineShoppingCart />
											{!userCart || Object.keys(userCart).length === 0 ? (
												<></>
											) : (
												<b className='store'>
													{userCart.orders.length + userCart.bookings.length}
												</b>
											)}
										</span>
									</IconContext.Provider>
								)}

								<IconContext.Provider
									value={{ className: 'global-class-name Nav-Icon' }}>
									<span>
										{isUser() ? (
											<>
												<RiLogoutBoxFill
													onClick={handleLogout}
													className='pointer-event '
												/>
												<img
													src={user.image}
													alt='imagen de usuario'
													className='user_profile_img rounded rounded-5 ms-2'
												/>
											</>
										) : (
											<>
												<IoLogIn onClick={handleShowModal} />
												<Login
													show={showModal}
													handleClose={handleCloseModal}
												/>
											</>
										)}
									</span>
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</header>
			</div>

			<Offcanvas show={showCart} onHide={handleCartToggle} placement='end'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>
						<RiShoppingCartLine />

						<i className='ms-4'>CARRITO</i>
					</Offcanvas.Title>
				</Offcanvas.Header>
				<hr />
				<Offcanvas.Body>
					{userCart && Object.keys(userCart).length === 0 ? (
						<p>No hay productos agregados.</p>
					) : (
						<div>
							{userCart.orders.map((order) => (
								<div key={order._id} className='product-item'>
									<img
										src={order.product.image}
										alt={order.product.name}
										className='product-image'
									/>
									<div className='product-details'>
										<ul>
											<li>{order.product.name}</li>
											<li>${order.product.price}</li>
											<li>Cantidad: {order.quantity}</li>
										</ul>
									</div>
								</div>
							))}
							{userCart.bookings.length != 0 ? (
								<h2 className='paragraph '>
									{userCart.bookings.length < 2
										? 'Tienes 1 cancha reservada'
										: `Tienes ${userCart.bookings.length} canchas reservadas`}
								</h2>
							) : (
								<h2 className='paragraph cart-total'>No hay reservas hechas</h2>
							)}
							<hr />
							<p className='paragraph cart-total'>Total : ${total}</p>
						</div>
					)}
					<hr />
					<div className='d-grid position-absolute bottom-0 start-50 translate-middle'>
						{user && user.id ? (
							<NavLink
								to={'./carrito'}
								className={'d-grid text-decoration-none'}>
								<Button
									variant='success'
									size='md'
									className='cart-button'
									onClick={handleCartToggle}>
									IR AL CARRITO
								</Button>
							</NavLink>
						) : (
							<NavLink
								to={'/register'}
								className={'d-grid text-decoration-none'}>
								<Button variant='success' size='md' className='cart-button'>
									Registrate
								</Button>
							</NavLink>
						)}
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	)
}
