import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { toast } from 'sonner'
import { useUserContext } from '../../context/UserContext'
import CreditCard from '../CreditCard/CreditCard'

export const CheckOutModal = (props) => {
	const { user, onHide } = props
	const { clearUserCart } = useUserContext()
	const handleCheckout = () => {
		toast.success('Pago realizado correctamente')
		setTimeout(() => {
			clearUserCart(user.id)
			props.onHide()
		}, 1000)
	}

	const handleCvvChange = (cvv) => {
		if (cvv.length === 3) {
			handleCheckout()
		} else {
			return
		}
	}

	return (
		<>
			<Modal
				{...props}
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Header closeButton>
					<Modal.Title className='text-center w-100'>
						Confirmar Pago
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='d-flex flex-column  justify-content-center align-items-center p-0 p-md-1'>
					<CreditCard user={user} onCvvChange={handleCvvChange} />
					<h5>Ingrese cvv</h5>
				</Modal.Body>
				<Modal.Footer className='d-flex justify-content-center align-items-center '>
					<Button variant='danger' onClick={onHide}>
						Cancelar
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
