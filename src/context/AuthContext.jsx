import { createContext, useContext } from 'react'
import UseAxiosAuth from '../hooks/useAxiosAuth'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

	const { loguedUser,
		registerLoading,
		registerError,
		register,
	 } = UseAxiosAuth()
	 console.log(loguedUser,'usuario logueado desde context')
	return (
		<AuthContext.Provider
			value={{ loguedUser,
				registerLoading,
				registerError,
				register,
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
