import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { baseUrl } from '../api/apiUrl.js'

function UseAxiosAuth() {
	const [registerLoading, setRegisterLoading] = useState(false)
	const [registerError, setRegisterError] = useState(null)
	const [loguedUser, setLoguedUser] = useState({})
	const [useById, setUserById] = useState({})

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
			setRegisterError(err)
			console.error(err)
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: `${
					err.response.data.message || err.message
				}, porfavor intenta de vuelta`,
			})
		} finally {
			setRegisterLoading(false)
		}
	}
	const validateRegisterData = async () => {}
	const getUser = async () => {
		try {
			const user = axios.get(`${baseUrl}/user/:id`)
			setUserById(user)
		} catch (error) {}
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
			setRegisterError(err)
		} finally {
			setRegisterLoading(false)
		}
	}

	return {
		loguedUser,
		registerLoading,
		registerError,
		register,
		login,
	}
}

export default UseAxiosAuth
