import React, { useState } from 'react';
import { Modal, Button, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './login.css';
function Login({ show, handleClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {

    console.log('Email:', email);
    console.log('Password:', password);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='heading'>Iniciar Sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className='body-modal'>
        <div className="contenedor">
          <Form className='form'>
            <FormGroup controlId="formBasicEmail">
              <FormLabel className='form-label'>Email</FormLabel>
              <FormControl className='form-input' type="email" required placeholder="Ingresa tu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup className='mt-3' controlId="formBasicPassword">
              <FormLabel className='form-label'>Contraseña</FormLabel>
              <FormControl className='form-input' type={showPassword ? "text" : "password"} required placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />

            </FormGroup>
            <FormGroup className='mt-3' controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Mostrar contraseña" onChange={() => setShowPassword(!showPassword)} />
            </FormGroup>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer className='justify-content-center ' >
      <div className="button-group">
        <div className="secondary-buttons">
            <Button variant='success'>No tienes cuenta? Registrate</Button>
            <Button variant="danger" onClick={handleClose}>Cancelar</Button>
        </div>
            <Button variant="primary" className='login-button' onClick={handleLogin}>Iniciar Sesión</Button>
      </div>
      
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
