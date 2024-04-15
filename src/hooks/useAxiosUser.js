import axios from 'axios'
import { useState } from 'react'
import { baseUrl } from '../api/apiUrl.js'

function UseAxiosUser() {
	const [booking, setBooking] = useState({})
	const [bookingLoading, setBookingLoading] = useState(false)
	const [bookingError, setBookingError] = useState(null)
	

	const [userCart, setUserCart] = useState({})
	const [userCartLoading, setUserCartLoading] = useState(false)
	const [userCartError, setUserCartError] = useState(null)

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
