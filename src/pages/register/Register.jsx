import {Button,Form,Container} from 'react-bootstrap';
import './register.css'
function BasicExample() {
  return (
    <>
      <Container className='justify-content-center d-flex mt-5'>
      <Form className='form-register'>
    <h1 className='title'>Formulario de Registro</h1>

      <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
        <Form.Label>Direccion email</Form.Label>
        <Form.Control required type="email" minLength={5} maxLength={40} placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu email con nadie
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Contraseña</Form.Label>
        <Form.Control required type="password" minLength={8} maxLength={20} placeholder="Ingresa una contraseña de 8-20 caracteres" />
        <Form.Label>Telefono celular</Form.Label>
        <Form.Control required type="tel" minLength={9} maxLength={10} placeholder="Celular, ej: 3816646368" />
        <Form.Label>Nombre</Form.Label>
        <Form.Control required minLength={4} maxLength={20} type="text" placeholder="Nombre" />
        <Form.Label>Apellido</Form.Label>
        <Form.Control required minLength={4} maxLength={20}  type="text" placeholder="Apellido" />
        <Form.Label>Imagen</Form.Label>
        <Form.Control required type="url" placeholder="Agrega una url de tu" />

      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Container>
    </>
  );
}

export default BasicExample;