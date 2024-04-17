import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import { Toaster } from 'sonner'
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
	const { order, orderLoading, orderError, postOrder } = useUserContext()
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

	return (
		<>
			<Container className=' product-container container-sm border rounded-4 '>
				<Row className='product-row border rounded-4'>
					{productLoading || orderLoading ? (
						<Spinner />
					) : (
						<>
							<Col xs={12} lg={4} className='img-column'>
								<img src={product.image} className='w-100 h-100 img-product' />
							</Col>
							<Col
								xs={12}
								lg={4}
								className='d-flex aling-items-center justify-content-center'>
								<div className='info-container d-flex aling-items-center mb-3 gap-2'>
									<h2 className='text-center titl '>{product.name}</h2>
									<h3 className='text-center mt-2 subtitle'>
										{product.description}
									</h3>
									<h3 className='text-center mt-2 subtitle'>
										{formatCurrency(product.price)}
									</h3>
								</div>
							</Col>

							<Col
								xs={12}
								lg={4}
								className='d-flex aling-items-center justify-content-center   py-md-0'>
								<div className='info-actions d-flex justify-content-center gap-3 py-4'>
									<Button
										className='bg-danger outline border-0'
										onClick={removeProduct}>
										<IoRemoveCircleOutline className='icon-cart' />
									</Button>
									<h2 className='info-product'>{productQuantity}</h2>
									<Button
										className='bg-success outline border-0'
										onClick={addProduct}>
										<IoAddCircleOutline className='icon-cart' />
									</Button>
								</div>
							</Col>
						</>
					)}

					<Button
						type='submit'
						className='btn-pay mb-2'
						onClick={handleOrder}
						disabled={orderLoading}>
						<span className='text-pay'>Agregar al carrito</span>
					</Button>
				</Row>
			</Container>
			<Toaster richColors position='bottom-right' theme='dark' />
		</>
	)
}

export default ProductDetail
