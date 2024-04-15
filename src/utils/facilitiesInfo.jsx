import { FaCar } from 'react-icons/fa'
import parkingImg from '../assets/images/parking.webp'
import lookerRoom from '../assets/images/looker-room.webp'
import { BiSolidTShirt } from 'react-icons/bi'

export const facilites = [
	{
		img: parkingImg,
		icon: <FaCar className='facilite_icon text-center' />,
		title: 'Estacionamiento',
		description:
			'Más de 30 cocheras techadas dentro del predio para que estés tranquilo y solo pienses en disfrutar.',
		flexRowDirection: 'flex-row',
	},
	{
		img: lookerRoom,
		icon: <BiSolidTShirt className='facilite_icon text-center' />,
		title: 'Vestuarios',
		description:
			'Vestuarios de damas y caballeros, completamente equipados, con baños y duchas individuales.',
		flexRowDirection: 'flex-row-reverse',
	},
]
