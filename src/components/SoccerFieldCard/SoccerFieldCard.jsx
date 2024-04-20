import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { GiBabyfootPlayers, GiGrass } from 'react-icons/gi'
import { TbClockHour1 } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext.jsx'
import { useSoccerFieldsContext } from '../../context/SoccerFieldsContext.jsx'
import { capitalizeWord } from '../../helpers/capitalizeWord.js'
import BookingModal from '../BookingModal/BookingModal.jsx'
import CardsButtons from '../GeneralButtons/CardsButtons.jsx'
import './SoccerFieldCard.css'
function SoccerFieldCard({ soccerField }) {
	const { user } = useAuthContext()
	const [modalShow, setModalShow] = useState(false)
	const { setSelectedSoccerField } = useSoccerFieldsContext()
	const { _id, name, description, imgUrl, size, grass, price } = soccerField
	const handleBookingModalClick = (soccerfield) => {
		setSelectedSoccerField(soccerfield)
		setModalShow(true)
	}

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
							{price?.toLocaleString('es-AR', {
								style: 'currency',
								currency: 'ARS',
							})}
						</Card.Text>
						{user.id && user.role === "user" ? (
							<Button
								className='my-2 reactButton'
								id={_id}
								onClick={() => handleBookingModalClick(soccerField)}>
								<CardsButtons cardText='Reservar' />
							</Button>
						) : (
							<></>
						)}
					</Card.ImgOverlay>
				</Card>
			</article>

			<BookingModal
				userid={user.id}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	)
}
export default SoccerFieldCard
