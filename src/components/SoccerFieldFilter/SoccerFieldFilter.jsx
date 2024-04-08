import Form from 'react-bootstrap/Form'
import { GiHighGrass, GiSoccerField } from 'react-icons/gi'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './SoccerFieldFilter.css'
function SoccerFieldFilter({ onQueryResultChange }) {
	const [searchParams, setSearchParams] = useSearchParams({})
	const [queryResult, setQueryResult] = useState([])

	const fetchField = async (size, grass) => {
		const url = `http://localhost:4000/api/soccerfields/query?`
		let response
		if (size && grass) {
			response = await fetch(`${url}size=${size}&grass=${grass}`)
		} else if (size) {
			response = await fetch(`${url}size=${size}`)
		} else {
			response = await fetch(`${url}grass=${grass}`)
		}
		const data = await response.json()
		setQueryResult(data.data)
	}
	const handleChange = (e) => {
		const inputName = e.target.name
		const inputValue = e.target.value
		setSearchParams((prevParams) => {
			prevParams.set(inputName, inputValue)
			return prevParams
		})
	}

	useEffect(() => {
		const size = searchParams.get('size')
		const grass = searchParams.get('grass')
		if (!size && !grass) return
		fetchField(size, grass)
	}, [searchParams])

	useEffect(() => {
		onQueryResultChange(queryResult)
	}, [queryResult, onQueryResultChange])

	return (
		<>
			<Form className='d-flex flex-column flex-sm-row  justify-content-center gap-5'>
				<Form.Group
					className='mb-3 d-flex flex-column align-items-center '
					id='sFieldSize'>
					<Form.Label htmlFor='sFieldSize'>
						<GiSoccerField className='fs-1 sFieldFilterIcon ' />
					</Form.Label>
					<Form.Select
						name='size'
						aria-label='soccer field size'
						className='sFieldFilterInput '
						onChange={handleChange}
						value={searchParams.get('size') || ''}>
						<option hidden> Seleccione el tamaño</option>
						<option value='5' className='soccerfieldOption'>
							5
						</option>
						<option value='11' className='soccerfieldOption'>
							11
						</option>
					</Form.Select>
				</Form.Group>
				<Form.Group
					className='mb-3 d-flex flex-column align-items-center '
					id='sFieldGrass'>
					<Form.Label htmlFor='sFieldGrass'>
						<GiHighGrass className='fs-1 sFieldFilterIcon' />
					</Form.Label>
					<Form.Select
						name='grass'
						aria-label='soccer field grass'
						className='sFieldFilterInput'
						onChange={handleChange}
						value={searchParams.get('grass') || ''}>
						<option hidden> Seleccione el pasto</option>
						<option value='natural' className='soccerfieldOption'>
							natural
						</option>
						<option value='sintetic' className='soccerfieldOption'>
							sintetico
						</option>
					</Form.Select>
				</Form.Group>
			</Form>
		</>
	)
}
export default SoccerFieldFilter
