import { createContext, useContext } from 'react'
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
		deleteOrder,
	} = UseAxiosUser()

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
				deleteOrder,
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
