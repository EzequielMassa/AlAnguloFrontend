import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import CardsButtons from '../GeneralButtons/CardsButtons'
import './CategoryCard.css'

function CategoryCard({ category }) {
	const { name, image, description } = category

	return (
		<Card style={{ width: '18rem' }}>
			<div className='category_card_img_container mx-auto d-flex justify-content-center align-items-center '>
				<Card.Img variant='top' src={image} className='category_card_img' />
			</div>
			<Card.Body className='d-flex flex-column justify-content-end align-items-center '>
				<Card.Title className='text-center category_card_title'>
					{name}
				</Card.Title>
				<Card.Text className='text-center'>{description}</Card.Text>
				<Link className='' to={`/productos?categoria=${name.toLowerCase()}`}>
					<CardsButtons cardText='Ver Categoria' />
				</Link>
			</Card.Body>
		</Card>
	)
}

export default CategoryCard
