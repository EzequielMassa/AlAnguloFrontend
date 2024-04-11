import { Link, ScrollRestoration } from 'react-router-dom'
import SoccerFieldCard from '../../components/SoccerFieldCard/SoccerFieldCard'
import SoccerFieldFilter from '../../components/SoccerFieldFilter/SoccerFieldFilter'
import SoccerFieldPreviewCards from '../../components/SoccerFieldPreviewCards/SoccerFieldPreviewCards'
import { useSoccerFieldsContext } from '../../context/SoccerFieldsContext'
import './Home.css'

export const Home = () => {
	const {
		soccerFieldsQuery,
		soccerFieldsQueryLoading,
		soccerFieldsQueryError,
	} = useSoccerFieldsContext()

	return (
		<>
			<section className='hero'>
				<div className='hero-content'>
					<h1>Reserva las Mejores Canchas en AlAngulo</h1>
					<div className='d-flex justify-content-between'>
						<Link to={'./Canchas'} className={'hero-link me-5'}>
							Nuestras Canchas
						</Link>
						<Link to={'./Productos'} className={'hero-link ms-5'}>
							Nuestros Productos
						</Link>
					</div>
				</div>
			</section>
			<article className='container-md my-4'>
				<section className='row'>
					<h2 className='text-center title py-4'>
						Encontra la cancha que necesitas rapidamente
					</h2>
					<div className='col-12'>
						<SoccerFieldFilter />
						{soccerFieldsQueryLoading ? (
							<h1>loading...</h1>
						) : soccerFieldsQueryError ? (
							<h1>{soccerFieldsQueryError.response.data.message}</h1>
						) : soccerFieldsQuery ? (
							soccerFieldsQuery.map((result) => (
								<SoccerFieldCard key={result._id} soccerField={result} />
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
						<SoccerFieldPreviewCards />
						<Link className='btn btn-primary ' to={'/canchas'}>
							Explora nuestras canchas
						</Link>
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
