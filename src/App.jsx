import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import Layout from './pages/layout/Layout'
import { NotFound } from './pages/notFound/NotFound'
import Products from './pages/products/Productos'
import SoccerFields from './pages/soccer-fields/SoccerFields'
import ProductDetail from './pages/ProductDetail/ProductDetail'
const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/productos',
				element: <Products />,
			},
			{
				path: '/canchas',
				element: <SoccerFields />,
			},
			{
				path:'/productDetail',
				element:<ProductDetail/>
			}
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
