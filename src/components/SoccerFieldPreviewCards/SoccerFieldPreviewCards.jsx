import { useEffect, useState } from 'react'
import SoccerFieldImgCard from '../SoccerFieldImgCard/SoccerFieldImgCard'

function SoccerFieldPreviewCards() {
	const [soccerFields, setSoccerFields] = useState([])
	const fetchSoccerFields = async () => {
		const response = await fetch('http://localhost:4000/api/soccerfields')
		const data = await response.json()
		if (data.data) {
			const relevants = data.data.slice(0, 3)
			setSoccerFields(relevants)
		}
	}

	useEffect(() => {
		fetchSoccerFields()
	}, [])

	return (
		<>
			<div className='d-flex justify-content-center gap-2  '>
				{soccerFields ? (
					soccerFields.map((field) => (
						<SoccerFieldImgCard key={field._id} fieldImage={field.imgUrl} />
					))
				) : (
					<></>
				)}
			</div>
		</>
	)
}
export default SoccerFieldPreviewCards
