import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

export const PrivateRoute = ({ children }) => {
	const { user } = useAuthContext()
	const navigate = useNavigate()

	return user.id && user.role === 'admin' ? children : navigate('/404')
}