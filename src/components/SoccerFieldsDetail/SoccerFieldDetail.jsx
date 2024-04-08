import Card from 'react-bootstrap/Card'
import { TbCircleDashedNumber1, TbCircleDashedNumber5 } from 'react-icons/tb'
import './SoccerFieldDetail.css'
function SoccerFieldDetail({ description }) {
	const { size, title, fieldDescription } = description

	return (
		<>
			<Card
				style={{ width: '18rem' }}
				className='d-flex align-items-center card_container '>
				{size === 5 ? (
					<TbCircleDashedNumber5 className='soccer_field_detail_icon' />
				) : (
					<span>
						<TbCircleDashedNumber1 className='soccer_field_detail_icon' />
						<TbCircleDashedNumber1 className='soccer_field_detail_icon' />
					</span>
				)}
				<Card.Body className='d-flex flex-column  justify-content-center align-items-center '>
					<Card.Title className='soccer_field_detail_title'>{title}</Card.Title>
					<Card.Text className='text-center text-muted'>
						{fieldDescription}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}
export default SoccerFieldDetail
