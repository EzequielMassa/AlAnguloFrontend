import { useState } from 'react'
import SoccerFieldFilter from '../../components/SoccerFieldFilter/SoccerFieldFilter'
import SoccerFieldFilterCard from '../../components/SoccerFieldFilterCard/SoccerFieldFilterCard'
import SoccerFieldCards from '../../components/SoccerFieldCards/SoccerFieldCards'
import { Link } from 'react-router-dom'

export const Home = () => {
	const [queryResult, setQueryResult] = useState([])
	const handleQueryResultChange = (newQueryResult) => {
		setQueryResult(newQueryResult)
	}

	return (
		<>
			<h1>Home</h1>
			<article className='container-md my-4'>
				<section className='row'>
					<h2 className='text-center title py-4'>
						Encontra la cancha que necesitas rapidamente
					</h2>
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
			<article className='container-md my-4'>
				<section className='row'>
					<h3 className='text-center subtitle'>Descubri nuestras canchas</h3>
					<div className='col-12 d-flex flex-column align-items-center gap-3'>
						<SoccerFieldCards />
						<Link className='btn btn-primary ' to={'/canchas'}>
							Explora nuestras canchas
						</Link>
					</div>
				</section>
			</article>
		</>
	)
}
