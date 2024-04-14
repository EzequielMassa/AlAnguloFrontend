import axios from 'axios'
import { useState } from 'react'
import { baseUrl } from '../api/apiUrl.js'

function UseAxiosProducts() {
	const [products, setProducts] = useState([])
	const [productsLoading, setProductsLoading] = useState(false)
	const [productsError, setProductsError] = useState(null)
	useState(false)

	const getAllProducts = async () => {
		setProductsLoading(true)
		try {
			const response = await axios.post(`${baseUrl}/products`)
			setProducts(response.data.data)
		} catch (err) {
			setProductsError(err)
		} finally {
			setProductsLoading(false)
		}
	}

	return {
		products,
		productsLoading,
		productsError,
		getAllProducts,
	}
}

export default UseAxiosProducts
