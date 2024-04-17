import { createContext, useContext, useState } from 'react'
import UseAxiosAdmin from '../hooks/useAxiosAdmin.js';

export const AdminContext = createContext()

export const AdminContextProvider = ({ children }) => {
	const {
		users,
        usersLoading,
        usersError,
		getAllUsers,
        updateUserActive,
        updateUser,
        deleteUser,
		products,
        productsLoading,
        productsError,
		deleteProduct,
		updateProduct,
		getAllProducts,
		createProduct
     } = UseAxiosAdmin();

	return (
		<AdminContext.Provider
			value={{
				users,
                usersLoading,
                usersError,
		        getAllUsers,
                updateUserActive,
                updateUser,
                deleteUser,
				products,
        		productsLoading,
        		productsError,
				deleteProduct,
				updateProduct,
				getAllProducts,
				createProduct
			}}>
			{children}
		</AdminContext.Provider>
	)
}

export const useAdminContext = () => {
	const context = useContext(AdminContext)
	if (!context) {
		throw new Error(
			'AdminContext must be used within a AdminContextProvider'
		)
	}
	return context
}