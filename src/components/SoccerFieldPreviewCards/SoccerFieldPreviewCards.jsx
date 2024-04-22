import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useSoccerFieldsContext } from '../../context/SoccerFieldsContext'
import SoccerFieldImgCard from '../SoccerFieldImgCard/SoccerFieldImgCard'
import Spinner from '../Spinner/Spinner'

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
		return <Spinner />
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
			<Container
				fluid
				className='d-flex justify-content-center gap-2 flex-wrap'>
				{soccerFields ? (
					soccerFields
						.slice(0, 5)
						.map((field) => (
							<SoccerFieldImgCard key={field._id} fieldImage={field.imgUrl} />
						))
				) : (
					<></>
				)}
			</Container>
		</>
	)
}
export default SoccerFieldPreviewCards
