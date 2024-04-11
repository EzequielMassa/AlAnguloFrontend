import { createContext, useContext, useEffect } from 'react'
import UseAxiosSoccerFields from '../hooks/useAxios'

export const SoccerFieldsContext = createContext()

export const SoccerFieldsContextProvider = ({ children }) => {
	const {
		soccerFields,
		soccerFieldsLoading,
		soccerFieldsError,
		getAllSoccerfields,
		soccerFieldsQuery,
		soccerFieldsQueryLoading,
		soccerFieldsQueryError,
		getSoccerfieldsByQuery,
	} = UseAxiosSoccerFields()

	return (
		<SoccerFieldsContext.Provider
			value={{
				soccerFields,
				soccerFieldsLoading,
				soccerFieldsError,
				getAllSoccerfields,
				soccerFieldsQuery,
				soccerFieldsQueryLoading,
				soccerFieldsQueryError,
				getSoccerfieldsByQuery,
			}}>
			{children}
		</SoccerFieldsContext.Provider>
	)
}

export const useSoccerFieldsContext = () => {
	const context = useContext(SoccerFieldsContext)
	if (!context) {
		throw new Error(
			'SoccerFieldsContext must be used within a SoccerFieldsContextProvider'
		)
	}
	return context
}
