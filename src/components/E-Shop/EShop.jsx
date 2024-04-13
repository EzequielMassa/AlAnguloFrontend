import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CategoryCard from '../CategoryCard/CategoryCard'

function EShop() {
	return (
		<>
			<Container fluid>
				<Row className='d-flex justify-content-center justify-content-md-end py-4 '>
					<Col
						xs={12}
						md={4}
						className='d-flex justify-content-center justify-content-md-end '>
						<Link className='btn btn-primary' to={'/productos'}>
							Descubri Nuestro E-Shop
						</Link>
					</Col>
				</Row>
				<Row className='d-flex justify-content-center align-items-center'>
					<Col
						className=' d-flex flex-wrap align-items-center justify-content-center align-content-center gap-2 py-4 '
						xs={12}>
						<CategoryCard />
						<CategoryCard />
						<CategoryCard />
						<CategoryCard />
						<CategoryCard />
						<CategoryCard />
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default EShop
