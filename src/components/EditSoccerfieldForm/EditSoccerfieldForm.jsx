import { useFormik } from 'formik'
import { Button, Form } from 'react-bootstrap'
import * as Yup from 'yup'
import { useAdminContext } from '../../context/AdminContext'

const EditSoccerfieldForm = ({ editSoccerfield, handleClose }) => {
	const { updateSoccerfield, createSoccerfield } = useAdminContext()

	const formik = useFormik({
		initialValues: {
			_id: editSoccerfield ? editSoccerfield._id : null,
			name: editSoccerfield ? editSoccerfield.name : '',
			description: editSoccerfield ? editSoccerfield.description : '',
			price: editSoccerfield ? editSoccerfield.price : 1,
			size: editSoccerfield ? editSoccerfield.size : 5,
			grass: editSoccerfield ? editSoccerfield.grass : 'sintetico',
			imgUrl: editSoccerfield ? editSoccerfield.imgUrl : '',
		},
		validationSchema: Yup.object({
			name: Yup.string('Ingresa un nombre valido')
				.required('Completa este campo')
				.min(3, 'Minimo 3 letras')
				.max(100, 'Maximo 100 letras'),
			description: Yup.string('Ingrese una descripcion valida')
				.required('Completa este campo')
				.min(10, 'Minimo 10 letras')
				.max(500, 'Maximo 500 letras'),
			price: Yup.number('Ingrese solo valores numericos')
				.required('Completa este campo')
				.min(1, 'El precio minimo es de 1'),
			imgUrl: Yup.string().matches(
				/^.*\.(jpg|jpeg|png|gif|bmp)$/i,
				'Ingresa una url de imagen valida'
			),
		}),
		onSubmit: (formData) => {
			if (formData.imgUrl === '') {
				formData.imgUrl =
					'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg'
			}
			editSoccerfield
				? updateSoccerfield(formData)
				: createSoccerfield(formData)
			handleClose()
		},
	})

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
						placeholder='Nombre'
						isInvalid={formik.errors.name && formik.touched.name}
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
					<Form.Label className='mb-0'>Tamaño</Form.Label>
					<Form.Select
						aria-label='seleccionar tamaño cancha'
						className='d-flex flex-column'
						value={formik.values.size}
						name='size'
						onChange={formik.handleChange}>
						<option value='5'>5</option>
						<option value='11'>11</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className='mb-2'>
					<Form.Label className='mb-0'>Pasto</Form.Label>
					<Form.Select
						aria-label='seleccionar tamaño cancha'
						className='d-flex flex-column'
						value={formik.values.grass}
						name='grass'
						onChange={formik.handleChange}>
						<option value='sintetico'>sintetico</option>
						<option value='natural'>natural</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className='mb-2'>
					<Form.Label className='mb-0'>Imagen</Form.Label>
					<Form.Control
						type='text'
						value={formik.values.imgUrl}
						onChange={formik.handleChange}
						name='imgUrl'
						placeholder='http://Imagen_de_cancha.jpg'
						isInvalid={formik.errors.imgUrl && formik.touched.imgUrl}
					/>
					<Form.Control.Feedback type='invalid'>
						{formik.errors.imgUrl}
					</Form.Control.Feedback>
				</Form.Group>

				<div className=''>
					{editSoccerfield ? (
						<Button variant='warning' type='submit' className='d-flex mx-auto'>
							Guardar cambios
						</Button>
					) : (
						<Button variant='warning' type='submit' className='d-flex mx-auto'>
							Agregar cancha
						</Button>
					)}
				</div>
			</Form>
		</>
	)
}

export default EditSoccerfieldForm
