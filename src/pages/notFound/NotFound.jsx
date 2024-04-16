import Spinner from '../../components/Spinner/Spinner'
import SpinnerAlternative from '../../components/SpinnerAlternative/SpinnerAlternative'
import './NotFound.css'
import { Link } from 'react-router-dom'
export const NotFound = () => {
	return (
		<main class="main">
            <section class="home404">
                <div class="home__container d-flex flex-column align-items-center flex-md-row justify-content-around">
                    <div class="home__data">
                        <h1 class="home__title">Lo Sentimos</h1>
                        <p class="home__description">
                            No encontramos la pagina <br/> que estas buscando.
                        </p>
                        <Link to="./" class="home__button">
                            Volver al Inicio
                        </Link>
                    </div>
                    <div class="home__img d-flex align-items-start">
                        <h3 className='number404 pt-4'>4</h3>
                        <SpinnerAlternative/>
                        <h3 className='number404 pt-4'>4</h3>
                    </div>
                </div>
            </section>
        </main>
	)
}
