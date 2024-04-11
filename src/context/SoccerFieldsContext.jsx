import { createContext, useContext, useState } from 'react'
import UseAxiosSoccerFields from '../hooks/useAxiosSoccerFields.js'

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
		soccerFieldAvailableHours,
		soccerFieldAvailableHoursLoading,
		soccerFieldAvailableHoursError,
		getSoccerFieldAvailableHours,
	} = UseAxiosSoccerFields()

	const [selectedSoccerField, setSelectedSoccerField] = useState({})

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
				soccerFieldAvailableHours,
				soccerFieldAvailableHoursLoading,
				soccerFieldAvailableHoursError,
				getSoccerFieldAvailableHours,
				selectedSoccerField,
				setSelectedSoccerField,
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
