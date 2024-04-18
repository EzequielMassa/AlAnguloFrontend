import './EditUserForm.css';
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useAdminContext } from '../../context/AdminContext';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const EditUserForm = ({editUser, handleClose}) => {


    const formik = useFormik({
		initialValues: {
			name: editUser.name,
			lastname: editUser.lastname,
			email: editUser.email,
			phone: editUser.phone,
			image: editUser.image,
		},
		validationSchema: Yup.object({
			name: Yup.string("Ingresa un nombre valido").required("Completa este campo").min(3,"Minimo 3 letras").max(150,"Maximo 150 letras"),
			lastname: Yup.string("Ingresa un apellido valido").required("Completa este campo").min(3,"Minimo 3 letras").max(150,"Maximo 150 letras"),
			email: Yup.string().email("Ingresa un email valido").required("Completa este campo"),
			phone: Yup.string().required("Completa este campo").matches(/^\+?\d{0,3}\s?\d{9}$/,"Ingresa un numero de telefono valido"),
            image: Yup.string().required("Completa este campo").matches(/^.*\.(jpg|jpeg|png|gif|bmp)$/i,"Ingresa una URL de imagen"),
		}),
		onSubmit: (formData) => {
            console.log(formData)
			// register(formData)
			// formik.handleReset()
			// navigate('/')
		},
	})



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
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Nombre
            </Form.Label>
            <Form.Control
              type="text"
              value={user.name}
              onChange={formik.handleChange}
              isInvalid={formik.errors.name && formik.touched.name}
              name="name"
              placeholder="Nombre" />
          </Form.Group>
          <Form.Control.Feedback type='invalid'>{formik.errors.name}</Form.Control.Feedback>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Apellido</Form.Label>
            <Form.Control
              type="text"
              value={user.lastname}
              onChange={formik.handleChange}
              isInvalid={formik.errors.lastname && formik.touched.lastname}
              name="lastname"
              placeholder="Apellido" />
          </Form.Group>
          <Form.Control.Feedback type='invalid'>{formik.errors.lastname}</Form.Control.Feedback>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Email</Form.Label>
            <Form.Control
              type="email"
              value={user.email}
              onChange={formik.handleChange}
              isInvalid={formik.errors.email && formik.touched.email}
              name="email"
              placeholder="Email" />
          </Form.Group>
          <Form.Control.Feedback type='invalid'>{formik.errors.email}</Form.Control.Feedback>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Teléfono</Form.Label>
            <Form.Control
              type="phone"
              value={user.phone}
              onChange={formik.handleChange}
              isInvalid={formik.errors.phone && formik.touched.phone}
              name="phone"
              placeholder="Teléfono" />
          </Form.Group>
          <Form.Control.Feedback type='invalid'>{formik.errors.phone}</Form.Control.Feedback>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Imagen</Form.Label>
            <Form.Control
              type="text"
              value={user.image}
              onChange={formik.handleChange}
              isInvalid={formik.errors.image && formik.touched.image}
              name="image"
              placeholder="http://mi_imagen.com" />
          </Form.Group>
          <Form.Control.Feedback type='invalid'>{formik.errors.image}</Form.Control.Feedback>

          {/* <Form.Group className="mb-2">
            <Form.Label className="mb-0">Rol</Form.Label>
            <Form.Check
              type="checkbox"
              label="es admin?"
            //   value="roles"
              defaultChecked={user.roles[0].name}
              onChange={handleChange}
              name="roles" />
          </Form.Group> */}
          {/* <Form.Group className="mb-2">
            <Form.Label className="mb-0">Activo</Form.Label>
            <Form.Check
              type="checkbox"
              label="activo?"
            //   value={user.active}
              defaultChecked={user.active}
              onChange={handleChange}
              name="active"/>
          </Form.Group> */}

          <Button variant="warning" type="submit" className='d-flex mx-auto'>Guardar cambios</Button> 
        </Form>
      </>
    )
}
export default EditUserForm;