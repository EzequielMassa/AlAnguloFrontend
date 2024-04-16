import axios from 'axios'
import { useState } from 'react'
import { toast } from 'sonner'
import { baseUrl } from '../api/apiUrl.js'

function UseAxiosUser() {
	const [booking, setBooking] = useState(false)
	const [bookingLoading, setBookingLoading] = useState(false)
	const [bookingError, setBookingError] = useState(null)

	const [userCart, setUserCart] = useState({})
	const [userCartLoading, setUserCartLoading] = useState(false)
	const [userCartError, setUserCartError] = useState(null)

	const postBooking = async (booking) => {
		setBookingLoading(true)
		try {
			const response = await axios.post(`${baseUrl}/booking`, booking)
			toast.success('Reserva confirmada')
			setBooking(true)
		} catch (err) {
			console.log(err)
			toast.error(err.response.data.message)
			setBooking(false)
			setBookingError(err)
		} finally {
			setBookingLoading(false)
		}
	}
	const getUserCart = async (userId) => {
		setUserCartLoading(true)
		try {
			const response = await axios.get(`${baseUrl}/cart/user/${userId}`)
			setUserCart(response.data.data)
		} catch (err) {
			console.log(err)
			setUserCartError(err)
		} finally {
			setUserCartLoading(false)
		}
	}

	return {
		booking,
		setBooking,
		bookingLoading,
		bookingError,
		postBooking,
		userCart,
		userCartLoading,
		userCartError,
		getUserCart,
	}
}

export default UseAxiosUser
