import { useEffect, useState } from 'react'
import { Modal, Table } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { useAdminContext } from '../../context/AdminContext'
import EditSoccerfieldForm from '../EditSoccerfieldForm/EditSoccerfieldForm'

const SoccerFieldsTable = () => {
	const {
		soccerfields: soccerfieldsArr,
		getAllSoccerfields,
		deleteSoccerfield,
	} = useAdminContext()
	const [editSoccerfield, setEditSoccerfield] = useState({})
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleEdit = (soccerfieldObj) => {
		setEditSoccerfield(soccerfieldObj)
		setShow(true)
	}

	const soccerfieldImagePopup = (url) => {
		return Swal.fire({
			imageUrl: url,
			imageAlt: 'Soccerfield image',
			showCloseButton: true,
			closeButtonAriaLabel: 'Cierra ésta imagen',
			showConfirmButton: false,
			timer: 8000,
		})
	}

	useEffect(() => {
		getAllSoccerfields()
	}, [])

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
						<th key='ID' className='border border-success border-opacity-50'>
							ID
						</th>
						<th key='NAME' className='border border-success border-opacity-50'>
							NOMBRE
						</th>
						<th
							key='DESCRIPTION'
							className='border border-success border-opacity-50'>
							DESCRIPCIÓN
						</th>
						<th key='PRICE' className='border border-success border-opacity-50'>
							PRECIO
						</th>
						<th key='SIZE' className='border border-success border-opacity-50'>
							TAMAÑO
						</th>
						<th key='GRASS' className='border border-success border-opacity-50'>
							PASTO
						</th>
						<th
							key='ACTIONS'
							className='border border-success border-opacity-50'>
							ACCIONES
						</th>
					</tr>
				</thead>
				<tbody>
					{soccerfieldsArr.map((soccerfieldObj) => (
						<tr key={soccerfieldObj._id} className='fs-5'>
							<td
								key={'_id' + soccerfieldObj._id}
								className='borderCustom text-break '
								onClick={() => soccerfieldImagePopup(soccerfieldObj.imgUrl)}>
								<p className='idCell m-0 p-0'> {soccerfieldObj._id} </p>
							</td>
							<td
								key={'name' + soccerfieldObj._id}
								className='cursorChange borderCustom'
								onClick={() => soccerfieldImagePopup(soccerfieldObj.imgUrl)}>
								{soccerfieldObj.name}
							</td>
							<td
								key={'description' + soccerfieldObj._id}
								className='cursorChange borderCustom'
								onClick={() => soccerfieldImagePopup(soccerfieldObj.imgUrl)}>
								{soccerfieldObj.description}
							</td>
							<td
								key={'price' + soccerfieldObj._id}
								className='cursorChange borderCustom'
								onClick={() => soccerfieldImagePopup(soccerfieldObj.imgUrl)}>
								$ {soccerfieldObj.price}
							</td>
							<td
								key={'size' + soccerfieldObj._id}
								className='cursorChange borderCustom'
								onClick={() => soccerfieldImagePopup(soccerfieldObj.imgUrl)}>
								{soccerfieldObj.size}
							</td>
							<td
								key={'grass' + soccerfieldObj._id}
								className='cursorChange borderCustom'
								onClick={() => soccerfieldImagePopup(soccerfieldObj.imgUrl)}>
								{soccerfieldObj.grass}
							</td>

							<td key={'actions' + soccerfieldObj._id} className='borderCustom'>
								<div className='d-flex justify-content-evenly'>
									<FaRegEdit
										className='cursorChange mx-1'
										onClick={() => handleEdit(soccerfieldObj)}
									/>
									<FaRegTrashCan
										className='cursorChange mx-1'
										onClick={() => deleteSoccerfield(soccerfieldObj)}
									/>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Editar cancha</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditSoccerfieldForm
						editSoccerfield={editSoccerfield}
						handleClose={handleClose}
					/>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default SoccerFieldsTable
