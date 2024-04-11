import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import Layout from './pages/layout/Layout'
import { NotFound } from './pages/notFound/NotFound'
import Products from './pages/products/Productos'

import Register from './pages/register/Register'

import SoccerFields from './pages/soccer-fields/SoccerFields'
import { BookingContextProvider } from './context/BookingContext'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',

				element: (
					<BookingContextProvider>
						<Home />
					</BookingContextProvider>
				),
			},
			{
				path: '/products',
				element: <Products />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/canchas',
				element: (
					<BookingContextProvider>
						<SoccerFields />
					</BookingContextProvider>
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
