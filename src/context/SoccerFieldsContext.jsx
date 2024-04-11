import { createContext, useContext } from 'react'

export const SoccerFieldsContext = createContext()

export const SoccerFieldsContextProvider = ({ children }) => {
	//

	return (
		<SoccerFieldsContext.Provider value={{ pepe: 'pepe' }}>
			{children}
		</SoccerFieldsContext.Provider>
	)
}

export const useSoccerFieldsContext = () => {
	const context = useContext(SoccerFieldsContext)
	if (!context) {
		throw new Error(
			'BookingContext must be used within a BookingContextProvider'
		)
	}
	return context
}
