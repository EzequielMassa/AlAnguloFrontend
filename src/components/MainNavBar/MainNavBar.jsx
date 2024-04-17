import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { IconContext } from 'react-icons'
import {
	AiOutlineClose,
	AiOutlineLogin,
	AiOutlineLogout,
	AiOutlineSearch,
	AiOutlineShoppingCart,
} from 'react-icons/ai'
import { HiBars4 } from 'react-icons/hi2'
import { RiShoppingCartLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_AlAngulo.png'
import Login from '../Login/Login'
import './MainNavBar.css'
import { useAuthContext } from '../../context/AuthContext'
import { useUserContext } from '../../context/UserContext'
import { useEffect } from 'react'

export const MainNavBar = () => {
	const { user } = useAuthContext()
	const { userCart, getUserCart, userCartLoading } = useUserContext()

	useEffect(() => {
		if (user.id) {
			getUserCart(user.id)
		}
	}, [user])

	const [showModal, setShowModal] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const handleCloseModal = () => {
		setShowModal(false)
	}

	const handleShowModal = () => {
		setShowModal(true)
	}

	const isAdmin = () => {
		if (Object.keys(user).length != 0) {
			return user && user.roles[0].name === 'admin'
		}
		else {
			return false
		}
	}
	const isUser = () => {
		if (Object.keys(user).length != 0){
			return user.roles[0].name === 'user' || user.roles[0].name === 'admin'
		}
		else{
			return false
		}
	}


	const [showCart, setShowCart] = useState(false)

	const [products, setProducts] = useState([
		
	])

	const total = userCart.total
	console.log(user)

	const handleCartToggle = () => setShowCart(!showCart)
	const handleLinkClick = () => {
		if (isOpen) {
			setIsOpen(false)
		}
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
									to={'./'}
									className={'nav-link nav-link-style'}
									onClick={() => handleLinkClick()}>
									Inicio
								</NavLink>
								<NavLink
									to={'./productos'}
									className={'nav-link nav-link-style'}
									onClick={() => handleLinkClick()}>
									Productos
								</NavLink>
								<NavLink
									to={'./canchas'}
									className={'nav-link nav-link-style'}
									onClick={() => handleLinkClick()}>
									Canchas
								</NavLink>
								<NavLink
									to={'./nosotros'}
									className={'nav-link nav-link-style'}
									onClick={() => handleLinkClick()}>
									Nosotros
								</NavLink>

								{isAdmin() && (
									<NavLink
										to={'./admin'}
										className={'nav-link nav-link-style'}
										onClick={() => handleLinkClick()}>
										Admin
									</NavLink>
								)}
							</div>
							<NavLink to={'./'} className={'logo'}>
								<img src={logo} alt='logo' />
								<b className='logoName'>AlAngulo</b>
							</NavLink>
							<div className='noti'>
								<IconContext.Provider
									value={{ className: 'global-class-name Nav-Icon' }}>
									<span>
										<AiOutlineSearch />
									</span>
								</IconContext.Provider>

								<IconContext.Provider
									value={{ className: 'global-class-name' }}>
									<span className='cart Nav-Icon' onClick={handleCartToggle}>
										<AiOutlineShoppingCart />
										{!userCart  || Object.keys(userCart).length === 0 ? (
											<></>
											) : (
												<b className='store'>{userCart.orders.length}</b>
												)}
										
									</span>
								</IconContext.Provider>
								<IconContext.Provider
									value={{ className: 'global-class-name Nav-Icon' }}>
									<span>
										{isUser ? (
										<>
											<AiOutlineLogout onClick={handleShowModal}/>
											<Login show={showModal} handleClose={handleCloseModal} />
											<b className='user_Name'>Hola {user.name}</b>
										</>
										):(
										<>
											<AiOutlineLogin onClick={handleShowModal} />
											<Login show={showModal} handleClose={handleCloseModal} />
										</>)
										}

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
									{user.name} tiene {userCart.bookings.length} reserva/s de canchas
								</h2>
							):(
								<h2 className='paragraph cart-total'>
									No hay reservas hechas
								</h2>
							)
							}
							<hr />
							<p className='paragraph cart-total'>Total : ${total}</p>
						</div>
					)}
					<hr />
					<div className='d-grid position-absolute bottom-0 start-50 translate-middle'>
						<NavLink to={'./carrito'} className={'d-grid text-decoration-none'}>
							<Button
								variant='success'
								size='md'
								className='cart-button'
								onClick={handleCartToggle}>
								IR AL CARRITO
							</Button>
						</NavLink>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	)
}
