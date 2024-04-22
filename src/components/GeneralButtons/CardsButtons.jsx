import './CardsButtons.css'

const CardsButtons = ({ cardText }) => {
	return (
		<>
			<div className='fancy'>
				<span className='top-key'></span>
				<span className='text'>{cardText}</span>
				<span className='bottom-key-1'></span>
				<span className='bottom-key-2'></span>
			</div>
		</>
	)
}

export default CardsButtons
