import { createContext, useContext } from 'react'
import UseAxiosUser from '../hooks/useAxiosUser'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
	const {
		bookingLoading,
		bookingError,
		postBooking,
		userCart,
		userCartLoading,
		userCartError,
		getUserCart,
	} = UseAxiosUser()

	return (
		<UserContext.Provider
			value={{
				bookingLoading,
				bookingError,
				postBooking,
				userCart,
				userCartLoading,
				userCartError,
				getUserCart,
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
