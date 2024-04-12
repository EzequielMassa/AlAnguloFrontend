import { Outlet as Page } from 'react-router'
import { MainFooter } from '../../components/MainFooter/MainFooter'
import { MainNavBar } from '../../components/MainNavBar/MainNavBar'

const Layout = () => {
	return (
		<>
			<MainNavBar />

			<Page></Page>

			<MainFooter />
		</>
	)
}
export default Layout
