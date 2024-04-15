import { Col } from 'react-bootstrap'
import { Link, ScrollRestoration } from 'react-router-dom'
import Contact from '../../components/Contact/Contact'
import EShop from '../../components/E-Shop/EShop'
import Facilitie from '../../components/Facilitie/Facilitie'
import SoccerFieldCard from '../../components/SoccerFieldCard/SoccerFieldCard'
import SoccerFieldFilter from '../../components/SoccerFieldFilter/SoccerFieldFilter'
import SoccerFieldPreviewCards from '../../components/SoccerFieldPreviewCards/SoccerFieldPreviewCards'
import Spinner from '../../components/Spinner/Spinner'
import { useSoccerFieldsContext } from '../../context/SoccerFieldsContext'
import { facilites } from '../../utils/facilitiesInfo'
import './Home.css'
import logo1 from './logoPublicity/logoAdidasRemove.png'
import logo2 from './logoPublicity/logoFacebookRemove.png'
import logo3 from './logoPublicity/logoJs.png'
import logo4 from './logoPublicity/logoLinkedinRemove.png'
import logo6 from './logoPublicity/logoNikeRemove.png'
import logo7 from './logoPublicity/logoPlayRemove.png'
import logo8 from './logoPublicity/logoStarbucksRemove.png'
import logo5 from './logoPublicity/logomongoremove.png'
import logo12 from './logoPublicity/logorolling-remove.png'
import logo9 from './logoPublicity/logotwremove.png'
import logo10 from './logoPublicity/nintendoLogoRemove.png'
import logo11 from './logoPublicity/nodeLogoRemove.png'
import { useAuthContext } from '../../context/AuthContext'
import { useEffect } from 'react'

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
					<div className='d-flex flex-column flex-md-row justify-content-around gap-3'>
						<Link to={'./canchas'} className={'hero-link '}>
							Nuestras Canchas
						</Link>
						<Link to={'./productos'} className={'hero-link '}>
							Nuestros Productos
						</Link>
					</div>
				</div>
			</section>
			<article className='container-md my-4'>
				<section className='row'>
					<h2 className='text-center subtitle py-4'>
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
					<h3 className='text-center title'>Descubri nuestras canchas</h3>
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

			<article className='container-md my-5 '>
				<h2 className='text-center d-block  title'>Descubri nuestro E-Shop</h2>
				<section className='row'>
					<div className='col-12'>
						<EShop />
					</div>
				</section>
			</article>
			<div className='slider d-none d-md-grid '>
				<div className='slide-track'>
					<div className='slide'>
						<img src={logo12} />
					</div>
					<div className='slide'>
						<img src={logo1} />
					</div>
					<div className='slide'>
						<img src={logo2} />
					</div>
					<div className='slide'>
						<img src={logo3} />
					</div>
					<div className='slide'>
						<img src={logo4} />
					</div>
					<div className='slide'>
						<img src={logo5} />
					</div>
					<div className='slide'>
						<img src={logo6} />
					</div>
					<div className='slide'>
						<img src={logo7} />
					</div>
					<div className='slide'>
						<img src={logo8} />
					</div>
					<div className='slide'>
						<img src={logo9} />
					</div>
					<div className='slide'>
						<img src={logo10} />
					</div>
					<div className='slide'>
						<img src={logo11} />
					</div>
					<div className='slide'>
						<img src={logo4} />
					</div>
					<div className='slide'>
						<img src={logo2} />
					</div>
					<div className='slide'>
						<img src={logo1} />
					</div>
					<div className='slide'>
						<img src={logo10} />
					</div>
				</div>
			</div>
			<article className='container-md my-5 '>
				<section className='row'>
					<Col xs={12}>
						<Contact />
					</Col>
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
