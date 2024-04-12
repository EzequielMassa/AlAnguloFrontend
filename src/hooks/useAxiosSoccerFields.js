import axios from 'axios'
import { useState } from 'react'

const baseUrl = 'http://localhost:4000/api'
function UseAxiosSoccerFields() {
	const [soccerFields, setSoccerFields] = useState([])
	const [soccerFieldsLoading, setSoccerFieldsLoading] = useState(false)
	const [soccerFieldsError, setSoccerFieldsError] = useState(null)
	useState(false)

	const [soccerFieldsQuery, setSoccerFieldsQuery] = useState([])
	const [soccerFieldsQueryLoading, setSoccerFieldsQueryLoading] =
		useState(false)
	const [soccerFieldsQueryError, setSoccerFieldsQueryError] = useState(null)

	const [soccerFieldAvailableHours, setSoccerFieldAvailableHours] = useState([])
	const [
		soccerFieldAvailableHoursLoading,
		setSoccerFieldAvailableHoursLoading,
	] = useState(false)
	const [soccerFieldAvailableHoursError, setSoccerFieldAvailableHoursError] =
		useState(null)
	useState(false)

	const getAllSoccerfields = async () => {
		setSoccerFieldsLoading(true)
		try {
			const response = await axios.get(`${baseUrl}/soccerfields`)
			setSoccerFields(response.data.data)
		} catch (err) {
			setSoccerFieldsError(err)
		} finally {
			setSoccerFieldsLoading(false)
		}
	}

	const getSoccerfieldsByQuery = async (size, grass) => {
		setSoccerFieldsQueryLoading(true)
		try {
			let response
			if (size && grass) {
				response = await axios.get(
					`${baseUrl}/soccerfields/query?size=${size}&grass=${grass}`
				)
			} else if (size) {
				response = await axios.get(`${baseUrl}/soccerfields/query?size=${size}`)
			} else {
				response = await axios.get(
					`${baseUrl}/soccerfields/query?grass=${grass}`
				)
			}
			setSoccerFieldsQuery(response.data.data)
		} catch (err) {
			setSoccerFieldsQueryError(err)
		} finally {
			setSoccerFieldsQueryLoading(false)
		}
	}

	const getSoccerFieldAvailableHours = async (
		soccerfieldId,
		date,
		selectedDate
	) => {
		setSoccerFieldAvailableHoursLoading(true)
		try {
			const response = await axios.get(
				`${baseUrl}/bookings/available_hours?soccerfield=${soccerfieldId}&date=${date}`
			)
			const fechaActual = new Date()

			if (
				fechaActual.getDate() === selectedDate.getDate() &&
				fechaActual.getMonth() === selectedDate.getMonth()
			) {
				const horariosFiltrados = response.data.data.filter((horario) => {
					const hora = parseInt(horario.split(':')[0], 10)
					return hora >= new Date().getHours() + 1
				})
				setSoccerFieldAvailableHours(horariosFiltrados)
			} else {
				setSoccerFieldAvailableHours(response.data.data)
			}
		} catch (err) {
			setSoccerFieldAvailableHoursError(err)
		} finally {
			setSoccerFieldAvailableHoursLoading(false)
		}
	}

	// const post = async (url, body) => {
	// 	setLoading(true)
	// 	try {
	// 		const response = await axios.post(url, body)
	// 		setData(response.data)
	// 	} catch (err) {
	// 		setError(err)
	// 	} finally {
	// 		setLoading(false)
	// 	}
	// }

	// const put = async (url, body) => {
	// 	setLoading(true)
	// 	try {
	// 		const response = await axios.put(url, body)
	// 		setData(response.data)
	// 	} catch (err) {
	// 		setError(err)
	// 	} finally {
	// 		setLoading(false)
	// 	}
	// }

	// const del = async (url) => {
	// 	setLoading(true)
	// 	try {
	// 		await axios.delete(url)
	// 		setData(null)
	// 	} catch (err) {
	// 		setError(err)
	// 	} finally {
	// 		setLoading(false)
	// 	}
	// }

	return {
		soccerFields,
		soccerFieldsLoading,
		soccerFieldsError,
		getAllSoccerfields,
		soccerFieldsQuery,
		soccerFieldsQueryLoading,
		soccerFieldsQueryError,
		getSoccerfieldsByQuery,
		soccerFieldAvailableHours,
		soccerFieldAvailableHoursLoading,
		soccerFieldAvailableHoursError,
		getSoccerFieldAvailableHours,
	}
}

export default UseAxiosSoccerFields
