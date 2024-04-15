import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import './CategoryCard.css'
function CategoryCard({ category }) {
	const { name, image, description } = category

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img variant='top' src={image} className='category_card_img' />
			<Card.Body className='d-flex flex-column justify-content-end align-items-center '>
				<Card.Title className='text-center'>{name}</Card.Title>
				<Card.Text className='text-center'>{description}</Card.Text>
				<Link
					className='btn btn-primary '
					to={`/productos?categoria=${name.toLowerCase()}`}>
					Ver Categoria
				</Link>
			</Card.Body>
		</Card>
	)
}

export default CategoryCard
