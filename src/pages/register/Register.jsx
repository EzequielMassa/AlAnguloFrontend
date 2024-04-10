import { Button, Form, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./register.css";
import logo from '../../assets/images/logo_AlAngulo.png'

function Register() {

  return (
    <>
      <Container className=" justify-content-center d-flex mt-5 contain">
        
        <div className="detail-container">
          <img src={logo} className="w-50 d-none d-md-block" />
        </div>

        <Form className="form-register ">
          <h1 className="title">Formulario de Registro</h1>

          <Form.Group className="mb-3 form-group">
            <Form.Label className="form-label">Direccion email</Form.Label>
            <Form.Control
              required
              type="email"
              id="email"
              minLength={5}
              maxLength={40}
              placeholder="Ingresa un email"
              
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tu email con nadie
            </Form.Text>
          

          
            <div className="box">
              <Form.Label className="form-label">Contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                id="password"
                minLength={8}
                maxLength={20}
                placeholder="Ingresa una contraseña de 8-20 caracteres"
              />
            </div>
            <div className="box mt-3">
              <Form.Label className="form-label">Telefono celular</Form.Label>
              <Form.Control
                required
                type="tel"
                minLength={9}
                id="phone"
                maxLength={10}
                placeholder="Celular, ej: 3816646368"
              />
            </div>
            <div className="box mt-3">
              <Form.Label className="form-label">Nombre</Form.Label>
              <Form.Control
                required
                minLength={4}
                maxLength={20}
                id="name"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="box mt-3">
              <Form.Label className="form-label">Apellido</Form.Label>
              <Form.Control
                required
                minLength={4}
                maxLength={20}
                id="lastname"
                type="text"
                placeholder="Apellido"
              />
            </div>
            <div className="box mt-3">
              <Form.Label className="form-label">Imagen</Form.Label>
              <Form.Control
                required
                type="url"
                id="image"
                placeholder="Agrega una url de tu imagen"
              />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrarse
          </Button>
          <div className="box-link">
            <NavLink  className={"redirect-link"} to={'/'}>
              Ya tienes una cuenta? Ingresa
            </NavLink>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Register;
