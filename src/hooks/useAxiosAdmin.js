import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { baseUrl } from '../api/apiUrl.js'

function UseAxiosAdmin() {
	const [users, setUsers] = useState([])
	const [usersLoading, setUsersLoading] = useState(false)
	const [usersError, setUsersError] = useState(null)

	const [products, setProducts] = useState([])
	const [productsLoading, setProductsLoading] = useState(false)
	const [productsError, setProductsError] = useState(null)

	const [soccerfields, setSoccerfields] = useState([])
	const [soccerfieldsLoading, setSoccerfieldsLoading] = useState(false)
	const [soccerfieldsError, setSoccerfieldsError] = useState(null)

	const getAllUsers = async () => {
		setUsersLoading(true)
		try {
			const serverReply = await axios.get(`${baseUrl}/users`)
			setUsers(serverReply.data.data)
		} catch (error) {
			setUsersError(error)
		} finally {
			setUsersLoading(false)
		}
	}

	const updateUserActive = async (userObj) => {
		try {
			const updatedUser = await axios.put(
				`${baseUrl}/user/changeState/${userObj._id}`,
				userObj
			)
			if (updatedUser.status === 200) {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Cambio guardado',
					showConfirmButton: false,
					timer: 2000,
				})
				await getAllUsers()
			}
		} catch (error) {
			console.error(error)
		}
	}

	const updateUser = async (userObj) => {
		try {
			const updatedUser = await axios.put(
				`${baseUrl}/user/${userObj._id}`,
				userObj
			)
			if (updatedUser.status === 200) {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Cambios guardados',
					showConfirmButton: false,
					timer: 2000,
				})
				await getAllUsers()
			}
		} catch (error) {
			console.error(error)
		}
	}

	const deleteUser = async (userObj) => {
		Swal.fire({
			title: `Confirma eliminación de usuario "${userObj.name}"?`,
			text: 'Esta acción no podrá revertirse.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, borrar!',
		}).then((result) => {
			if (result.isConfirmed) {
				try {
					const response = axios.delete(`${baseUrl}/user/${userObj._id}`)
					response.then((result) => {
						if (result.status === 200) {
							return (
								Swal.fire({
									title: `Usuario "${userObj.name}" eliminado`,
									icon: 'success',
									showConfirmButton: false,
									timer: 2500,
								}) + getAllUsers()
							)
						}
					})
					Swal.fire({
						title: `Operación fallida`,
						icon: 'error',
						showConfirmButton: false,
						timer: 2500,
					})
				} catch (error) {
					console.error(error)
				}
			}
		})
	}

	const getAllProducts = async () => {
		setProductsLoading(true)
		try {
			const serverReply = await axios.get(`${baseUrl}/products`)
			setProducts(serverReply.data.data)
		} catch (error) {
			setProductsError(error)
		} finally {
			setProductsLoading(false)
		}
	}

	const deleteProduct = async (ProductObj) => {
		Swal.fire({
			title: `Confirma eliminación del producto "${ProductObj.name}"?`,
			text: 'Esta acción no podrá revertirse.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, borrar!',
		}).then((result) => {
			if (result.isConfirmed) {
				try {
					const response = axios.delete(
						`${baseUrl}/product/delete/${ProductObj._id}`
					)
					response.then((result) => {
						if (result.status === 200) {
							return (
								Swal.fire({
									title: `Producto "${ProductObj.name}" eliminado`,
									icon: 'success',
									showConfirmButton: false,
									timer: 2500,
								}) + getAllProducts()
							)
						}
					})
					Swal.fire({
						title: `Operación fallida`,
						icon: 'error',
						showConfirmButton: false,
						timer: 2000,
					})
				} catch (error) {
					console.error(error)
				}
			}
		})
	}

	const updateProduct = async (product) => {
		try {
			const updatedUser = await axios.put(
				`${baseUrl}/product/update/${product._id}`,
				product
			)
			if (updatedUser.status === 200) {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Cambios guardados',
					showConfirmButton: false,
					timer: 2000,
				})
				await getAllProducts()
			}
		} catch (error) {
			console.error(error)
		}
	}

	const createProduct = async (newProductObj) => {
		try {
			const responseNewSoccerfield = await axios.post(
				`${baseUrl}/products`,
				newProductObj
			)
			if (responseNewSoccerfield.status === 201) {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: `Producto ${newProductObj.name} guardado`,
					showConfirmButton: false,
					timer: 2000,
				})
				await getAllProducts()
			}
		} catch (error) {
			console.error(error)
		}
	}

	const getAllSoccerfields = async () => {
		setSoccerfieldsLoading(true)
		try {
			const serverReply = await axios.get(`${baseUrl}/soccerfields`)
			setSoccerfields(serverReply.data.data)
		} catch (error) {
			setSoccerfieldsError(error)
		} finally {
			setSoccerfieldsLoading(false)
		}
	}

	const updateSoccerfield = async (soccerfieldObj) => {
		try {
			const updatedSoccerfield = await axios.put(
				`${baseUrl}/soccerfield/update/${soccerfieldObj._id}`,
				soccerfieldObj
			)
			if (updatedSoccerfield.status === 200) {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Cambios guardados',
					showConfirmButton: false,
					timer: 2000,
				})
				await getAllSoccerfields()
			}
		} catch (error) {
			console.error(error)
		}
	}

	const deleteSoccerfield = async (soccerfieldObj) => {
		Swal.fire({
			title: `Confirma eliminación de la cancha "${soccerfieldObj.name}"?`,
			text: 'Esta acción no podrá revertirse.',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, borrar!',
		}).then((result) => {
			if (result.isConfirmed) {
				try {
					const response = axios.delete(
						`${baseUrl}/soccerfield/delete/${soccerfieldObj._id}`
					)
					response.then((result) => {
						if (result.status === 200) {
							return (
								Swal.fire({
									title: `Cancha "${soccerfieldObj.name}" eliminada`,
									icon: 'success',
									showConfirmButton: false,
									timer: 2500,
								}) + getAllSoccerfields()
							)
						}
					})
					Swal.fire({
						title: `Operación fallida`,
						icon: 'error',
						showConfirmButton: false,
						timer: 2000,
					})
				} catch (error) {
					console.error(error)
				}
			}
		})
	}

	const createSoccerfield = async (newSoccerfieldObj) => {
		try {
			const responseNewSoccerfield = await axios.post(
				`${baseUrl}/soccerfield`,
				newSoccerfieldObj
			)

			if (responseNewSoccerfield.status === 201) {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: `Cancha ${newSoccerfieldObj.name} guardada`,
					showConfirmButton: false,
					timer: 2000,
				})
				await getAllSoccerfields()
			}
		} catch (error) {
			console.error(error)
		}
	}

	return {
		users,
		usersLoading,
		usersError,
		getAllUsers,
		updateUserActive,
		updateUser,
		deleteUser,
		products,
		productsLoading,
		productsError,
		getAllProducts,
		deleteProduct,
		updateProduct,
		createProduct,
		soccerfields,
		soccerfieldsLoading,
		soccerfieldsError,
		getAllSoccerfields,
		updateSoccerfield,
		deleteSoccerfield,
		createSoccerfield,
	}
}

export default UseAxiosAdmin
