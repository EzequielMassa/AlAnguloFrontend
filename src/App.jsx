import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { ProtectedUserNotLoguedRoute } from './components/PrivateRoute/ProtectedUserNotLoguedRoute'
import { AdminContextProvider } from './context/AdminContext'
import { AuthContextProvider } from './context/AuthContext'
import { ProductsContextProvider } from './context/ProductsContext'
import { SoccerFieldsContextProvider } from './context/SoccerFieldsContext'
import { UserContextProvider } from './context/UserContext'
import { Cart } from './pages/Cart/Cart'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import About from './pages/about/About'
import Admin from './pages/admin/Admin'
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
						<ProductsContextProvider>
							<Home />
						</ProductsContextProvider>
					</SoccerFieldsContextProvider>
				),
			},
			{
				path: '/carrito',
				element: (
					<ProtectedUserNotLoguedRoute>
						<Cart />
					</ProtectedUserNotLoguedRoute>
				),
			},
			{
				path: '/productos',
				element: (
					<ProductsContextProvider>
						<Products />
					</ProductsContextProvider>
				),
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
				path: '/producto/:id',
				element: (
					<ProductsContextProvider>
						<ProductDetail />
					</ProductsContextProvider>
				),
			},
			{
				path: '/admin',
				element: (
					<PrivateRoute>
						<AdminContextProvider>
							<ProductsContextProvider>
								<SoccerFieldsContextProvider>
									<Admin />
								</SoccerFieldsContextProvider>
							</ProductsContextProvider>
						</AdminContextProvider>
					</PrivateRoute>
				),
			},
		],
		errorElement: <NotFound />,
	},
	{
		path: '/404',
		element: <NotFound />,
	},
])

function App() {
	return (
		<>
			<AuthContextProvider>
				<UserContextProvider>
					<RouterProvider router={router} />
				</UserContextProvider>
			</AuthContextProvider>
		</>
	)
}

export default App
