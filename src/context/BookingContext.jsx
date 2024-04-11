import { createContext, useContext } from 'react'

export const BookingContext = createContext()

export const BookingContextProvider = ({ children }) => {
	//

	return (
		<BookingContext.Provider value={{ pepe: 'pepe' }}>
			{children}
		</BookingContext.Provider>
	)
}

export const useBookingContext = () => {
	const context = useContext(BookingContext)
	if (!context) {
		throw new Error(
			'BookingContext must be used within a BookingContextProvider'
		)
	}
	return context
}
