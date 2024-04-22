import { useEffect } from 'react'
import {
	Card,
	Col,
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	Row,
} from 'react-bootstrap'
import { TbFilterX } from 'react-icons/tb'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import CardsButtons from '../../components/GeneralButtons/CardsButtons'
import Spinner from '../../components/Spinner/Spinner'
import { useProductsContext } from '../../context/ProductsContext'
import { formatCurrency } from '../../helpers/formatCurrency'
import './products.css'

function Products() {
	const {
		products,
		productsLoading,
		getAllProducts,
		categories,
		getAllCategories,
	} = useProductsContext()
	const [searchParams, setSearchParams] = useSearchParams({})
	const navigate = useNavigate()

	const applyFilters = () => {
		const name = searchParams.get('nombre')
		const price = searchParams.get('precio')
		const category = searchParams.get('categoria')

		let filteredFields = products

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

	const clearProductsFilter = (param) => {
		const params = new URLSearchParams()
		params.set('', param)
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
				<h1 className='text-center title py-4 '>Nuestro E-Shop</h1>
				<Navbar
					bg='light'
					expand='lg'
					className='mb-3 nav-filter p-4 border rounded-4'>
					<Navbar.Brand className='d-flex justify-content-center align-items-center mt-md-3'>
						Búsqueda de Productos
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav '>
						<Nav className=' w-100 d-flex flex-column flex-md-row justify-content-center align-items-center '>
							<Form className='form-search flex-column flex-md-row gap-4 w-100 d-flex justify-content-center align-items-center'>
								<FormControl
									type='text'
									name='name'
									placeholder='Buscar por nombre'
									className='mt-4 w-75'
									value={searchParams.get('nombre') || ''}
									onChange={handleInputChange}
								/>
								<Form.Group
									className='mb-3  filter_form_group_container w-50 '
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
									className='mb-3 filter_form_group_container w-50'
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
								<TbFilterX
									className='d-inline-block  filter_form_icon fs-1'
									onClick={clearProductsFilter}
								/>
							</Form>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
			<Container className='mt-5 '>
				{productsLoading ? (
					<Spinner />
				) : filteredProducts.length === 0 ? (
					<div className='text-center no-product'>No hay productos</div>
				) : (
					<Row className='product-row d-flex justify-content-center align-items-stretch  '>
						{filteredProducts.map((p) => (
							<Col
								xl={3}
								md={4}
								key={p._id}
								className='product-column  d-flex justify-content-center align-items-center '>
								<Card
									key={p.id}
									className='card-products my-2 d-flex flex-column align-self-stretch '>
									<div className='product_card_img_container'>
										<Card.Img
											variant='top'
											className='product_card_img'
											src={p.image}
										/>
									</div>

									<Card.Body className='text-center bg-white d-flex flex-column justify-content-between '>
										<div className='divisor-line' />
										<Card.Title className='btn-product'>{p.name}</Card.Title>
										<Card.Text className='btn-product btn-price'>
											{formatCurrency(p.price)}
										</Card.Text>
										<div className='btn-container d-flex'>
											<NavLink to={`/producto/${p._id}`}>
												<CardsButtons cardText='Ver Producto' />
											</NavLink>
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				)}
			</Container>
		</>
	)
}

export default Products
