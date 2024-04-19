import { createContext, useContext, useEffect } from 'react'
import UseAxiosUser from '../hooks/useAxiosUser'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
	const {
		booking,
		setBooking,
		bookingLoading,
		bookingError,
		postBooking,
		userCart,
		userCartLoading,
		userCartError,
		getUserCart,
		setUserCart,
		order,
		orderLoading,
		orderError,
		postOrder,
		clearUserCart,
	} = UseAxiosUser()

	useEffect(() => {
		getUserCart()
	}, [order])

	return (
		<UserContext.Provider
			value={{
				booking,
				setBooking,
				bookingLoading,
				bookingError,
				postBooking,
				userCart,
				userCartLoading,
				userCartError,
				getUserCart,
				order,
				orderLoading,
				orderError,
				postOrder,
				clearUserCart,
				setUserCart,
			}}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => {
	const context = useContext(UserContext)
	if (!context) {
		throw new Error('UserContext must be used within a UserContextProvider')
	}
	return context
}
