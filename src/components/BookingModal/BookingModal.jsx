import { isSunday } from 'date-fns'
import es from 'date-fns/locale/es'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import DatePicker from 'react-datepicker'
import { FaClock, FaRegCalendarAlt } from 'react-icons/fa'
import { LuAlarmClock } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { useSoccerFieldsContext } from '../../context/SoccerFieldsContext'
import { useUserContext } from '../../context/UserContext'
import { formatDate } from '../../utils/formatDate'
import Spinner from '../Spinner/Spinner'
import './BookingModal.css'
function BookingModal(props) {
	const { selectedSoccerField } = useSoccerFieldsContext()
	const [form, setForm] = useState({
		soccerField: '',
		user: '',
		date: '',
		time: '',
	})
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [time, setTime] = useState('')
	const {
		soccerFieldAvailableHours,
		soccerFieldAvailableHoursLoading,
		getSoccerFieldAvailableHours,
	} = useSoccerFieldsContext()
	const { booking, setBooking, postBooking, bookingLoading, getUserCart } =
		useUserContext()

	const handleDateChange = (date) => {
		const formatedDate = formatDate(date)
		setSelectedDate(date)
		setTime(soccerFieldAvailableHours[0])
		setForm((prev) => ({ ...prev, date: formatedDate }))
		getSoccerFieldAvailableHours(selectedSoccerField._id, formatedDate, date)
	}
	const handleTimeChange = (e) => {
		setTime(e.target.value)
		setForm((prev) => ({ ...prev, time: e.target.value }))
	}

	const today = new Date()
	today.setHours(0, 0, 0, 0)

	const isSundayDisabled = (date) => {
		return !isSunday(date)
	}

	const handleBooking = async () => {
		await postBooking(form)
		await getSoccerFieldAvailableHours(
			selectedSoccerField._id,
			form.date,
			selectedDate
		)
		getUserCart(props.userid)
	}

	useEffect(() => {
		if (selectedSoccerField._id) {
			setTime(soccerFieldAvailableHours[0])
			setForm((prev) => ({
				...prev,
				soccerField: selectedSoccerField._id,
				user: props.userid,
				date: formatDate(selectedDate),
				time: soccerFieldAvailableHours[0],
			}))
		}
	}, [
		soccerFieldAvailableHours,
		selectedDate,
		selectedSoccerField._id,
		booking,
	])

	useEffect(() => {
		if (selectedSoccerField._id) {
			getSoccerFieldAvailableHours(
				selectedSoccerField._id,
				formatDate(selectedDate),
				selectedDate
			)
		}
	}, [selectedDate, selectedSoccerField._id])

	useEffect(() => {
		if (booking === true) {
			setBooking(false)
		}
	}, [booking])

	return (
		<Modal
			{...props}
			size='lg'
			fullscreen='sm-down'
			aria-labelledby='contained-modal-title-vcenter'
			backdrop='static'
			keyboard={false}
			centered>
			<Modal.Header closeButton>
				<Modal.Title
					className=' w-100 text-center booking_modal_title'
					id='contained-modal-title-vcenter'>
					Reservar
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='overflow-x-auto'>
				{soccerFieldAvailableHoursLoading || bookingLoading ? (
					<Spinner />
				) : (
					<Container>
						<Row className='d-flex flex-column flex-md-row justify-content-center  '>
							<Col
								xs={12}
								md={7}
								className='d-flex flex-column align-items-center '>
								<h4 className=' d-flex justify-content-center align-items-center gap-2'>
									<FaRegCalendarAlt className='booking_modal_time_icon' />
									Fecha
								</h4>
								<form>
									<DatePicker
										selected={selectedDate}
										value={selectedDate}
										onChange={handleDateChange}
										minDate={today}
										filterDate={isSundayDisabled}
										locale={es}
										autoFocus
										inline
									/>
								</form>
							</Col>
							<Col
								xs={12}
								md={5}
								className='d-flex flex-column  align-items-center my-2 my-md-0 '>
								<h4 className='d-flex justify-content-center align-items-center gap-2'>
									<LuAlarmClock className='booking_modal_time_icon' />
									Hora
								</h4>
								{soccerFieldAvailableHours.length < 1 ? (
									<p className='text-center text-info'>
										Sin horarios disponibles
									</p>
								) : (
									<Form.Select
										aria-label='Default select example'
										className='d-flex flex-column timepicker_container'
										selected={time}
										value={time}
										onChange={handleTimeChange}>
										{soccerFieldAvailableHours ? (
											soccerFieldAvailableHours.map((hour) => (
												<option key={hour} value={hour}>
													{hour}
												</option>
											))
										) : (
											<></>
										)}
									</Form.Select>
								)}

								<img
									src={selectedSoccerField.imgUrl}
									alt='imagen cancha'
									className='booking_modal_img rounded rounded-2 mt-3 '
								/>
								<h5 className='pt-1 text-center fs-6'>
									{selectedSoccerField.name}
								</h5>
								<div className='d-flex align-items-center justify-content-center gap-3'>
									<FaClock />
									<span>1 hora</span>
								</div>
							</Col>
						</Row>
						<Row className='d-flex flex-column flex-md-row justify-content-center  '>
							<Col xs={12} className='text-center mt-4 '>
								<h5 className='text-muted '>
									Total:{' '}
									{selectedSoccerField.price?.toLocaleString('es-AR', {
										style: 'currency',
										currency: 'ARS',
									})}
								</h5>
							</Col>
						</Row>
					</Container>
				)}
			</Modal.Body>
			<Modal.Footer>
				{props.userid ? (
					<Button
						className={soccerFieldAvailableHoursLoading ? 'd-none' : 'w-100'}
						onClick={handleBooking}
						disabled={bookingLoading || soccerFieldAvailableHours.length < 1}>
						Reservar
					</Button>
				) : (
					<Link to={'/register'} className='btn btn-primary w-100'>
						Registrate
					</Link>
				)}
			</Modal.Footer>
		</Modal>
	)
}
export default BookingModal
