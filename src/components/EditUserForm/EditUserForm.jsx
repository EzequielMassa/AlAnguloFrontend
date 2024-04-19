import './EditUserForm.css';
import { Form, Button, Image } from "react-bootstrap";
import { useState } from "react";
import { useAdminContext } from '../../context/AdminContext';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const EditUserForm = ({editUser, handleClose}) => {
  const { updateUser, getAllUsers } = useAdminContext();
  
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
			email: Yup.string().email("Ingresa un email valido").required("Completa este campo").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Ingrese un email válido"),
			phone: Yup.string().required("Completa este campo").matches(/^\+?\d{0,3}\s?\d{9}$/,"Ingresa un numero de telefono valido"),
      image: Yup.string().matches(/^.*\.(jpg|jpeg|png|gif|bmp)$/i,"Ingresa una URL de imagen"),
		}),
		onSubmit: (formData) => {
            console.log(formData)
            const user = {
              _id: editUser._id,
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.phone,
        image: formData.image,
            }
            updateUser(user);
            handleClose();
            formik.handleReset()
            // resetUserState();
            getAllUsers();
		},
	})

    // const [user, setUser] = useState({
    //     _id: editUser._id,
    //     name: editUser.name,
    //     lastname: editUser.lastname,
    //     email: editUser.email,
    //     phone: editUser.phone,
    //     image: editUser.image,
    //     roles: editUser.roles,
    //     active: editUser.active
    // });

    // const resetUserState = () => {
    //     setUser({
    //         _id:"",
    //         name:"",
    //         lastname:"",
    //         email:"",
    //         phone:"",
    //         image:"",
    //         roles:[{name: false}],
    //         active:true
    //     });
    // };

    // const handleChange = (e) => {
    //     console.log(user.roles[0].name)
    //     const { name, value, checked, type } = e.target;
    //     if(type==="checkbox"){
    //         console.log(checked)
    //         setUser({
    //             ...user,
    //             [name]: checked,
    //         });
    //     } else {
    //         setUser({
    //             ...user,
    //             [name]: value,
    //         });
    //     }
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     updateUser(user);
    //     handleClose();
    //     resetUserState();
    //     getAllUsers();
    // }

    return (
      <>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Nombre
            </Form.Label>
            <Form.Control
              id="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              isInvalid={formik.errors.name && formik.touched.name}
              name="name"
              placeholder="Nombre" />
          <Form.Control.Feedback type='invalid'>{formik.errors.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Apellido</Form.Label>
            <Form.Control
              type="text"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              isInvalid={formik.errors.lastname && formik.touched.lastname}
              name="lastname"
              placeholder="Apellido" />
          <Form.Control.Feedback type='invalid'>{formik.errors.lastname}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Email</Form.Label>
            <Form.Control
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              isInvalid={formik.errors.email && formik.touched.email}
              name="email"
              placeholder="Email" />
          <Form.Control.Feedback type='invalid'>{formik.errors.email}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Teléfono</Form.Label>
            <Form.Control
              type="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              isInvalid={formik.errors.phone && formik.touched.phone}
              name="phone"
              placeholder="Teléfono" />
          <Form.Control.Feedback type='invalid'>{formik.errors.phone}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Imagen</Form.Label>
            <Form.Control
              type="text"
              value={formik.values.image}
              onChange={formik.handleChange}
              isInvalid={formik.errors.image && formik.touched.image}
              name="image"
              placeholder="http://mi_imagen.com" />
              <Form.Label className="d-flex">
                <div className="my-1 py-1 mx-auto">
                  <Image
                    src={formik.values.image||"https://static.vecteezy.com/system/resources/previews/005/720/408/large_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"}
                    alt="imagen de usuario"
                    roundedCircle
                    className="editUserImg"
                  />
                </div>
              </Form.Label>
          <Form.Control.Feedback type='invalid'>{formik.errors.image}</Form.Control.Feedback>
          </Form.Group>

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