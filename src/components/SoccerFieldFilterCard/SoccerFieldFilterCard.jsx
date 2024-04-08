import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { GiBabyfootPlayers, GiGrass } from 'react-icons/gi'
import { TbClockHour1 } from 'react-icons/tb'
import { capitalizeWord } from '../../helpers/capitalizeWord.js'
import './soccerFieldCard.css'
function SoccerFieldFilterCard({ soccerField }) {
	const { name, description, imgUrl, size, grass, price } = soccerField

	return (
		<>
			<article className='container-md p-0 my-4 soccerfield_card_container'>
				<Card className='bg-dark text-white'>
					<Card.Img
						src={imgUrl}
						alt='Card image'
						className='soccerfield_card_img'
					/>
					<Card.ImgOverlay className='overlay'>
						<Card.Title className='subtitle soccerfield_card_title'>
							{capitalizeWord(name)}
						</Card.Title>
						<Card.Text className='paragraph text-light '>
							{capitalizeWord(description)}
						</Card.Text>
						<Card.Text className='paragraph text-light d-flex align-items-center  '>
							<GiBabyfootPlayers className='me-2 soccerfield_card_icon' /> :{' '}
							{size}
						</Card.Text>
						<Card.Text className='paragraph text-light d-flex align-items-center '>
							<GiGrass className='me-2 soccerfield_card_icon' /> : {grass}
						</Card.Text>
						<Card.Text className='paragraph text-light d-flex align-items-center '>
							<TbClockHour1 className='me-2 soccerfield_card_icon' /> : &nbsp;
							{price.toLocaleString('es-AR', {
								style: 'currency',
								currency: 'ARS',
							})}
						</Card.Text>
						<Button className='my-2 '>Reservar</Button>
					</Card.ImgOverlay>
				</Card>
			</article>
		</>
	)
}
export default SoccerFieldFilterCard
