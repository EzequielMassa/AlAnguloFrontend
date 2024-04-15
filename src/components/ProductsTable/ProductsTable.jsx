import './ProductsTable.css'

import { useState } from 'react'
import { Image, Modal, Table } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import EditProductForm from '../EditProductForm/EditProductForm'

const ProductsTable = () => {
	const [editProduct, setEditProduct] = useState({})
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleEdit = (productObj) => {
		setEditProduct(productObj)
		setShow(true)
	}

	const productImagePopup = (url) => {
		return Swal.fire({
			imageUrl: url,
			imageAlt: 'Product image',
			showCloseButton: true,
			closeButtonAriaLabel: 'Cierra ésta imagen',
			showConfirmButton: false,
			timer: 8000,
		})
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
						<th
							key='CATEGORY'
							className='border border-success border-opacity-50'>
							CATEGORIA
						</th>
						<th key='PRICE' className='border border-success border-opacity-50'>
							PRECIO
						</th>
						<th key='IMAGE' className='border border-success border-opacity-50'>
							IMG
						</th>
						<th
							key='ACTIONS'
							className='border border-success border-opacity-50'>
							ACCIONES
						</th>
					</tr>
				</thead>
				<tbody>
					{productsArr.map((ProductObj) => (
						<tr key={ProductObj._id} className='fs-5'>
							<td
								key={'_id' + ProductObj._id}
								className='borderCustom text-break '>
								<p className='idCell m-0 p-0'> {ProductObj._id} </p>
							</td>
							<td
								key={'name' + ProductObj._id}
								className='cursorChange borderCustom'
								onClick={() => productImagePopup(ProductObj.image)}>
								{ProductObj.name}
							</td>
							<td
								key={'description' + ProductObj._id}
								className='cursorChange borderCustom'
								onClick={() => productImagePopup(ProductObj.image)}>
								{ProductObj.description}
							</td>
							<td
								key={'category' + ProductObj._id}
								className='cursorChange borderCustom'
								onClick={() => productImagePopup(ProductObj.image)}>
								{ProductObj.categor}
							</td>
							<td
								key={'price' + ProductObj._id}
								className='cursorChange borderCustom'
								onClick={() => productImagePopup(ProductObj.image)}>
								{ProductObj.price}
							</td>
							<td
								key={'image' + ProductObj._id}
								className='cursorChange borderCustom'
								onClick={() => productImagePopup(ProductObj.image)}>
								<div className='d-flex align-items-center justify-content-evenly'>
									<Image
										src={
											ProductObj.image ||
											'https://static.vecteezy.com/system/resources/previews/005/720/408/large_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg'
										}
										alt='imagen de productos'
										onClick={() => productImagePopup(ProductObj.image)}
										roundedCircle
										className='cursorChange userImg'
									/>
								</div>
							</td>
							<td key={'actions' + ProductObj._id} className='borderCustom'>
								<div className='d-flex justify-content-evenly'>
									{/* <Image src={ProductObj.image} alt="imagen de usuario" onClick={ ()=> productImagePopup(ProductObj.image) } roundedCircle className='cursorChange userImg d-inline-block'/> */}
									{/* <MdOutlinePhotoLibrary className='cursorChange m-1' onClick={ ()=> productImagePopup(ProductObj.image) } /> */}
									<FaRegEdit
										className='cursorChange mx-1'
										onClick={() => handleEdit(ProductObj)}
									/>
									<FaRegTrashCan
										className='cursorChange mx-1'
										onClick={() => deleteProduct(ProductObj)}
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
					<EditProductForm
						editProduct={editProduct}
						handleClose={handleClose}
					/>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default ProductsTable

//TODO Algun problema con las categorias dentro de productos que crashea tabla, fila73 RedDot, se cambio a "categor" de manera preventiva
