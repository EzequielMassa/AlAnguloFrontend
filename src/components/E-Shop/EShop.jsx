import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../../context/ProductsContext'
import CategoryCard from '../CategoryCard/CategoryCard'
import Spinner from '../Spinner/Spinner'

function EShop() {
	const { categories, categoriesLoading, categoriesError, getAllCategories } =
		useProductsContext()
	useEffect(() => {
		getAllCategories()
	}, [])

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
						className=' d-flex flex-wrap align-items-center justify-content-center align-content-center gap-2 py-4 align-items-stretch  '
						xs={12}>
						{categoriesLoading ? (
							<Spinner />
						) : categories ? (
							categories.map((category) => (
								<CategoryCard
									key={category._id}
									category={category}
									categoryLoading={categoriesLoading}
								/>
							))
						) : (
							<></>
						)}
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default EShop
