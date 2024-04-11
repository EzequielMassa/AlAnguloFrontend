import { useEffect, useState } from 'react'
import {
	ScrollRestoration,
	useNavigate,
	useSearchParams,
} from 'react-router-dom'
import nuestrasCanchasHero from '../../assets/images/nuestras-canchas-hero.webp'
import SoccerFieldCard from '../../components/SoccerFieldCard/SoccerFieldCard'
import SoccerFieldDetail from '../../components/SoccerFieldsDetail/SoccerFieldDetail'
import SoccerFieldsFomFilters from '../../components/SoccerFieldsFormFilters/SoccerFieldsFormFilters'
import {
	detailSoccerField11,
	detailSoccerField5,
} from '../../utils/soccerfieldDetails'
import './SoccerFields.css'
import { useBookingContext } from '../../context/BookingContext'

function SoccerFields() {
	const { pepe } = useBookingContext()
	console.log(pepe)
	const [soccerFields, setSoccerFields] = useState([])
	const [searchParams, setSearchParams] = useSearchParams({})
	const navigate = useNavigate()
	const fetchSoccerFields = async () => {
		const response = await fetch('http://localhost:4000/api/soccerfields')
		const data = await response.json()
		setSoccerFields(data.data)
	}

	useEffect(() => {
		fetchSoccerFields()
	}, [])

	const applyFilters = () => {
		const name = searchParams.get('name')
		const price = searchParams.get('price')
		const grass = searchParams.get('grass')
		const size = searchParams.get('size')

		let filteredFields = soccerFields

		if (name) {
			filteredFields = filteredFields.filter((field) =>
				field.name.toLowerCase().includes(name.toLowerCase())
			)
		}

		if (price) {
			if (price === 'menor') {
				filteredFields = filteredFields.sort((a, b) => a.price - b.price)
			} else if (price === 'mayor') {
				filteredFields = filteredFields.sort((a, b) => b.price - a.price)
			}
		}

		if (grass) {
			filteredFields = filteredFields.filter((field) => field.grass === grass)
		}

		if (size) {
			filteredFields = filteredFields.filter(
				(field) => field.size === parseInt(size)
			)
		}

		return filteredFields
	}

	const filteredSoccerFields = applyFilters()

	const setFilters = (name, price, grass, size) => {
		const params = new URLSearchParams()

		if (name) {
			params.set('name', name)
		}

		if (price) {
			params.set('price', price)
		}

		if (grass) {
			params.set('grass', grass)
		}

		if (size) {
			params.set('size', size)
		}

		setSearchParams(params)
	}

	const clearSoccerFieldsFilter = () => {
		navigate('/canchas')
	}
	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFilters(
			name === 'name' ? value : searchParams.get('name'),
			name === 'price' ? value : searchParams.get('price'),
			name === 'grass' ? value : searchParams.get('grass'),
			name === 'size' ? value : searchParams.get('size')
		)
	}

	return (
		<>
			<article className='container-fluid d-flex align-items-center  s_field_container'>
				<img src={nuestrasCanchasHero} alt='' className='s_field_img' />
				<h1 className='title'>Nuestras Canchas</h1>
			</article>
			<article className='container-md'>
				<section className='row'>
					<div className='col-12'>
						<div className='row'>
							<div className='col-12 col-md-6 d-flex align-items-center justify-content-center py-4  '>
								<SoccerFieldDetail description={detailSoccerField5} />
							</div>
							<div className='col-12 col-md-6 d-flex align-items-center justify-content-center py-4 '>
								<SoccerFieldDetail description={detailSoccerField11} />
							</div>
						</div>
					</div>
				</section>
			</article>

			<article className='container-md my-4 '>
				<section className='row'>
					<div className='col'>
						<SoccerFieldsFomFilters
							searchParams={searchParams}
							handleInputChange={handleInputChange}
							clearSoccerFieldsFilter={clearSoccerFieldsFilter}
						/>
					</div>
				</section>
			</article>

			<article className='container-md '>
				<section className='row'>
					<div className='col-12'>
						{filteredSoccerFields ? (
							filteredSoccerFields.map((field) => (
								<SoccerFieldCard key={field._id} soccerField={field} />
							))
						) : (
							<></>
						)}
					</div>
				</section>
			</article>
			<ScrollRestoration
				getKey={(location) => {
					return location.pathname
				}}
			/>
		</>
	)
}
export default SoccerFields
