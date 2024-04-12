import { Link, ScrollRestoration } from 'react-router-dom'
import SoccerFieldCard from '../../components/SoccerFieldCard/SoccerFieldCard'
import SoccerFieldFilter from '../../components/SoccerFieldFilter/SoccerFieldFilter'
import SoccerFieldPreviewCards from '../../components/SoccerFieldPreviewCards/SoccerFieldPreviewCards'
import { useSoccerFieldsContext } from '../../context/SoccerFieldsContext'
import './Home.css'
import { Image } from 'react-bootstrap'
import logo from './logorolling-remove.png'
import Spinner from '../../components/Spinner/Spinner'
import Facilitie from '../../components/Facilitie/Facilitie'
import { facilites } from '../../utils/facilitiesInfo'

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
							<Spinner />
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
			<article className='container-md my-5 '>
				<h2 className='text-center d-block  title'>Nuestras Instalaciones</h2>
				<section className='row'>
					<div className='col-12'>
						{facilites.map((f) => (
							<Facilitie key={f.title} facilitie={f} />
						))}
					</div>
				</section>
			</article>
			<div className='slider d-none d-md-grid '>
				<div className='slide-track'>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
					<div className='slide'>
						<img src={logo} />
					</div>
				</div>
			</div>
			<ScrollRestoration
				getKey={(location) => {
					return location.pathname
				}}
			/>
		</>
	)
}
