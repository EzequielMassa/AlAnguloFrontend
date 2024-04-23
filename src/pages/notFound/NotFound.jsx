import { Link } from 'react-router-dom'
import SpinnerAlternative from '../../components/SpinnerAlternative/SpinnerAlternative'
import './NotFound.css'
export const NotFound = () => {
	return (
		<main className='main'>
			<section className='home404'>
				<div className='home__container d-flex flex-column align-items-center flex-md-row justify-content-around'>
					<div className='home__data'>
						<h1 className='home__title'>Lo Sentimos</h1>
						<p className='home__description'>
							No encontramos la pagina <br /> que estas buscando.
						</p>
						<Link to='/' className='home__button'>
							<img src='../../assets/images/logo_AlAngulo.png' alt='logo' />
							Volver al Inicio
						</Link>
					</div>
					<div className='home__img d-flex align-items-start'>
						<h3 className='number404 pt-4'>4</h3>
						<SpinnerAlternative />
						<h3 className='number404 pt-4'>4</h3>
					</div>
				</div>
			</section>
		</main>
	)
}
