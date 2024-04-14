import { Col, Container, Nav, Row } from 'react-bootstrap'
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
				<Container>
					<Row className='d-flex flex-column flex-md-row justify-content-center align-items-center '>
						<Col
							md={6}
							lg={5}
							sm={12}
							className='foot-1 justify-content-center align-items-center d-flex flex-column'>
							<h3>
								<span>A</span>l<span>A</span>ngulo
							</h3>
							<p className='text-center'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Repudiandae nesciunt esse incidunt eius velit{' '}
							</p>
							<div className='footer-icons d-flex justify-content-start gap-2 fs-1'>
								<FaFacebook className='icons' />
								<AiFillInstagram className='icons' />
								<FaGithub className='icons' />
								<FaLinkedin className='icons' />
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
									<NavLink to='./' className={'nav-link'}>
										Nosotros
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='./' className={'nav-link'}>
										Contacto
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='./' className={'nav-link'}>
										Galeria
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='./' className={'nav-link'}>
										Canchas
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='./' className={'nav-link'}>
										redes
									</NavLink>
								</li>
							</ul>
						</Col>
						<Col
							md={6}
							lg={4}
							sm={12}
							className='Foot-3 justify-content-center align-items-center d-flex flex-column'>
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
