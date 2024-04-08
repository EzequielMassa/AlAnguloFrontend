import { useEffect, useState } from 'react'
import nuestrasCanchasHero from '../../assets/images/nuestras-canchas-hero.webp'
import SoccerFieldCard from '../../components/SoccerFieldCard/SoccerFieldCard'
import SoccerFieldDetail from '../../components/SoccerFieldsDetail/SoccerFieldDetail'
import {
	detailSoccerField11,
	detailSoccerField5,
} from '../../utils/soccerfieldDetails'
import './SoccerFields.css'
function SoccerFields() {
	const [soccerFields, setSoccerFields] = useState([])

	const fetchSoccerFields = async () => {
		const response = await fetch('http://localhost:4000/api/soccerfields')
		const data = await response.json()
		setSoccerFields(data.data)
	}

	useEffect(() => {
		fetchSoccerFields()
	}, [])

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
			<article className='container-md '>
				<section className='row'>
					<div className='col-12'>
						{soccerFields ? (
							soccerFields.map((field) => (
								<SoccerFieldCard key={field._id} soccerField={field} />
							))
						) : (
							<></>
						)}
					</div>
				</section>
			</article>
		</>
	)
}
export default SoccerFields
