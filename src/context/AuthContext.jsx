import { createContext, useContext, useEffect, useState } from 'react'
import UseAxiosAuth from '../hooks/useAxiosAuth'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
	const {
		loguedUser,
		setLoguedUser,
		registerLoading,
		registerError,
		register,
		login,
	} = UseAxiosAuth()
	const [user, setUser] = useState({})

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')) || {})
	}, [loguedUser])

	return (
		<AuthContext.Provider
			value={{
				loguedUser,
				setLoguedUser,
				registerLoading,
				registerError,
				register,
				login,
				user,
			}}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('AuthContext must be used within a AuthContextProvider')
	}
	return context
}
