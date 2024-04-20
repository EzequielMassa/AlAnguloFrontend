import { useEffect, useState } from 'react'
import { Dropdown, Image, Modal, Table } from 'react-bootstrap'
import './UsersTable.css'

import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { useAdminContext } from '../../context/AdminContext'
import EditUserForm from '../EditUserForm/EditUserForm'

const UsersTable = () => {
	const {
		users: usersArr,
		usersLoading,
		usersError,
		setUsersError,
		getAllUsers,
		deleteUser,
		updateUserActive,
	} = useAdminContext()
	const [editUser, setEditUser] = useState({})
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleEdit = (userObj) => {
		setEditUser(userObj)
		setShow(true)
	}

	const userImagePopup = (url) => {
		if (!url) {
			return
		}

		return Swal.fire({
			imageUrl: url,
			imageAlt: 'User image',
			showCloseButton: true,
			closeButtonAriaLabel: 'Cierra ésta imagen',
			showConfirmButton: false,
			timer: 8000,
		})
	}

	const isActiveMenu = (userObj) => {
		const der = async (e) => {
			const { name } = e.target
			userObj.active = name === 'true' ? true : false
			updateUserActive(userObj)
			setTimeout(() => {
				getAllUsers()
			}, 100)
		}

		return (
			<>
				<Dropdown>
					<Dropdown.Toggle
						className='activeDropdown'
						id='dropdown-autoclose-true'
						variant='muted'
						size='sm'>
						{userObj.active ? 'Si' : 'No'}
					</Dropdown.Toggle>
					<Dropdown.Menu className='min-width-0'>
						<Dropdown.Item name='true' onClick={der}>
							Si
						</Dropdown.Item>
						<Dropdown.Item name='false' onClick={der}>
							No
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</>
		)
	}

	useEffect(() => {
		getAllUsers()
	}, [])

	// if(usersError) {
	//   console.log(usersError)
	//   Swal.fire({
	//     title: `Error al cargar datos`,
	//     icon: "error",
	//     showConfirmButton: false,
	//     timer: 2500
	// });
	// };

	return (
		<>
			<Table
				bordered
				striped
				hover
				responsive
				size='sm'
				className='text-center align-middle'>
				<thead className=''>
					<tr className='tableTitles'>
						<th
							key='ACTIVE'
							className='border border-success border-opacity-50'>
							ACTIVO
						</th>
						<th key='NAME' className='border border-success border-opacity-50'>
							NOMBRE
						</th>
						<th
							key='LASTNAME'
							className='border border-success border-opacity-50'>
							APELLIDO
						</th>
						<th key='EMAIL' className='border border-success border-opacity-50'>
							EMAIL
						</th>
						<th key='PHONE' className='border border-success border-opacity-50'>
							TELÉFONO
						</th>
						<th key='ROLE' className='border border-success border-opacity-50'>
							ROL
						</th>
						<th
							key='ACTIONS'
							className='border border-success border-opacity-50'>
							ACCIONES
						</th>
					</tr>
				</thead>
				<tbody>
					{usersArr.map((userObj) => (
						<tr key={userObj._id} className='fs-5'>
							<td key={'active' + userObj._id} className='borderCustom'>
								<div className='d-flex align-items-center justify-content-evenly'>
									<Image
										style={
											userObj.active ? null : { filter: 'grayscale(100%)' }
										}
										src={
											userObj.image ||
											'https://static.vecteezy.com/system/resources/previews/005/720/408/large_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg'
										}
										alt='imagen de usuario'
										onClick={() => userImagePopup(userObj.image)}
										roundedCircle
										className='cursorChange userImg'
									/>
									{isActiveMenu(userObj)}
								</div>
							</td>
							<td
								key={'name' + userObj._id}
								className='cursorChange borderCustom'
								onClick={() => userImagePopup(userObj.image)}>
								{userObj.name}
							</td>
							<td
								key={'lastname' + userObj._id}
								className='cursorChange borderCustom'
								onClick={() => userImagePopup(userObj.image)}>
								{userObj.lastname}
							</td>
							<td
								key={'email' + userObj._id}
								className='cursorChange borderCustom'
								onClick={() => userImagePopup(userObj.image)}>
								{userObj.email}
							</td>
							<td
								key={'phone' + userObj._id}
								className='cursorChange borderCustom'
								onClick={() => userImagePopup(userObj.image)}>
								{userObj.phone}
							</td>
							<td
								key={'role' + userObj._id}
								className='cursorChange borderCustom'
								onClick={() => userImagePopup(userObj.image)}>
								{userObj.role.name}
							</td>
							<td key={'actions' + userObj._id} className='borderCustom'>
								<div className='d-flex justify-content-evenly'>
									<FaRegEdit
										className='cursorChange mx-1'
										onClick={() => handleEdit(userObj)}
									/>
									<FaRegTrashCan
										className='cursorChange mx-1'
										onClick={() => deleteUser(userObj)}
									/>
								</div>
							</td>
						</tr>
					))}

					{/* {usersError ?
      <tr>
        <td key={"error"} className="cursorChange borderCustom bg-warning"><h3>Error al cargar datos</h3></td>
      </tr>
       :null
      } */}
				</tbody>
			</Table>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Editar usuario</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditUserForm editUser={editUser} handleClose={handleClose} />
				</Modal.Body>
			</Modal>
		</>
	)
}

export default UsersTable
