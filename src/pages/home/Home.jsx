import { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { Link, ScrollRestoration } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import Contact from '../../components/Contact/Contact'
import EShop from '../../components/E-Shop/EShop'
import Facilitie from '../../components/Facilitie/Facilitie'
import GeneralButtons from '../../components/GeneralButtons/GeneralButtons'
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

export const Home = () => {
	const {
		soccerFieldsQuery,
		soccerFieldsQueryLoading,
		soccerFieldsQueryError,
	} = useSoccerFieldsContext()

	useEffect(() => {
		if (soccerFieldsQueryError) {
			toast.error(`${soccerFieldsQueryError.response.data.message}`)
		}
	}, [soccerFieldsQueryError])

	return (
		<>
			<section className='hero'>
				<div className='hero-content pt-5'>
					<h1>Reserva las Mejores Canchas en AlAngulo</h1>
					<div className='d-flex flex-column flex-md-row justify-content-around gap-5'>
						<Link to={'./canchas'} className={'hero-link '}>
							<GeneralButtons text='Nuestras Canchas' />
						</Link>
						<Link to={'./productos'} className={'hero-link '}>
							<GeneralButtons text='Nuestros Productos' />
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
					<div className='col-12 d-flex flex-column align-items-center gap-3 py-4 '>
						<SoccerFieldPreviewCards />
						<Link className='text-decoration-none ' to={'/canchas'}>
							<GeneralButtons text='Explora Nuestras Canchas' />
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
			<Toaster richColors position='bottom-right' theme='dark' />
			<ScrollRestoration
				getKey={(location) => {
					return location.pathname
				}}
			/>
		</>
	)
}
