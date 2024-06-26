import { createContext, useContext } from 'react'
import UseAxiosProducts from '../hooks/useAxiosProducts'

export const ProductsContext = createContext()

export const ProductsContextProvider = ({ children }) => {
	const {
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
	} = UseAxiosProducts()

	return (
		<ProductsContext.Provider
			value={{
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
			}}>
			{children}
		</ProductsContext.Provider>
	)
}

export const useProductsContext = () => {
	const context = useContext(ProductsContext)
	if (!context) {
		throw new Error(
			'ProductsContext must be used within a ProductsContextProvider'
		)
	}
	return context
}
