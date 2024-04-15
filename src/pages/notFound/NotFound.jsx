import './NotFound.css'
export const NotFound = () => {
	return (
		<main class="main">
            <section class="home">
                <div class="home__container container">
                    <div class="home__data">
                        <span class="home__subtitle">Error 404</span>
                        <h1 class="home__title">Hey Buddy</h1>
                        <p class="home__description">
                            We can't seem to find the page <br/> you are looking for.
                        </p>
                        <a href="#" class="home__button">
                            Go Home
                        </a>
                    </div>

                    <div class="home__img">
                        <img src="assets/img/ghost-img.png" alt=""/>
                        <div class="home__shadow"></div>
                    </div>
                </div>
            </section>
        </main>
	)
}
