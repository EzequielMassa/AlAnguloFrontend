import {Button,Form,Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import './register.css'
function Register() {

  return (
    <>
      <Container className='justify-content-center d-flex mt-5'>
      <Form className='form-register'>
    <h1 className='title'>Formulario de Registro</h1>

      <Form.Group className="mb-2 form-group" controlId="formBasicEmail">
        <Form.Label className='form-label'>Direccion email</Form.Label>
        <Form.Control required type="email" minLength={5} maxLength={40} placeholder="Ingresa un email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu email con nadie
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <div className="box">
        <Form.Label className='form-label' >Contraseña</Form.Label>
        <Form.Control required type="password" minLength={8} maxLength={20} placeholder="Ingresa una contraseña de 8-20 caracteres" />
        </div>
        <div className="box mt-3">
        <Form.Label className='form-label'>Telefono celular</Form.Label>
        <Form.Control required type="tel" minLength={9} maxLength={10} placeholder="Celular, ej: 3816646368" />
        </div>
       <div className="box mt-3" >
       <Form.Label className='form-label'>Nombre</Form.Label>
        <Form.Control required minLength={4} maxLength={20} type="text" placeholder="Nombre" />
       </div>
        <div className="box mt-3">
        <Form.Label className='form-label'>Apellido</Form.Label>
        <Form.Control required minLength={4} maxLength={20}  type="text" placeholder="Apellido" />
        </div>
        <div className="box mt-3">
        <Form.Label className='form-label'>Imagen</Form.Label>
        <Form.Control required type="url" placeholder="Agrega una url de tu imagen" />
        </div>

      </Form.Group>
     
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
      <div className="box-link">
      <NavLink to={'../home/Home.jsx'} className={'redirect-link'}>Ya tienes una cuenta? Ingresa</NavLink>
      </div>
    </Form>
      </Container>
    </>
  );
}

export default Register;