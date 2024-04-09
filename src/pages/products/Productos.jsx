import React, { useState } from 'react';
import { Row, Col, Container, Card, Button, Navbar, Nav, Form, FormControl, Dropdown, DropdownButton } from 'react-bootstrap';
import imagen from './camiseta.jpg';
import './products.css'
import './filter.css'
import logo from '../../assets/images/logo_AlAngulo.png'
function Products() {
   const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Camisa",
      categoria: "remeras",
      precio: 20.99,
      cantidad: 50,
      descripcion: "Camisa de algodón de manga larga"
    },
    {
      id: 2,
      nombre: "Pantalón",
      categoria: "remeras",
      precio: 34.99,
      cantidad: 30,
      descripcion: "Pantalón vaquero de estilo casual"
    },
    {
      id: 3,
      nombre: "Zapatos",
      categoria: "pantalones",
      precio: 49.99,
      cantidad: 20,
      descripcion: "Zapatos de cuero formales"
    },
    {
      id: 4,
      nombre: "Reloj",
      categoria: "remeras",
      precio: 99.99,
      cantidad: 15,
      descripcion: "Reloj analógico de acero inoxidable"
    },
    {
      id: 5,
      nombre: "Mochila",
      categoria: "remeras",
      precio: 39.99,
      cantidad: 25,
      descripcion: "Mochila resistente"
    },
    {
      id: 6,
      nombre: "Gafas de sol",
      categoria: "panalones",
      precio: 15.99,
      cantidad: 40,
      descripcion: "Gafas de sol con montura de plástico"
    },
    {
      id: 7,
      nombre: "Botella de agua",
      categoria: "remeras",
      precio: 5.99,
      cantidad: 60,
      descripcion: "Botella de agua reutilizable de 500ml"
    },
    {
      id: 8,
      nombre: "Libreta",
      categoria: "pantalones",
      precio: 3.99,
      cantidad: 100,
      descripcion: "Libreta de tamaño A5 con hojas rayadas"
    },
    {
      id: 9,
      nombre: "Lápices de colores",
      categoria: "remeras",
      precio: 7.99,
      cantidad: 50,
      descripcion: "Set de 12 lápices de colores"
    },
    {
      id: 10,
      nombre: "Bolígrafos",
      categoria: "pantalones",
      precio: 4.99,
      cantidad: 80,
      descripcion: "Set de 10 bolígrafos de tinta azul"
    },
    {
      id: 11,
      nombre: "Cámara",
      categoria: "pantalones",
      precio: 199.99,
      cantidad: 10,
      descripcion: "Cámara digital compacta de 20MP"
    },
    {
      id: 12,
      nombre: "Auriculares",
      categoria: "remeras",
      precio: 29.99,
      cantidad: 35,
      descripcion: "Auriculares inalámbricos "
    }
    // Agrega más productos según sea necesario
  ]);
  const [filteredProducts, setFilteredProducts] = useState([...productos]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleSearch = () => {
    const filtered = productos.filter(producto => {
      const nameMatches = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatches = selectedCategory ? producto.categoria === selectedCategory : true;
      return nameMatches && categoryMatches;
    });

    setFilteredProducts(filtered);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSortOrder('');
    setFilteredProducts([...productos]);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) => {
      const priceA = a.precio;
      const priceB = b.precio;
      return order === 'asc' ? priceA - priceB : priceB - priceA;
    });

    setFilteredProducts(sorted);  
  };

  return (
    <>
    <Container fluid className='mt-5 pt-5 '>
      <Navbar bg="light" expand="lg" className="mb-3 nav-filter ">
        <Navbar.Brand >Búsqueda de Productos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" w-100 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <Form  className='form-search flex-column flex-md-row gap-2 w-100 d-flex justify-content-center align-items-center'>
              <FormControl type="text" placeholder="Buscar por nombre" className="mr-sm-2" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <Button className='btn-search align-self-center d-flex mb-2 ms-2' variant="outline-success" onClick={handleSearch}>Buscar</Button>
              <DropdownButton title="Categoría" onSelect={(category) => setSelectedCategory(category)}>
              <Dropdown.Item eventKey="remeras">Remeras</Dropdown.Item>
              <Dropdown.Item eventKey="pantalones">Pantalones</Dropdown.Item>
            </DropdownButton>
            <DropdownButton title="Ordenar por precio">
              <Dropdown.Item onClick={() => handleSort('asc')}>Menor a mayor</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort('desc')}>Mayor a menor</Dropdown.Item>
            </DropdownButton>
            </Form>
           
            <Button variant="outline-secondary" onClick={handleClearFilters}>Limpiar Filtros</Button>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
     </Container> 
     <Container fluid className='mt-5'>

      {filteredProducts.length === 0 ? (
        <div className='text-center'>No hay productos</div>
      ) : (
        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gap-3 product-row'>
          {filteredProducts.map((p, index) => (
            <Col xl={4} key={index} className='product-column'>
              <Card className='card-products'>
                <Card.Img variant="top" className='camiseta' src={imagen} />
                <Card.Body className='text-center'>
                  <Card.Title>{p.nombre}</Card.Title>
                  <Card.Text>${p.precio}</Card.Text>
                  <div className="btn-container d-flex">
                    <Button className='btn-success'>Ver producto</Button>
                    
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
    </>
  );
}

export default Products;