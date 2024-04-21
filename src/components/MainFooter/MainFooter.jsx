import { Col, Container, Row } from 'react-bootstrap'
import { AiFillInstagram } from 'react-icons/ai'
import {
	FaEnvelope,
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaPaperPlane,
} from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import './MainFooter.css'

export const MainFooter = () => {
	return (
		<>
			<div className='Footer'>
				<Container className='Footer-container'>
					<Row className='d-flex flex-column flex-md-row justify-content-center align-items-center mt-4'>
						<Col
							md={6}
							lg={5}
							sm={12}
							className='foot-1 justify-content-center align-items-center d-flex flex-column'>
							<h3>
								<span>A</span>l<span>A</span>ngulo
							</h3>
							<p className='text-center'>
								Si necesitas una app para poder manejar la gestion de tus
								reservas de Canchas y productos contactanos, no lo dudes!
							</p>
							<div className='footer-icons d-flex justify-content-start gap-2 fs-1'>
								<NavLink to='/404'>
									<FaFacebook className='icons' />
								</NavLink>
								<NavLink to='/404'>
									<AiFillInstagram className='icons' />
								</NavLink>
								<NavLink to='/404'>
									<FaGithub className='icons' />
								</NavLink>
								<NavLink to='/404'>
									<FaLinkedin className='icons' />
								</NavLink>
							</div>
						</Col>
						<Col
							md={6}
							lg={3}
							sm={12}
							className='justify-content-center align-items-center d-flex flex-column foot-2'>
							<h5>links rapidos</h5>
							<ul className='d-flex flex-column justify-content-center align-items-center list-unstyled '>
								<li className='nav-item'>
									<NavLink to='/nosotros' className={'nav-link'}>
										Nosotros
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='/' className={'nav-link '}>
										Contacto
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='/404' className={'nav-link'}>
										Terminos y Condiciones
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='/canchas' className={'nav-link'}>
										Canchas
									</NavLink>
								</li>
							</ul>
						</Col>
						<Col
							md={6}
							lg={4}
							sm={12}
							className='text-center Foot-3 justify-content-center align-items-center d-flex flex-column mt-md-4'>
							<h5>Información de Contacto</h5>
							<ul className='d-flex flex-column justify-content-center align-items-center list-unstyled gap-2'>
								<li>
									<FaPhoneVolume className='icons me-2 ' />
									381-5891234
								</li>
								<li>
									<FaEnvelope className='icons me-2' />
									Al.Angulo@gmail.com
								</li>
								<li>
									<FaPaperPlane className='icons me-2' />
									Tucuman, Argentina
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}
