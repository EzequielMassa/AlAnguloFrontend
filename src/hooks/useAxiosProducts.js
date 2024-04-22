import axios from 'axios'
import { useState } from 'react'
import { baseUrl } from '../api/apiUrl.js'

function UseAxiosProducts() {
	const [products, setProducts] = useState([])
	const [productsLoading, setProductsLoading] = useState(false)
	const [productsError, setProductsError] = useState(null)
	useState(false)

	const [categories, setCategories] = useState([])
	const [categoriesLoading, setCategoriesLoading] = useState(false)
	const [categoriesError, setCategoriesError] = useState(null)
	useState(false)

	const [product, setProduct] = useState([])
	const [productLoading, setProductLoading] = useState(false)
	const [productError, setProductError] = useState(null)
	useState(false)

	const getAllProducts = async () => {
		setProductsLoading(true)
		try {
			const response = await axios.get(`${baseUrl}/products`)
			setProducts(response.data.data)
		} catch (err) {
			setProductsError(err)
		} finally {
			setProductsLoading(false)
		}
	}

	const getAllCategories = async () => {
		setCategoriesLoading(true)
		try {
			const response = await axios.get(`${baseUrl}/categories`)
			setCategories(response.data.data)
		} catch (err) {
			setCategoriesError(err)
		} finally {
			setCategoriesLoading(false)
		}
	}

	const getProductById = async (productId) => {
		setProductLoading(true)
		try {
			const response = await axios.get(`${baseUrl}/product/${productId}`)
			setProduct(response.data.data)
		} catch (err) {
			setProductError(err)
		} finally {
			setProductLoading(false)
		}
	}

	return {
		products,
		productsLoading,
		productsError,
		getAllProducts,
		categories,
		categoriesLoading,
		categoriesError,
		getAllCategories,
		product,
		productLoading,
		productError,
		getProductById,
	}
}

export default UseAxiosProducts
