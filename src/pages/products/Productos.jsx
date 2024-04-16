import React, { useEffect } from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	Row,
} from 'react-bootstrap'
import { TiDelete } from 'react-icons/ti'
import {
	NavLink,
	ScrollRestoration,
	useNavigate,
	useSearchParams,
} from 'react-router-dom'
import { useProductsContext } from '../../context/ProductsContext'
import { formatCurrency } from '../../helpers/formatCurrency'
import './filter.css'
import './products.css'
function Products() {
	const { products, getAllProducts, categories, getAllCategories } =
		useProductsContext()
	const [searchParams, setSearchParams] = useSearchParams({})
	const navigate = useNavigate()

	const applyFilters = () => {
		const name = searchParams.get('nombre')
		const price = searchParams.get('precio')
		const category = searchParams.get('categoria')

		let filteredFields = products
		console.log(filteredFields)

		if (name) {
			filteredFields = filteredFields.filter((field) =>
				field.name.toLowerCase().includes(name.toLowerCase())
			)
		}

		if (price) {
			if (price === 'menor') {
				filteredFields = filteredFields.sort((a, b) => a.price - b.price)
			} else if (price === 'mayor') {
				filteredFields = filteredFields.sort((a, b) => b.price - a.price)
			}
		}

		if (category) {
			filteredFields = filteredFields.filter(
				(field) => field.category.name.toLowerCase() === category
			)
		}

		return filteredFields
	}

	const filteredProducts = applyFilters()

	const setFilters = (name, price, category) => {
		const params = new URLSearchParams()

		if (name) {
			params.set('nombre', name)
		}

		if (price) {
			params.set('precio', price)
		}

		if (category) {
			params.set('categoria', category)
		}

		setSearchParams(params)
	}

	const clearProductsFilter = () => {
		navigate('/productos')
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFilters(
			name === 'name' ? value : searchParams.get('nombre'),
			name === 'price' ? value : searchParams.get('precio'),
			name === 'category' ? value : searchParams.get('categoria')
		)
	}

	useEffect(() => {
		getAllProducts()
		getAllCategories()
	}, [])

	return (
		<>
			<Container className='mt-5 pt-5 '>
				<Navbar bg='light' expand='lg' className='mb-3 nav-filter '>
					<Navbar.Brand>Búsqueda de Productos</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className=' w-100 d-flex flex-column flex-md-row justify-content-center align-items-center'>
							<Form className='form-search flex-column flex-md-row gap-2 w-100 d-flex justify-content-center align-items-center'>
								<FormControl
									type='text'
									name='name'
									placeholder='Buscar por nombre'
									className='mr-sm-2 nav-search'
									value={searchParams.get('nombre') || ''}
									onChange={handleInputChange}
								/>
								<Form.Group
									className='mb-3  filter_form_group_container'
									controlId='category'>
									<Form.Label>Categoria</Form.Label>
									<Form.Select
										aria-label='category'
										name='category'
										onChange={handleInputChange}
										value={searchParams.get('categoria') || ''}>
										<option value=''>Todos</option>
										{categories ? (
											categories.map((category) => (
												<option
													key={category._id}
													value={category.name.toLowerCase()}>
													{category.name}
												</option>
											))
										) : (
											<></>
										)}
									</Form.Select>
								</Form.Group>
								<Form.Group
									className='mb-3 filter_form_group_container '
									controlId='price'>
									<Form.Label>Precio</Form.Label>
									<Form.Select
										aria-label='price'
										name='price'
										onChange={handleInputChange}
										value={searchParams.get('precio') || ''}>
										<option hidden>Todos</option>
										<option value='menor'>Menor precio</option>
										<option value='mayor'>Mayor precio</option>
									</Form.Select>
								</Form.Group>
								<TiDelete
									className='d-inline-block  filter_form_icon'
									onClick={clearProductsFilter}
								/>
							</Form>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
			<Container className='mt-5'>
				{filteredProducts.length === 0 ? (
					<div className='text-center no-product'>No hay productos</div>
				) : (
					<Row className=' product-row  '>
						{filteredProducts.map((p) => (
							<Col xl={3} md={4} key={p._id} className='product-column '>
								<Card
									key={p.id}
									className='card-products my-2 d-flex flex-column  '>
									<Card.Img variant='top' className='camiseta' src={p.image} />

									<Card.Body className='text-center bg-white'>
										<div className='divisor-line' />
										<Card.Title className='btn-product'>{p.name}</Card.Title>
										<Card.Text className='btn-product btn-price'>
											{formatCurrency(p.price)}
										</Card.Text>
										<div className='btn-container d-flex'>
											<NavLink to='/ProductDetail'>
												<Button className='btn-product btn-success'>
													Ver producto
												</Button>
											</NavLink>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				)}
			</Container>
			<ScrollRestoration />
		</>
	)
}

export default Products
