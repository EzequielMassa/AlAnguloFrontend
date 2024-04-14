import { createContext, useContext } from 'react'
import UseAxiosAuth from '../hooks/useAxiosAuth'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
	const { login, loginLoading, loginError, loginSession } = UseAxiosAuth()
	return (
		<AuthContext.Provider
			value={{ login, loginLoading, loginError, loginSession }}>
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
