import { useState } from 'react'
import SoccerFieldFilter from '../../components/SoccerFieldFilter/SoccerFieldFilter'
import SoccerFieldFilterCard from '../../components/SoccerFieldFilterCard/SoccerFieldFilterCard'

export const Home = () => {
	const [queryResult, setQueryResult] = useState([])
	const handleQueryResultChange = (newQueryResult) => {
		setQueryResult(newQueryResult)
	}

	return (
		<>
			<h1>Home</h1>
			<article className='container-md '>
				<section className='row'>
					<div className='col-12'>
						<SoccerFieldFilter onQueryResultChange={handleQueryResultChange} />
						{queryResult ? (
							queryResult.map((result) => (
								<SoccerFieldFilterCard key={result._id} soccerField={result} />
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
