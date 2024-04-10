import React from 'react'
import './Cart.css'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const [products, setProducts] = useState([
        {
			id: 1,
			name: 'Camiseta',
			price: 10000,
			quantity: 1,
			image: '',
		},
		{
			id: 2,
			name: 'Bebida',
			price: 1700,
			quantity: 2,
			image: '',
		},
		{
			id: 2,
			name: 'Bebida',
			price: 1700,
			quantity: 2,
			image: '',
		},
    ]);
    const [bookings, setBookings] = useState([
        {
			id: 1,
			name: 'canchita',
			price: 10000,
			quantity: 1,
			image: '',
		},
		{
			id: 2,
			name: 'cancha',
			price: 1700,
			quantity: 2,
			image: '',
		},
		{
			id: 2,
			name: 'Bebida',
			price: 1700,
			quantity: 2,
			image: '',
		},
    ]);
    const [displayProducts, setDisplayProducts] = useState(true)


    const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const total = subtotal + bookings.reduce((acc, booking) => acc + booking.price, 0);

    return (
        <div className='container-fluid'>
            <h1>Carrito</h1>
            <div className='d-flex'>
                <div className="buttons align-self-center d-flex flex-column gap-5 m-5 text-center">
                    <Button variant="primary" onClick={() => setDisplayProducts(true)}>Productos</Button>
                    <Button variant="primary" onClick={() => setDisplayProducts(false)}>Reservas</Button>
                </div>
                {displayProducts ? (
                    <div className='flex-grow-1'>
                        <h2>Productos</h2>
                        {products.map((product) => (
                            <Card key={product.id}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>Cantidad: {product.quantity}</Card.Text>
                                    <Card.Text>Precio: ${product.price}</Card.Text>
                                    <Button variant="danger" >Eliminar</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className='flex-grow-1'>
                        <h2>Reservas</h2>
                        {bookings.map((booking) => (
                            <Card key={booking.id}>
                                <Card.Img variant="top" src={booking.image} />
                                <Card.Body>
                                    <Card.Title>{booking.name}</Card.Title>
                                    <Card.Text>Hora: {booking.time}</Card.Text>
                                    <Card.Text>Precio: ${booking.price}</Card.Text>
                                    <Button variant="danger">Eliminar</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <h3>Subtotal: ${subtotal}</h3>
                <h3>Total: ${total}</h3>
                <Button variant="success">Pagar</Button>
            </div>
        </div>
    );
};



