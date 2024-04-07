import Button from 'react-bootstrap/Button'
import './soccerFieldCard.css'
import { capitalizeWord } from '../../helpers/capitalizeWord.js'

function SoccerFieldFilterCard({ soccerField }) {
	const { name, description, imgUrl } = soccerField

	return (
		<>
			<article className='container-md '>
				<div className='row my-4 d-flex flex-column flex-md-row align-items-center justify-content-center soccerfield_card_container rounded rounded-2 overflow-hidden p-2'>
					<div className='col-12 col-md-4 px-0 '>
						<img src={imgUrl} alt={name + ' imagen'} className='img-fluid ' />
					</div>
					<div className='col-12 col-md-8 soccerFieldCard d-flex flex-column align-items-center'>
						<h2 className='text-center my-1 subtitle soccerfield_card_title '>
							{capitalizeWord(name)}
						</h2>
						<p className='text-center paragraph '>
							{capitalizeWord(description)}
						</p>
						<Button className='my-2 w-50  '>Reservar</Button>
					</div>
				</div>
			</article>
		</>
	)
}
export default SoccerFieldFilterCard
