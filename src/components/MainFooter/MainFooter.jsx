import './MainFooter.css'
import { NavLink } from 'react-router-dom'
import { Row, Col, Container, Card, Button, Navbar, Nav, Form, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export const MainFooter = () => {
	return (
		<>
			<Nav className="navbar navbar-expand-lg navbar-light bg-light">

			</Nav>
			<div className="Footer">
				<Container>
					<Row>
						<Col md={6} lg={5} sm={12} className='foot-1'>
							<h3><span>A</span>l<span>A</span>ngulo</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nesciunt esse incidunt eius velit </p>
							<div className="footer-icons d-flex justify-content-start gap-2 fs-1">
								<FaFacebook className='icons'/>
								<AiFillInstagram className='icons'/>
								<FaGithub className='icons'/>
								<FaLinkedin className='icons'/>

							</div>
						</Col>
						<Col md={6} lg={3} sm={12}>
							<h5>links rapidos</h5>
							<ul className='d-flex flex-column'>
								<li className='nav-item'>
									<NavLink to='./' className={'nav-link'}>Nosotros</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='./' className={'nav-link'}>Contacto</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='./' className={'nav-link'}>Galeria</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='./' className={'nav-link'}>Canchas</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='./' className={'nav-link'}>redes</NavLink>
								</li>
							</ul>
						</Col>
						<Col md={6} lg={4} sm={12} className='Foot-3'>
							<h5>Información de Contacto</h5>
							<p><FaPhoneVolume className='icons'/>381-5891234</p>
							<p><FaEnvelope className='icons'/>Al.Angulo@gmail.com</p>
							<p><FaPaperPlane className='icons'/>Tucuman, Argentina</p>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
