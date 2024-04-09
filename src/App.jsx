import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import Layout from './pages/layout/Layout'
import { NotFound } from './pages/notFound/NotFound'
import Products from './pages/products/Productos'
const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path:'/productos',
				element:<Products/>
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
