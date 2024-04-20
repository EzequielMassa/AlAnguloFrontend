import { Navigate } from 'react-router-dom'

export const ProtectedUserNotLoguedRoute = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user'))

	return user && user.id ? children : <Navigate to='/404' replace />
}
