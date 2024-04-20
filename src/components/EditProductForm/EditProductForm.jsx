import { useFormik } from 'formik'
import { useEffect } from 'react'
import { Button, Form, Image } from 'react-bootstrap'
import * as Yup from 'yup'
import { useAdminContext } from '../../context/AdminContext'
import UseAxiosProducts from '../../hooks/useAxiosProducts'
import './EditProductForm.css'

const EditProductForm = ({ editProduct, handleClose }) => {
	const { categories, getAllCategories } = UseAxiosProducts()
	const { updateProduct, createProduct } = useAdminContext()

	const formik = useFormik({
		initialValues: {
			_id: editProduct ? editProduct._id : null,
			name: editProduct ? editProduct.name : '',
			description: editProduct ? editProduct.description : '',
			category: editProduct ? editProduct.category.name : '',
			price: editProduct ? editProduct.price : 1,
			image: editProduct ? editProduct.image : '',
		},
		validationSchema: Yup.object({
			name: Yup.string('Ingresa un nombre valido')
				.required('Completa este campo')
				.min(3, 'Minimo 3 letras')
				.max(150, 'Maximo 150 letras'),
			description: Yup.string('Ingrese una descripcion valida')
				.required('Completa este campo')
				.min(3, 'Minimo 3 letras')
				.max(800, 'Maximo 800 letras'),
			price: Yup.number('Ingrese solo valores numericos')
				.required('Completa este campo')
				.min(1, 'El precio minimo es de 1'),
			image: Yup.string().matches(
				/^.*\.(jpg|jpeg|png|gif|bmp)$/i,
				'Ingresa una url de imagen valida'
			),
		}),
		onSubmit: (formData) => {
			if (formData.image === '') {
				formData.image = 'https://i.imgur.com/I03y2Ec.png'
			}
			if (formData.category === '') {
				formData.category = categories[0].name
			}
			editProduct ? updateProduct(formData) : createProduct(formData)
			handleClose()
		},
	})

	useEffect(() => {
		getAllCategories()
	}, [])

	return (
		<>
			<Form onSubmit={formik.handleSubmit}>
				<Form.Group className='mb-2'>
					<Form.Label className='mb-0'>Nombre</Form.Label>
					<Form.Control
						type='text'
						value={formik.values.name}
						onChange={formik.handleChange}
						name='name'
						isInvalid={formik.errors.name && formik.touched.name}
						placeholder='Nombre'
					/>
					<Form.Control.Feedback type='invalid'>
						{formik.errors.name}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className='mb-2'>
					<Form.Label className='mb-0'>Descripción</Form.Label>
					<Form.Control
						type='text'
						value={formik.values.description}
						onChange={formik.handleChange}
						name='description'
						placeholder='Descripción'
						isInvalid={formik.errors.description && formik.touched.description}
					/>
					<Form.Control.Feedback type='invalid'>
						{formik.errors.description}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className='mb-2'>
					<Form.Label className='mb-0'>Categoria</Form.Label>
					<Form.Select
						aria-label='seleccionar categoria'
						className='d-flex flex-column'
						value={formik.values.category}
						name='category'
						onChange={formik.handleChange}>
						{categories ? (
							categories.map((cat) => (
								<option key={cat._id} value={cat.name}>
									{cat.name}
								</option>
							))
						) : (
							<option value=''>Loading...</option>
						)}
					</Form.Select>
				</Form.Group>
				<Form.Group className='mb-2'>
					<Form.Label className='mb-0'>Precio</Form.Label>
					<Form.Control
						type='number'
						value={formik.values.price}
						onChange={formik.handleChange}
						name='price'
						placeholder='Precio'
						isInvalid={formik.errors.price && formik.touched.price}
					/>
					<Form.Control.Feedback type='invalid'>
						{formik.errors.price}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className='mb-2'>
					<Form.Label className='mb-0'>Imagen</Form.Label>
					<Form.Control
						type='text'
						value={formik.values.image}
						onChange={formik.handleChange}
						name='image'
						placeholder='http://Imagen_de_producto.jpg'
						isInvalid={formik.errors.image && formik.touched.image}
					/>
					<Form.Label className='d-flex'>
						<div className='my-1 py-1 mx-auto'>
							<Image
								src={
									editProduct.image ||
									'https://static.vecteezy.com/system/resources/previews/005/720/408/large_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg'
								}
								alt='imagen del producto'
								roundedCircle
								className='editProductImg'
							/>
						</div>
					</Form.Label>
					<Form.Control.Feedback type='invalid'>
						{formik.errors.image}
					</Form.Control.Feedback>
				</Form.Group>

				<div className=''>
					{editProduct ? (
						<Button variant='warning' type='submit' className='d-flex mx-auto'>
							Guardar cambios
						</Button>
					) : (
						<Button variant='warning' type='submit' className='d-flex mx-auto'>
							Agregar producto
						</Button>
					)}
				</div>
			</Form>
		</>
	)
}

export default EditProductForm
