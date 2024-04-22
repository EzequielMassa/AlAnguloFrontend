import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { LuMinus, LuPlus } from 'react-icons/lu'
import { useParams } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import CardsButtons from '../../components/GeneralButtons/CardsButtons'
import Spinner from '../../components/Spinner/Spinner'
import { useAuthContext } from '../../context/AuthContext'
import { useProductsContext } from '../../context/ProductsContext'
import { useUserContext } from '../../context/UserContext'
import { formatCurrency } from '../../helpers/formatCurrency'
import { formatDate } from '../../utils/formatDate'
import './productDetail.css'

const ProductDetail = () => {
	const { user } = useAuthContext()
	const { id } = useParams()
	const { product, productLoading, productError, getProductById } =
		useProductsContext()
	const { orderLoading, postOrder } = useUserContext()
	const [productQuantity, setProductQuantity] = useState(1)

	const removeProduct = () => {
		setProductQuantity((prev) => {
			if (prev == 1) {
				return 1
			}
			return prev - 1
		})
	}

	const addProduct = () => {
		setProductQuantity((prev) => prev + 1)
	}

	const handleOrder = () => {
		const today = new Date()
		today.setHours(0, 0, 0, 0)
		const formatedDate = formatDate(today)
		const order = {
			user: user.id,
			product: id,
			quantity: productQuantity,
			orderDate: formatedDate,
		}
		postOrder(order)
		setProductQuantity(1)
	}

	useEffect(() => {
		getProductById(id)
	}, [])

	if (productError) {
		toast.error('El producto no existe')
	}

	return (
		<>
			<Container className=' product-container container-sm border rounded-4 p-4'>
				<Row className='product-row '>
					{productLoading || orderLoading ? (
						<Spinner />
					) : productError ? (
						<div className='mt-5'></div>
					) : (
						<>
							<Col xs={12} md={4} className='img-column'>
								<img src={product.image} className='w-100 h-100 img-product' />
							</Col>
							<Col
								xs={12}
								md={8}
								className='d-flex aling-items-center justify-content-between flex-column '>
								<div className='info-container d-flex aling-items-center mb-3 gap-2'>
									<h2 className='text-center product-title '>{product.name}</h2>
									<h3 className='text-center mt-2 product-description'>
										{product.description}
									</h3>
									<h3 className='text-center mt-2 '>
										Precio :{' '}
										<b className='product-price'>
											{formatCurrency(product.price)}
										</b>
									</h3>
								</div>
								{user.id && user.role === 'user' ? (
									<div className='info-actions d-flex justify-content-center gap-3 py-4'>
										<h3>Cantidad :</h3>
										<LuMinus
											className='icons-style icons-styleHover'
											onClick={removeProduct}
										/>
										<h2 className='info-product'>{productQuantity}</h2>
										<LuPlus
											className='icons-style icons-styleHover'
											onClick={addProduct}
										/>
									</div>
								) : (
									<></>
								)}
								{user.id && user.role === 'user' ? (
									<Button
										type='submit'
										className='mb-2 w-50 mx-auto reactButton'
										onClick={handleOrder}
										disabled={orderLoading}>
										<CardsButtons cardText='Agregar Al Carrito' />
									</Button>
								) : (
									<></>
								)}
							</Col>
						</>
					)}
				</Row>
			</Container>
			<Toaster richColors position='bottom-right' theme='dark' />
		</>
	)
}

export default ProductDetail
