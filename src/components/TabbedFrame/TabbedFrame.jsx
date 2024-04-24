import { useState } from 'react'
import { Button, Col, Image, Modal, Nav, Row, Tab } from 'react-bootstrap'
import { FcAddDatabase } from 'react-icons/fc'
import { useAuthContext } from '../../context/AuthContext'
import EditProductForm from '../EditProductForm/EditProductForm'
import EditSoccerfieldForm from '../EditSoccerfieldForm/EditSoccerfieldForm'
import ProductsTable from '../ProductsTable/ProductsTable'
import SoccerFieldsTable from '../SoccerFieldsTable/SoccerFieldsTable'
import UsersTable from '../UsersTable/UsersTable'
import './TabbedFrame.css'

const TabbedFrame = () => {
	const { user: loggedUser } = useAuthContext()
	const { name } = loggedUser

	const [show1, setShow1] = useState(false)
	const handleClose1 = () => setShow1(false)
	const handleEdit1 = () => {
		setShow1(true)
	}

	const [show2, setShow2] = useState(false)
	const handleClose2 = () => setShow2(false)
	const handleEdit2 = () => {
		setShow2(true)
	}

	return (
		<>
			<section className='container-md frame pt-5'>
				<Tab.Container
					id='|-tabs-example'
					defaultActiveKey='first'
					className='mainFrame'>
					<Row className='frame__row d-flex'>
						<Col
							sm={3}
							className='frame__leftBlock d-flex col-auto flex-column align-item-center'>
							<Nav
								variant='underline'
								className=' leftBlock d-flex flex-column flex-md-row justify-content-around align-item-center'>
								<Nav.Item className='justify-content-center d-flex mt-1 my-md-auto'>
									<Nav.Link eventKey='first'>Usuarios</Nav.Link>
								</Nav.Item>

								<Nav.Item className='justify-content-center d-flex my-auto'>
									<Nav.Link eventKey='second'>Productos</Nav.Link>
								</Nav.Item>

								<Nav.Item className='justify-content-center d-flex mb-1 my-md-auto'>
									<Nav.Link eventKey='third'>Canchas</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9} className='frame__rightBlock'>
							<Tab.Content className='rightBlock_1 p-1'>
								<p className='p-0 my-auto '>ADMIN</p>

								<Tab.Pane eventKey='second' className='container-fluid px-0'>
									<div className='d-flex justify-content-center'>
										<Nav.Link eventKey='second' className='mx-1'>
											<Button
												className='m-0 p-1'
												variant='outline-success'
												data-toggle='tooltip'
												data-placement='top'
												title='Agregar Producto'>
												{' '}
												<FcAddDatabase
													onClick={handleEdit1}
													className='addIcon'
												/>{' '}
											</Button>
										</Nav.Link>
									</div>
								</Tab.Pane>

								<Tab.Pane eventKey='third' className='container-fluid px-0'>
									<div className='d-flex justify-content-center'>
										<Nav.Link eventKey='third' className='mx-1'>
											<Button
												className='m-0 p-1'
												variant='outline-success'
												data-toggle='tooltip'
												data-placement='top'
												title='Agregar Cancha'>
												{' '}
												<FcAddDatabase
													onClick={handleEdit2}
													className='addIcon'
												/>{' '}
											</Button>
										</Nav.Link>
									</div>
								</Tab.Pane>

								<div className='container col-auto d-flex'>
									<Image
										src={loggedUser ? loggedUser.image : null}
										alt='imagen de admin logeado'
										roundedCircle
										fluid
										className='adminLoggedImg my-auto'
									/>
									<div className='d-flex align-items-center'>
										<p className='ps-1 d-none d-sm-block my-0'>
											{loggedUser ? `${name}` : 'JohnDoe'}
										</p>
									</div>
								</div>
							</Tab.Content>

							<Tab.Content className='rightBlock_2'>
								<Tab.Pane eventKey='first'>
									<div className='container-md'>
										<UsersTable />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<div className='container-md'>
										<ProductsTable />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									<div className='container-md'>
										<SoccerFieldsTable />
									</div>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>

				<Modal show={show1} onHide={handleClose1}>
					<Modal.Header closeButton>
						<Modal.Title>Producto nuevo</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<EditProductForm editProduct={false} handleClose={handleClose1} />
					</Modal.Body>
				</Modal>

				<Modal show={show2} onHide={handleClose2}>
					<Modal.Header closeButton>
						<Modal.Title>Cancha nueva</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<EditSoccerfieldForm
							editSoccerfield={false}
							handleClose={handleClose2}
						/>
					</Modal.Body>
				</Modal>
			</section>
		</>
	)
}

export default TabbedFrame
