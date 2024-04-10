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
import './BookingModal.css'
function BookingModal(props) {
	const [form, setForm] = useState({
		soccerfield: '',
		user: '',
		date: '',
		time: '',
	})
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [availableHours, setAvailableHours] = useState([])
	const [time, setTime] = useState('')
	const fetchAvailableHours = async (soccerfieldId, date) => {
		const response = await fetch(
			`http://localhost:4000/api/bookings/available_hours?soccerfield=${soccerfieldId}&date=${date}`
		)
		const data = await response.json()

		const fechaActual = new Date()

		if (
			fechaActual.getDate() === selectedDate.getDate() &&
			fechaActual.getMonth() === selectedDate.getMonth()
		) {
			const horariosFiltrados = data.data.filter((horario) => {
				const hora = parseInt(horario.split(':')[0], 10)
				return hora >= new Date().getHours() + 1
			})
			setAvailableHours(horariosFiltrados)
		} else {
			setAvailableHours(data.data)
		}
	}

	const handleDateChange = (date) => {
		const formatedDate = formatDate(date)
		setSelectedDate(date)
		setForm((prev) => ({ ...prev, date: formatedDate }))
		fetchAvailableHours(props.soccerfield._id, formatedDate)
		setTime(availableHours[0])
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

	const formatDate = (date) => {
		const year = date.getFullYear()
		const month = ('0' + (date.getMonth() + 1)).slice(-2)
		const day = ('0' + date.getDate()).slice(-2)
		const formatedDate = year + '-' + month + '-' + day
		return formatedDate
	}

	const handleBooking = async () => {
		console.log(form)
	}

	useEffect(() => {
		setForm((prev) => ({
			...prev,
			soccerfield: props.soccerfield._id,
			user: '6608ccf89897b94a2f273473',
			date: formatDate(selectedDate),
			time: availableHours[0],
		}))
	}, [availableHours, selectedDate, props.soccerfield._id])

	useEffect(() => {
		if (props.soccerfield._id) {
			fetchAvailableHours(props.soccerfield._id, formatDate(selectedDate))
		}
	}, [selectedDate, props.soccerfield._id])

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
			<Modal.Body>
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
							<Form.Select
								aria-label='Default select example'
								className='d-flex flex-column timepicker_container'
								selected={time}
								value={time}
								onChange={handleTimeChange}>
								{availableHours ? (
									availableHours.map((hour) => (
										<option key={hour} value={hour}>
											{hour}
										</option>
									))
								) : (
									<p>sin datos</p>
								)}
							</Form.Select>
							<img
								src={props.soccerfield.imgUrl}
								alt='imagen cancha'
								className='booking_modal_img rounded rounded-2 mt-3 '
							/>
							<h5 className='pt-1 text-center'>{props.soccerfield.name}</h5>
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
								{props.soccerfield.price.toLocaleString('es-AR', {
									style: 'currency',
									currency: 'ARS',
								})}
							</h5>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button className='w-100' onClick={handleBooking}>
					Reservar
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
export default BookingModal
