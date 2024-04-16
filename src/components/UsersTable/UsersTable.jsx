import { useContext, useState } from 'react'
import { Dropdown, Image, Modal, Table } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { UsersProvider } from '../../context/UsersContext'
import EditUserForm from '../EditUserForm/EditUserForm'
import './UsersTable.css'

const UsersTable = () => {
	const { usersArr, getUsers, updateUserActive, deleteUser } =
		useContext(UsersProvider)
	const [editUser, setEditUser] = useState({})
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleEdit = (userObj) => {
		setEditUser(userObj)
		setShow(true)
	}

	const userImagePopup = (url) => {
		return Swal.fire({
			imageUrl: url,
			imageAlt: 'User image',
			showCloseButton: true,
			closeButtonAriaLabel: 'Cierra ésta imagen',
			showConfirmButton: false,
			timer: 8000,
		})
	}
	console.log(editUser)

	const handleChange = (e) => {
		e.preventDefault()
		const { name } = e.target
		console.log(name)
		setEditUser({
			...editUser,
			['active']: name === 'true' ? true : false,
		})
		// updateUserActive(editUser);
		// getUsers();
	}

	const isActiveMenu = (userObj) => {
		const der = (e) => {
			setEditUser(userObj)
			console.log(editUser)
			handleChange(e)
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
								{userObj.roles[0].name}
							</td>
							<td key={'actions' + userObj._id} className='borderCustom'>
								<div className='d-flex justify-content-evenly'>
									{/* <Image src={userObj.image} alt="imagen de usuario" onClick={ ()=> userImagePopup(userObj.image) } roundedCircle className='cursorChange userImg d-inline-block'/> */}
									{/* <MdOutlinePhotoLibrary className='cursorChange m-1' onClick={ ()=> userImagePopup(userObj.image) } /> */}
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

//TODO Terminar/corregir conexion del dropdown userObj.active con backend
