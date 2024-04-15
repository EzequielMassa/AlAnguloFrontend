import { createContext, useContext, useEffect, useState } from 'react'
import UseAxiosUser from '../hooks/useAxiosUser'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
	const { bookingLoading, 
		bookingError, 
		postBooking, 
		userCart,
		userCartLoading,
		userCartError,
		getUserCart, 
		} = UseAxiosUser()

	const [user, setUser] = useState({})
	const [userId, setUserId] = useState('')
	const userLocal = JSON.parse(localStorage.getItem('user')) || ''
	useEffect(() => {
			setUserId(user.id)
		
	}, [userLocal])
	
	useEffect(() => {
		if (userId)
			getUserCart(user.id)
		
	}, [userId])

	return (
		<UserContext.Provider value={{ bookingLoading, bookingError, postBooking, userCart, userCartLoading, userCartError,	getUserCart }}>
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
