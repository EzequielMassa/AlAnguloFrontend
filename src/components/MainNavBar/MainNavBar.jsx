import "./MainNavBar.css"
import { useState } from "react"
import { HiBars4 } from "react-icons/hi2"
import { AiOutlineSearch , AiOutlineClose , AiOutlineShoppingCart, AiOutlineLogin } from "react-icons/ai"
import { RiShoppingCartLine } from 'react-icons/ri'
import logo from '../../assets/images/logo_AlAngulo.png'
import { IconContext } from "react-icons"
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink } from "react-router-dom"
import Button from 'react-bootstrap/Button';

export const MainNavBar = () => {
    const [isOpen , setIsOpen] = useState(false);

    const [user, setUser] = useState({ userName: 'Facundo', role: 'admin' });

    const isAdmin = () => {
        return user && user.role === 'admin';
    };
    const isUser = () => {
        return user.role === 'user' || user.role === 'admin';
    };

    const [showCart, setShowCart] = useState(false);

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Camiseta',
            price: 10000,
            quantity: 1,
            image: 'icon-logo.jpg' 
        },
        {
            id: 2,
            name: 'Bebida',
            price: 1700,
            quantity: 2,
            image: 'icon-logo.jpg' 
        },
        {
            id: 2,
            name: 'Bebida',
            price: 1700,
            quantity: 2,
            image: 'icon-logo.jpg' 
        }
    ]);

    const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const handleCartToggle = () => setShowCart(!showCart);

	return (
		<>
			<div className="">
                <header className="header">
                    <div className="nav-container">
                        <div className="nav">
                            <div className="menuBar" onClick={() => (setIsOpen(!isOpen))}>
                                {isOpen ? <AiOutlineClose/> : <IconContext.Provider value={{className: "global-class-name" }}>
                                    <span>
                                        <HiBars4 />
                                    </span>
                                </IconContext.Provider>}
                            </div>
                            <div className={isOpen ? "smallMenu" : "menu"}>
                                <NavLink to={'./'} className={'nav-link'}>
                                    Inicio
                                </NavLink>
                                <NavLink to={'./Productos'} className={'nav-link'}>
                                    Productos
                                </NavLink>
                                <NavLink to={'./Canchas'} className={'nav-link'}>
                                    Canchas
                                </NavLink>
                                <NavLink to={'./Nosotros'} className={'nav-link'}>
                                    Nosotros
                                </NavLink>
                                
                                {isAdmin() && <NavLink to={'./Admin'} className={'nav-link'}>
                                    Admin
                                </NavLink>} 
                            </div>
                            <NavLink to={'./'} className={'logo'}>
                                <img src={logo} alt="logo" />
                                <b className="logoName">AlAngulo</b>
                            </NavLink>
                            <div className="noti">
                                <IconContext.Provider value={{className: "global-class-name Nav-Icon" }}>
                                    <span>
                                        <AiOutlineSearch />
                                    </span>
                                </IconContext.Provider>
                                
                                <IconContext.Provider value={{className: "global-class-name" }}>
                                    <span className="cart Nav-Icon" onClick={handleCartToggle}>
                                        <AiOutlineShoppingCart />
                                        <div className="store">0</div>
                                    </span>
                                </IconContext.Provider>
                                <IconContext.Provider value={{className: "global-class-name Nav-Icon" }}>
                                    <span>
                                        <AiOutlineLogin />
                                        {isUser() && <b className="user_Name">Hola {user.userName}</b>}
                                    </span>
                                    
                                </IconContext.Provider>
                                
                                
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <Offcanvas show={showCart} onHide={handleCartToggle} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <RiShoppingCartLine />  
                        
                        <i className="ms-4">CARRITO</i>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    {products.length === 0 ? (
                            <p>No hay productos agregados.</p>
                        ) : (
                            <div>
                            {products.map((product, index) => (
                                <div key={index} className="product-item">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                    <div className="product-details">
                                        <ul>
                                            <li>{product.name}</li>
                                            <li>${product.price}</li>
                                            <li>Cantidad: {product.quantity}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            <hr />
                            <p className="paragraph cart-total">Total : ${total}</p>
                        </div>
                        )}
                        <hr />
                    <div className="d-grid">
                        <Button 
                        variant="outline-success" 
                        size="md"
                        className="cart-button"
                        href=''>
                            IR AL CARRITO
                        </Button>
                    
                        
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
		</>
	)
}
