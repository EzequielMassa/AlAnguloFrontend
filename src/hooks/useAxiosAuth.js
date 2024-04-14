import axios from 'axios'
import { useState } from 'react'
import { baseUrl } from '../api/apiUrl.js'

function UseAxiosAuth() {
	const [login, setLogin] = useState({})
	const [loginLoading, setLoginLoading] = useState(false)
	const [loginError, setLoginError] = useState(null)
	useState(false)

	const loginSession = async (email, password) => {
		setLoginLoading(true)
		try {
			const response = await axios.post(`${baseUrl}/login`, {
				email: email,
				password: password,
			})
			setLogin(response.data.data)
		} catch (err) {
			setLoginError(err)
		} finally {
			setLoginLoading(false)
		}
	}

	return {
		login,
		loginLoading,
		loginError,
		loginSession,
	}
}

export default UseAxiosAuth
