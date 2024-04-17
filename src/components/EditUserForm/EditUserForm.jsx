import './EditUserForm.css';
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useAdminContext } from '../../context/AdminContext';

const EditUserForm = ({editUser, handleClose}) => {
    const { updateUser, getAllUsers } = useAdminContext();
    const [user, setUser] = useState({
        _id: editUser._id,
        name: editUser.name,
        lastname: editUser.lastname,
        email: editUser.email,
        phone: editUser.phone,
        image: editUser.image,
        roles: editUser.roles,
        active: editUser.active
    });

    const resetUserState = () => {
        setUser({
            _id:"",
            name:"",
            lastname:"",
            email:"",
            phone:"",
            image:"",
            roles:[{name: false}],
            active:true
        });
    };

    const handleChange = (e) => {
        console.log(user.roles[0].name)
        const { name, value, checked, type } = e.target;
        if(type==="checkbox"){
            console.log(checked)
            setUser({
                ...user,
                [name]: checked,
            });
        } else {
            setUser({
                ...user,
                [name]: value,
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(user);
        handleClose();
        resetUserState();
        getAllUsers();
    }

    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Nombre
            </Form.Label>
            <Form.Control required
              type="text"
              value={user.name}
              onChange={handleChange}
              name="name"
              placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Apellido</Form.Label>
            <Form.Control required
              type="text"
              value={user.lastname}
              onChange={handleChange}
              name="lastname"
              placeholder="Apellido" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Email</Form.Label>
            <Form.Control required
              type="email"
              value={user.email}
              onChange={handleChange}
              name="email"
              placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Teléfono</Form.Label>
            <Form.Control
              type="phone"
              value={user.phone}
              onChange={handleChange}
              name="phone"
              placeholder="Teléfono" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Imagen</Form.Label>
            <Form.Control
              type="text"
              value={user.image}
              onChange={handleChange}
              name="image"
              placeholder="http://mi_imagen.com" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Rol</Form.Label>
            <Form.Check
              type="checkbox"
              label="es admin?"
            //   value="roles"
              defaultChecked={user.roles[0].name}
              onChange={handleChange}
              name="roles" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Activo</Form.Label>
            <Form.Check
              type="checkbox"
              label="activo?"
            //   value={user.active}
              defaultChecked={user.active}
              onChange={handleChange}
              name="active"/>
          </Form.Group>
          <Button variant="warning" type="submit" className='d-flex mx-auto'>Guardar cambios</Button> 
        </Form>
      </>
    )
}
export default EditUserForm;