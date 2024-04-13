import { Col, Container, Row } from 'react-bootstrap'
import './Facilitie.css'

function Facilitie({ facilitie }) {
	const { img, icon, title, description, flexRowDirection } = facilitie
	return (
		<Container fluid className='my-5 '>
			<Row className={`align-items-center ${flexRowDirection}`}>
				<Col xs={12} md={5}>
					<img
						src={img}
						alt='instalacion imagen'
						className='rounded-2  facilitie_img'
					/>
				</Col>
				<Col
					xs={12}
					md={7}
					className='d-flex flex-column align-items-center justify-content-center py-2'>
					{icon}
					<h4 className='text-center subtitle text-uppercase facilitie_title d-flex flex-column justify-content-center align-items-center gap-2'>
						{title}
						<div className='facilitie_title-decorator'></div>
					</h4>

					<p className='text-center paragraph'>{description}</p>
				</Col>
			</Row>
		</Container>
	)
}

export default Facilitie
