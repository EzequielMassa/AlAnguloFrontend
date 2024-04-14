import axios from 'axios'
import { useState } from 'react'
import { baseUrl } from '../api/apiUrl.js'

function UseAxiosUser() {
	const [booking, setBooking] = useState({})
	const [bookingLoading, setBookingLoading] = useState(false)
	const [bookingError, setBookingError] = useState(null)
	useState(false)

	const postBooking = async (booking) => {
		setBookingLoading(true)
		try {
			const response = await axios.post(`${baseUrl}/booking`, booking)
			setBooking(response.data.data)
		} catch (err) {
			console.log(err)
			setBookingError(err)
		} finally {
			setBookingLoading(false)
		}
	}

	return {
		bookingLoading,
		bookingError,
		postBooking,
	}
}

export default UseAxiosUser
