import { Outlet as Page } from 'react-router'
import { ScrollRestoration } from 'react-router-dom'
import { MainFooter } from '../../components/MainFooter/MainFooter'
import { MainNavBar } from '../../components/MainNavBar/MainNavBar'

const Layout = () => {
	return (
		<>
			<MainNavBar />

			<Page></Page>

			<MainFooter />
			<ScrollRestoration
				getKey={(location) => {
					const paths = ['/canchas', '/productos', '/admin', '/']
					return paths.includes(location.pathname)
						? location.pathname
						: location.key
				}}
			/>
		</>
	)
}
export default Layout
