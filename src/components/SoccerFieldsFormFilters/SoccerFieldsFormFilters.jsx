import Form from 'react-bootstrap/Form'
import { TbFilterX } from 'react-icons/tb'
import './SoccerFieldsFormFilters.css'
function SoccerFieldsFomFilters({
	searchParams,
	handleInputChange,
	clearSoccerFieldsFilter,
}) {
	return (
		<Form className='d-flex flex-column flex-md-row justify-content-center align-items-center  gap-2 bg-light py-4  border rounded-4'>
			<Form.Group className='mb-3 filter_form_group_container' controlId='name'>
				<Form.Label>Nombre de la cancha</Form.Label>
				<Form.Control
					type='text'
					placeholder='Nombre de la cancha'
					name='name'
					onChange={handleInputChange}
					value={searchParams.get('name') || ''}
				/>
			</Form.Group>
			<Form.Group
				className='mb-3 filter_form_group_container '
				controlId='name'>
				<Form.Label>Precio</Form.Label>
				<Form.Select
					aria-label='price'
					name='price'
					onChange={handleInputChange}
					value={searchParams.get('price') || ''}>
					<option hidden>Todos</option>
					<option value='menor'>Menor precio</option>
					<option value='mayor'>Mayor precio</option>
				</Form.Select>
			</Form.Group>
			<Form.Group
				className='mb-3  filter_form_group_container'
				controlId='grass'>
				<Form.Label>Pasto</Form.Label>
				<Form.Select
					aria-label='grass'
					name='grass'
					onChange={handleInputChange}
					value={searchParams.get('grass') || ''}>
					<option value=''>Todos</option>
					<option value='natural'>Natural</option>
					<option value='sintetico'>Sintetico</option>
				</Form.Select>
			</Form.Group>
			<Form.Group className='mb-3 filter_form_group_container' controlId='size'>
				<Form.Label>Tamaño</Form.Label>
				<Form.Select
					aria-label='size'
					name='size'
					onChange={handleInputChange}
					value={searchParams.get('size') || ''}>
					<option value=''>Todos</option>
					<option value='5'>5</option>
					<option value='11'>11</option>
				</Form.Select>
			</Form.Group>

			<TbFilterX
				className='d-inline-block filter_form_icon'
				onClick={clearSoccerFieldsFilter}
			/>
		</Form>
	)
}
export default SoccerFieldsFomFilters
