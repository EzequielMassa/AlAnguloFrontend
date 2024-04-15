import axios from 'axios'
import { useState } from 'react'
import { baseUrl } from '../api/apiUrl.js'
import { jwtDecode } from 'jwt-decode'
function UseAxiosAuth() {
	const [registerLoading, setRegisterLoading] = useState(false)
	const [registerError, setRegisterError] = useState(null)
	const [loguedUser, setLoguedUser] = useState({})
	const [useById,setUserById] = useState({})
	useState(false)

	const register = async (formData) => {
		setRegisterLoading(true)
		try {
			const response = await axios.post(`${baseUrl}/register`, formData)
			const token = response.data.data;
			localStorage.setItem('token',token)
			const decoded = jwtDecode(token)
			setLoguedUser(decoded)
		} catch (err) {
			console.log(err)
			setRegisterError(err)
		} finally {
			setRegisterLoading(false)
		}
	}
	const validateRegisterData = async()=>{

	}
	const getUser = async()=>{
		try {
			const user = axios.get(`${baseUrl}/user/:id`)
			setUserById(user)
		} catch (error) {
			
		}
	}

	return {
		loguedUser,
		registerLoading,
		registerError,
		register,
	}
}

export default UseAxiosAuth
