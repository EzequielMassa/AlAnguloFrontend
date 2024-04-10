import axios from 'axios'
import { useState } from 'react'

function UseAxios() {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const get = async (url) => {
		setLoading(true)
		try {
			const response = await axios.get(url)
			setData(response.data)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	const post = async (url, body) => {
		setLoading(true)
		try {
			const response = await axios.post(url, body)
			setData(response.data)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	const put = async (url, body) => {
		setLoading(true)
		try {
			const response = await axios.put(url, body)
			setData(response.data)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	const del = async (url) => {
		setLoading(true)
		try {
			await axios.delete(url)
			setData(null)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	return { data, error, loading, get, post, put, del }
}

export default UseAxios
