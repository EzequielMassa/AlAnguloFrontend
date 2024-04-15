import React, { useEffect } from 'react'
import './Cart.css'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import { LuPlus, LuMinus } from "react-icons/lu";
import { formatCurrency } from '../../helpers/formatCurrency';
import { GoTrash } from "react-icons/go";
import { useUserContext } from '../../context/UserContext';
import { useAuthContext } from '../../context/AuthContext';



export const Cart = () => {
    const {
		userCart,
	} = useUserContext()
    console.log(userCart)
    const [products, setProducts] = useState([
        
    ]);
    const [bookings, setBookings] = useState([
        {
			id: 1,
			name: 'canchita',
			time: '12:00',
			quantity: 1,
			image: 'src/assets/images/nuestras-canchas-hero.webp',
            price: 5000
		},
		{
			id: 2,
			name: 'cancha',
			time: '17:00',
			quantity: 2,
			image: 'src/assets/images/nuestras-canchas-hero.webp',
            price: 5000
		},
		{
			id: 2,
			name: 'canchota',
			time: '18:00',
			quantity: 2,
			image: 'src/assets/images/nuestras-canchas-hero.webp',
            price: 5000
		},
    ]);
    const [displayProducts, setDisplayProducts] = useState(true)
    
    // const productsSubtotal = userCart.orders.total
    // // .reduce((acc, product) => acc + product.price * product.quantity, 0);
    // const bookingsSubtotal = bookings.reduce((acc, booking) => acc + booking.price * booking.quantity, 0);
    // const subtotal = displayProducts ? productsSubtotal : bookingsSubtotal;

    // const total = productsSubtotal + bookingsSubtotal
    

    return (
        <div className='container mt-5 pt-4 '>
            <h1 className='text-center title-cartPage m-4'>Carrito</h1>
            <div className='d-md-flex'>
                <div className="buttons align-self-center d-flex flex-md-column gap-5 justify-content-center m-4">
                    <Button 
                        variant="link"
                        onClick={() => setDisplayProducts(true)} 
                        className={`btn-cart ${displayProducts ? 'active' : ''}`}
                        >Productos
                    </Button>
                    <Button 
                        variant="link" 
                        onClick={() => setDisplayProducts(false)}
                        className={`btn-cart ${!displayProducts ? 'active' : ''}`}
                        >Reservas
                    </Button>
                </div>
                {displayProducts ? (
                    <>
                        <div className='flex-grow-1'>
                            {
                                userCart ? userCart.orders.map((order) => (
                                    <Card key={order.product.id} className=' cartCards'>
                                        <div className='d-flex align-items-center flex-column flex-md-row justify-content-around '>
                                            <div className=''>
                                                <Card.Img src={order.product.image} className='card-imagen col-3'/>
                                            </div>
                                            <div className='separador d-none d-md-block'> 
                                            </div>
                                            <div className=''>
                                                <Card.Body className='card-body d-flex flex-column align-items-center'>
                                                    <Card.Title>{order.product.name}</Card.Title>
                                                    <Card.Text className='icons-style-text'>Cantidad</Card.Text>
                                                    <div className="d-flex justify-content-between align-items-center gap-3 ">
                                                        <LuMinus className='icons-style icons-styleHover'/> {/* agregar Onclick */}
                                                        <span>{order.quantity}</span>
                                                        <LuPlus className='icons-style icons-styleHover' /> {/* agregar Onclick */}
                                                    </div>
                                                    <Card.Text className='mt-2 align-items-center d-flex '>
                                                        Precio {formatCurrency(order.product.price*order.quantity)}
                                                    </Card.Text>
                                                    <Button variant="outline-danger" className='position-absolute end-0 bottom-0 ' ><GoTrash /></Button>
                                                </Card.Body>
                                            </div>
                                        </div>
                                    </Card>
                                )):(<></>)}
                            
                        </div>
                    </>
                ) : (
                    <div className='flex-grow-1'>
                        {bookings.map((booking) => (
                            <Card key={booking.id} className='mb-2 cartCards'>
                                <div className='d-flex align-items-center justify-content-around flex-column flex-md-row  '>
                                    <div>
                                        <Card.Img variant="top" src={booking.image} className='card-img-booking'/>
                                    </div>
                                    <div className='separador d-none d-md-block'> 
                                        </div>
                                <div>
                                    <Card.Body className='card-body d-flex flex-column align-items-center'>
                                        <Card.Title>{booking.name}</Card.Title>
                                        <Card.Text className='align-align-items-center '>
                                            <FaRegClock className='icons-style me-2'/> {booking.time}
                                        </Card.Text>
                                        <Card.Text>
                                            Precio: {formatCurrency(booking.price)}
                                        </Card.Text>
                                        <Button variant="outline-danger" className='position-absolute end-0 bottom-0 '><GoTrash /></Button>
                                    </Card.Body>
                                </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
            <div className='d-flex flex-column align-items-end container total-price my-4 gap-4'>
                
                {displayProducts ? (
                    <h3>
                        Subtotal Productos: {userCart ? userCart.orders.total : 'no hay productos'}
                    </h3>
                ):(
                    <h3>
                        Subtotal Reservas: {formatCurrency(subtotal)}
                    </h3>
                )}
                <h3>Total: {formatCurrency(total)}</h3>
                <Button variant="success">Pagar</Button>
            </div>
        </div>
    );
};



