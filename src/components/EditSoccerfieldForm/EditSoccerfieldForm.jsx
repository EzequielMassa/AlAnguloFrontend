import './EditSoccerfieldForm.css';

import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useAdminContext } from '../../context/AdminContext';


const EditSoccerfieldForm = ({editSoccerfield, handleClose}) => {
    const {  getAllSoccerfields, updateSoccerfield, createSoccerfield } = useAdminContext();
    const [soccerfield, setSoccerfield] = useState({
        _id: editSoccerfield ?editSoccerfield._id :null,
        name: editSoccerfield ?editSoccerfield.name :"",
        description: editSoccerfield ?editSoccerfield.description :"",
        size: editSoccerfield ?editSoccerfield.size :"",
        price: editSoccerfield ?editSoccerfield.price :"",
        imgUrl: editSoccerfield ?editSoccerfield.imgUrl :"",
        grass: editSoccerfield ?editSoccerfield.grass :""
    });
    
    const resetSoccerfieldState = () => {
        setSoccerfield({
            _id:null,
            name:"",
            description:"",
            size:"",
            price:"",
            imgUrl:"",
            grass:""
        });
    };
    
    const handleChange = (e) => {
        const { name, value} = e.target;
        setSoccerfield({
            ...soccerfield,
            [name]: value,
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editSoccerfield) {
            updateSoccerfield(soccerfield);
        } else {
            createSoccerfield(soccerfield);
        }
        handleClose();
        resetSoccerfieldState();
        getAllSoccerfields();
    }
    
  return (
    <>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Nombre
            </Form.Label>
            <Form.Control required
              type="text"
              value={soccerfield.name}
              onChange={handleChange}
              name="name"
              placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Descripción</Form.Label>
            <Form.Control required
              type="text"
              value={soccerfield.description}
              onChange={handleChange}
              name="description"
              placeholder="Descripción" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Precio</Form.Label>
            <Form.Control required
              type="number"
              value={soccerfield.price}
              onChange={handleChange}
              name="price"
              placeholder="Precio" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Tamaño</Form.Label>
            <Form.Control required
              type="number"
              value={soccerfield.size}
              onChange={handleChange}
              name="size"
              placeholder="Tamaño" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Pasto</Form.Label>
            <Form.Control required
              type="text"
              value={soccerfield.grass}
              onChange={handleChange}
              name="grass"
              placeholder="Pasto" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Imagen</Form.Label>
            <Form.Control
              type="text"
              value={soccerfield.imgUrl}
              onChange={handleChange}
              name="imgUrl"
              placeholder="http://Imagen_de_cancha.com" />
          </Form.Group>
          
          {/* <Form.Group className="mb-2">
          <Form.Select>
            <option value="value">si</option>
            <option value="value">no</option>
            <option value="value">talvez</option>
            </Form.Select>
          </Form.Group> */}

          <div className=''>
            {editSoccerfield 
            ?<Button variant="warning" type="submit" className='d-flex mx-auto'>Guardar cambios</Button> 
            :<Button variant="warning" type="submit" className='d-flex mx-auto'>Agregar cancha</Button> 
            }
          </div>
        </Form>
    </>
  )
}

export default EditSoccerfieldForm;