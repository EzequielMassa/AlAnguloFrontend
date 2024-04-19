import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaRegClock } from 'react-icons/fa'
import { GoTrash } from 'react-icons/go'
import { LuMinus, LuPlus } from 'react-icons/lu'
import Spinner from '../../components/Spinner/Spinner'
import { useAuthContext } from '../../context/AuthContext'
import { useUserContext } from '../../context/UserContext'
import { formatCurrency } from '../../helpers/formatCurrency'
import './Cart.css'

export const Cart = () => {
	const { user } = useAuthContext()
	const { userCart, getUserCart, userCartLoading, clearUserCart } =
		useUserContext()

	useEffect(() => {
		if (user.id) {
			getUserCart(user.id)
		}
	}, [user])

	const [displayProducts, setDisplayProducts] = useState(true)

	let productsSubtotal
	if (userCart.orders) {
		const accSubtotal = userCart.orders.map((order) => {
			const productQuantity = order.quantity
			const productPrice = order.product.price
			const result = productQuantity * productPrice
			return result
		})
		productsSubtotal = accSubtotal.reduce((a, b) => a + b, 0)
	} else {
		productsSubtotal = 0
	}

	let bookingsSubtotal
	if (userCart.bookings) {
		const accSubtotal = userCart.bookings.map((booking) => {
			const soccerFieldPrice = booking.soccerField.price
			return soccerFieldPrice
		})
		bookingsSubtotal = accSubtotal.reduce((a, b) => a + b, 0)
	} else {
		bookingsSubtotal = 0
	}

	const handleCheckout = () => {
		clearUserCart(user.id)
	}

	if (userCartLoading) {
		return <Spinner />
	}

	return (
		<div className='container mt-5 pt-4 '>
			<h1 className='text-center title-cartPage m-4'>Carrito</h1>
			<div className='d-md-flex'>
				<div className='buttons align-self-center d-flex flex-md-column gap-5 justify-content-center m-4'>
					<Button
						variant='link'
						onClick={() => setDisplayProducts(true)}
						className={`btn-cart ${displayProducts ? 'active' : ''}`}>
						Productos
					</Button>
					<Button
						variant='link'
						onClick={() => setDisplayProducts(false)}
						className={`btn-cart ${!displayProducts ? 'active' : ''}`}>
						Reservas
					</Button>
				</div>
				{displayProducts ? (
					<>
						<div className='flex-grow-1'>
							{userCart.orders ? (
								userCart.orders.map((order) => (
									<Card key={order._id} className=' cartCards'>
										<div className='d-flex align-items-center flex-column flex-md-row justify-content-around '>
											<div className=''>
												<Card.Img
													src={order.product.image}
													className='card-imagen col-3'
												/>
											</div>
											<div className='separador d-none d-md-block'></div>
											<div className=''>
												<Card.Body className='card-body d-flex flex-column align-items-center'>
													<Card.Title>{order.product.name}</Card.Title>
													<Card.Text className='icons-style-text'>
														Cantidad
													</Card.Text>
													<div className='d-flex justify-content-between align-items-center gap-3 '>
														<LuMinus className='icons-style icons-styleHover' />{' '}
														{/* agregar Onclick */}
														<span>{order.quantity}</span>
														<LuPlus className='icons-style icons-styleHover' />{' '}
														{/* agregar Onclick */}
													</div>
													<Card.Text className='mt-2 align-items-center d-flex '>
														Precio{' '}
														{formatCurrency(
															order.product.price * order.quantity
														)}
													</Card.Text>
													<Button
														variant='outline-danger'
														className='position-absolute end-0 bottom-0 '>
														<GoTrash />
													</Button>
												</Card.Body>
											</div>
										</div>
									</Card>
								))
							) : (
								<></>
							)}
						</div>
					</>
				) : (
					<div className='flex-grow-1'>
						{userCart.bookings ? (
							userCart.bookings.map((booking) => (
								<Card key={booking._id} className='mb-2 cartCards'>
									<div className='d-flex align-items-center justify-content-around flex-column flex-md-row  '>
										<div>
											<Card.Img
												variant='top'
												src={booking.soccerField.imgUrl}
												className='card-img-booking'
											/>
										</div>
										<div className='separador d-none d-md-block'></div>
										<div>
											<Card.Body className='card-body d-flex flex-column align-items-center'>
												<Card.Title>{booking.soccerField.name}</Card.Title>
												<Card.Text className='align-align-items-center '>
													<FaRegClock className='icons-style me-2' />{' '}
													{booking.time}
												</Card.Text>
												<Card.Text>
													Precio: {formatCurrency(booking.soccerField.price)}
												</Card.Text>
												<Button
													variant='outline-danger'
													className='position-absolute end-0 bottom-0 '>
													<GoTrash />
												</Button>
											</Card.Body>
										</div>
									</div>
								</Card>
							))
						) : (
							<></>
						)}
					</div>
				)}
			</div>
			<div className='d-flex flex-column align-items-end container total-price my-4 gap-4'>
				{displayProducts ? (
					<h3>
						Subtotal Productos:{' '}
						{userCart.orders
							? formatCurrency(productsSubtotal)
							: 'no hay productos'}
					</h3>
				) : (
					<h3>
						Subtotal Reservas:{' '}
						{userCart.orders
							? formatCurrency(bookingsSubtotal)
							: 'no hay productos'}
					</h3>
				)}
				<h3>Total: {formatCurrency(userCart.total)}</h3>
				<Button variant='success' onClick={handleCheckout}>
					Pagar
				</Button>
			</div>
		</div>
	)
}
