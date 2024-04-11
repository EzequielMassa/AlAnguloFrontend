import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import Admin from './pages/admin/Admin'
import Layout from './pages/layout/Layout'
import { NotFound } from './pages/notFound/NotFound'
import UsersContext from './context/UsersContext'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/admin',
				element: <UsersContext> <Admin /> </UsersContext>,
			},
		],
		errorElement: <NotFound />,
	},
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
