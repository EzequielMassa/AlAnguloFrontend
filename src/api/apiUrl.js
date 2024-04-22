import axios from 'axios'

export const baseUrl = 'https://alangulobknd.onrender.com/api'

axios.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token')
		config.headers['Access-Control-Allow-Origin'] = 'Content-Type'
		if (token) {
			config.headers['x-access-token'] = token
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default axios
