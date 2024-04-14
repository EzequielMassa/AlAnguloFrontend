import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { AuthContextProvider } from './context/AuthContext'
import { SoccerFieldsContextProvider } from './context/SoccerFieldsContext'
import { Cart } from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import About from './pages/about/About'
import { Home } from './pages/home/Home'
import Layout from './pages/layout/Layout'
import { NotFound } from './pages/notFound/NotFound'
import Products from './pages/products/Productos'
import Register from './pages/register/Register'
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
			{
				path: '/nosotros',
				element: <About />,
			},
			{
				path: '/productDetail',
				element: <ProductDetail />,
			},
		],
		errorElement: <NotFound />,
	},
])

function App() {
	return (
		<>
			<AuthContextProvider>
				<RouterProvider router={router} />
			</AuthContextProvider>
		</>
	)
}

export default App
