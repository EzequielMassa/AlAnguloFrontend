import { createContext, useContext } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('AuthContext must be used within a AuthContextProvider')
	}
	return context
}
