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
import { useSoccerFieldsContext } from '../../context/SoccerFieldsContext'
import './BookingModal.css'
function BookingModal(props) {
	const { selectedSoccerField } = useSoccerFieldsContext()

	const [form, setForm] = useState({
		soccerfield: '',
		user: '',
		date: '',
		time: '',
	})
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [time, setTime] = useState('')
	const {
		soccerFieldAvailableHours,
		soccerFieldAvailableHoursLoading,
		soccerFieldAvailableHoursError,
		getSoccerFieldAvailableHours,
	} = useSoccerFieldsContext()

	const handleDateChange = (date) => {
		const formatedDate = formatDate(date)
		setSelectedDate(date)
		setForm((prev) => ({ ...prev, date: formatedDate }))
		getSoccerFieldAvailableHours(
			selectedSoccerField._id,
			formatedDate,
			selectedDate
		)
		setTime(soccerFieldAvailableHours[0])
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
			soccerfield: selectedSoccerField._id,
			user: '6608ccf89897b94a2f273473',
			date: formatDate(selectedDate),
			time: soccerFieldAvailableHours[0],
		}))
	}, [soccerFieldAvailableHours, selectedDate, selectedSoccerField._id])

	useEffect(() => {
		if (selectedSoccerField._id) {
			getSoccerFieldAvailableHours(
				selectedSoccerField._id,
				formatDate(selectedDate),
				selectedDate
			)
		}
	}, [selectedDate, selectedSoccerField._id])

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
								{soccerFieldAvailableHours ? (
									soccerFieldAvailableHours.map((hour) => (
										<option key={hour} value={hour}>
											{hour}
										</option>
									))
								) : (
									<p>sin datos</p>
								)}
							</Form.Select>
							<img
								src={selectedSoccerField.imgUrl}
								alt='imagen cancha'
								className='booking_modal_img rounded rounded-2 mt-3 '
							/>
							<h5 className='pt-1 text-center'>{selectedSoccerField.name}</h5>
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
