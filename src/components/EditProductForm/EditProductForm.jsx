import './EditProductForm.css';
import { Form, Button, Image } from "react-bootstrap";
import { useState } from "react";
import { useAdminContext } from '../../context/AdminContext';


const EditProductForm = ({editProduct, handleClose}) => {
    const {  getAllProducts, updateProduct, createProduct } = useAdminContext();
    const [product, setProduct] = useState({
        _id: editProduct ?editProduct._id :null,
        name: editProduct ?editProduct.name :"",
        description: editProduct ?editProduct.description :"",
        category: editProduct ?editProduct.category :"",
        price: editProduct ?editProduct.price :"",
        image: editProduct ?editProduct.image :""
    });
    
    const resetProductState = () => {
        setProduct({
            _id:null,
            name:"",
            description:"",
            category:"",
            price:"",
            image:""
        });
    };
    
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        if(type==="checkbox"){
            console.log(checked)
            setProduct({
                ...product,
                [name]: checked,
            });
        // } else if (name==="category") {
        //     setProduct({...product, [name]:{"name": value}});
        //     console.log(product);
        } else {
            setProduct({
                ...product,
                [name]: value,
            });
            // if(name==="category") {
            //     console.log(product)
            // }
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editProduct) {
            updateProduct(product);
        } else {
            createProduct(product);
        }
        handleClose();
        resetProductState();
        getAllProducts();
    }
    console.log(product.category)
  return (
    <>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Nombre</Form.Label>
            <Form.Control required
              type="text"
              value={product.name}
              onChange={handleChange}
              name="name"
              placeholder="Nombre" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Descripción</Form.Label>
            <Form.Control required
              type="text"
              value={product.description}
              onChange={handleChange}
              name="description"
              placeholder="Descripción" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Categoria</Form.Label>
            <Form.Control required
              type="text"
              value={product.category.name}
              onChange={handleChange}
              name="category"
              placeholder="Categoria" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Precio</Form.Label>
            <Form.Control required
              type="number"
              value={product.price}
              onChange={handleChange}
              name="price"
              placeholder="Precio" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0">Imagen</Form.Label>
            <Form.Control
              type="text"
              value={product.image}
              onChange={handleChange}
              name="image"
              placeholder="http://Imagen_de_producto.com" />
              <Form.Label className="d-flex">
                <div className="my-1 py-1 mx-auto">
                  <Image
                    src={product.image||"https://static.vecteezy.com/system/resources/previews/005/720/408/large_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"}
                    alt="imagen del producto"
                    roundedCircle
                    className="editProductImg"
                  />
                </div>
              </Form.Label>
          </Form.Group>
          
          {/* <Form.Group className="mb-2">
          <Form.Select>
            <option value="value">si</option>
            <option value="value">no</option>
            <option value="value">talvez</option>
            </Form.Select>
          </Form.Group> */}

          <div className=''>
            {editProduct 
            ?<Button variant="warning" type="submit" className='d-flex mx-auto'>Guardar cambios</Button> 
            :<Button variant="warning" type="submit" className='d-flex mx-auto'>Agregar producto</Button> 
            }
          </div>
        </Form>
    </>
  )
}

export default EditProductForm;