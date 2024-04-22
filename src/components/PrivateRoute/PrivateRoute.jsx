import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user'))

	return user && user.id && user.role === 'admin' ? (
		children
	) : (
		<Navigate to='/404' replace />
	)
}
