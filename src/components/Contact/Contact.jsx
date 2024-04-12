import { Col, Container, Row } from 'react-bootstrap'
import phoneIcon from '../../assets/images/contact-phone.gif'
import emailIcon from '../../assets/images/contact-email.gif'
import './Contact.css'
function Contact() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col
						xs={12}
						md={6}
						className='my-4 d-flex flex-column  align-items-center justify-content-center '>
						<h5 className='subtitle text-center'>Contacto:</h5>
						<div>
							<a
								href='tel:+1234567890'
								className='d-flex align-items-center justify-content-center py-2 contact_link'>
								<img
									src={phoneIcon}
									alt='icono contacto telefono'
									className='contact_icon'
								/>{' '}
								+54 (123) 456-7890
							</a>
							<a
								href='mailto:alangulo@alangulo.com'
								className='d-flex align-items-center justify-content-center gap-2 py-2 contact_link '>
								<img
									src={emailIcon}
									alt='icono contacto email'
									className='contact_icon contact_icon-email'
								/>{' '}
								Email
							</a>
						</div>
					</Col>
					<Col
						xs={12}
						md={6}
						className='d-flex align-items-center justify-content-center '>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1180326956746!2d-65.20965262611415!3d-26.83619789000822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d0271b7%3A0xa293747c77523463!2sGral.%20Paz%20576%20Piso%209%2C%20oficina%202%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1712955623369!5m2!1ses!2sar'
							className='contact_map'
							loading='lazy'></iframe>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Contact
