import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import './CategoryCard.css'
function CategoryCard() {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				variant='top'
				src='/src/assets/images/logo_AlAngulo.png'
				className='category_card_img'
			/>
			<Card.Body className='d-flex flex-column justify-content-center align-items-center '>
				<Card.Title className='text-center'>Card Title</Card.Title>
				<Card.Text className='text-center'>
					Some quick example text to build on the card title and make.
				</Card.Text>
				<Link className='btn btn-primary' to='/ProductDetail'>Go somewhere</Link>
			</Card.Body>
		</Card>
	)
}

export default CategoryCard
