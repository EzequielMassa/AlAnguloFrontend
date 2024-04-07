import './SoccerFieldCard.css'

function SoccerFieldCard({ fieldImage }) {
	return (
		<>
			<img
				src={fieldImage}
				alt='imagen cancha'
				className='img-fluid field_img rounded rounded-2 '
			/>
		</>
	)
}
export default SoccerFieldCard
