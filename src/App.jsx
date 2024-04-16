import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
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
import { AdminContextProvider } from './context/AdminContext'
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
				element: <Cart />,
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
				path: '/productDetail',
				element: (
					<ProductsContextProvider>
						<ProductDetail />
					</ProductsContextProvider>
				),
			},
			{
				path: '/admin',
				element: ( <AdminContextProvider> <SoccerFieldsContextProvider> <ProductsContextProvider> <Admin /> </ProductsContextProvider> </SoccerFieldsContextProvider> </AdminContextProvider>)
			},
		],
		errorElement: <NotFound />,
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
