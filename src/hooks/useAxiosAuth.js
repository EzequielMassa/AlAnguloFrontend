import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { baseUrl } from '../api/apiUrl.js'

function UseAxiosAuth() {
	const [registerLoading, setRegisterLoading] = useState(false)
	const [loguedUser, setLoguedUser] = useState({})

	const register = async (formData) => {
		setRegisterLoading(true)
		try {
			const response = await axios.post(`${baseUrl}/register`, formData)
			const token = response.data.data
			localStorage.setItem('token', token)
			const decoded = jwtDecode(token)
			localStorage.setItem('user', JSON.stringify(decoded))
			setLoguedUser(decoded)
		} catch (err) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: `${err.response.data.message}, porfavor intenta de vuelta`,
			})
		} finally {
			setRegisterLoading(false)
		}
	}
	const login = async (formData) => {
		setRegisterLoading(true)
		try {
			const response = await axios.post(`${baseUrl}/login`, formData)
			const token = response.data.token
			localStorage.setItem('token', token)
			const decoded = jwtDecode(token)
			localStorage.setItem('user', JSON.stringify(decoded))
			setLoguedUser(decoded)
		} catch (err) {
			if (err.response.data.message) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: `${err.response.data.message}`,
				})
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: `${err.response.data}`,
				})
			}
		} finally {
			setRegisterLoading(false)
		}
	}

	return {
		loguedUser,
		setLoguedUser,
		registerLoading,
		register,
		login,
	}
}

export default UseAxiosAuth
