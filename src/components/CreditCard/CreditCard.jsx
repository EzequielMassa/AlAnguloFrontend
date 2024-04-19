import { useState } from 'react'
import './CreditCard.css'
function CreditCard({ user, onCvvChange }) {
	const { name } = user
	const [cvv, setCvv] = useState('')

	const handleCvvChange = (e) => {
		const newCvv = e.target.value
		if (isNaN(newCvv)) {
			return
		}
		setCvv(newCvv)
		onCvvChange(newCvv)
	}

	return (
		<>
			<div className='visa-card'>
				<div className='logoContainer'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						width='23'
						height='23'
						viewBox='0 0 48 48'
						className='svgLogo'>
						<path
							fill='#ff9800'
							d='M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z'></path>
						<path
							fill='#d50000'
							d='M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z'></path>
						<path
							fill='#ff3d00'
							d='M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z'></path>
					</svg>
				</div>
				<div className='number-container'>
					<label className='input-label' htmlFor='cardNumber'>
						Tarjeta
					</label>
					<input
						className='inputstyle'
						id='cardNumber'
						value={'1234 5678 7654 3210'}
						name='cardNumber'
						type='text'
						disabled
					/>
				</div>

				<div className='name-date-cvv-container'>
					<div className='name-wrapper'>
						<label className='input-label' htmlFor='holderName'>
							Propietario
						</label>
						<input
							className='inputstyle'
							id='holderName'
							placeholder='NAME'
							type='text'
							value={name}
							disabled
						/>
					</div>

					<div className='expiry-wrapper'>
						<label className='input-label' htmlFor='expiry'>
							Vencimiento
						</label>
						<input
							className='inputstyle'
							id='expiry'
							placeholder='12/28'
							value={'12/28'}
							type='text'
							disabled
						/>
					</div>
					<div className='cvv-wrapper'>
						<label className='input-label' htmlFor='cvv'>
							CVV
						</label>
						<input
							className='inputstyle'
							placeholder='***'
							maxLength='3'
							id='cvv'
							value={cvv}
							onChange={handleCvvChange}
							type='password'
							autoFocus
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default CreditCard
