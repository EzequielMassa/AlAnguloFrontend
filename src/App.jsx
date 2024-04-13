import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Cart } from './pages/Cart/Cart'
import { Home } from './pages/home/Home'
import Layout from './pages/layout/Layout'
import { NotFound } from './pages/notFound/NotFound'
import Products from './pages/products/Productos'

import Register from './pages/register/Register'

import { SoccerFieldsContextProvider } from './context/SoccerFieldsContext'
import SoccerFields from './pages/soccer-fields/SoccerFields'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',

				element: (
					<SoccerFieldsContextProvider>
						<Home />
					</SoccerFieldsContextProvider>
				),
			},
			{
				path: '/carrito',
				element: <Cart />,
			},
			{
				path: '/productos',
				element: <Products />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/canchas',
				element: (
					<SoccerFieldsContextProvider>
						<SoccerFields />
					</SoccerFieldsContextProvider>
				),
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
