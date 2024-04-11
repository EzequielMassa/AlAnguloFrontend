import { useEffect } from 'react'
import { useSoccerFieldsContext } from '../../context/SoccerFieldsContext'
import SoccerFieldImgCard from '../SoccerFieldImgCard/SoccerFieldImgCard'

function SoccerFieldPreviewCards() {
	const {
		soccerFields,
		soccerFieldsLoading,
		soccerFieldsError,
		getAllSoccerfields,
	} = useSoccerFieldsContext()

	useEffect(() => {
		getAllSoccerfields()
	}, [])

	if (soccerFieldsLoading) {
		return (
			<>
				<h1>loading...</h1>
			</>
		)
	}
	if (soccerFieldsError) {
		return (
			<>
				<h1>{soccerFieldsError.message}</h1>
			</>
		)
	}

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
