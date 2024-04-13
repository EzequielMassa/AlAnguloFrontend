import React from "react";
import "./productDetail.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import imagen from "./remerariver (2).png";
import logo from '../../assets/images/logo_AlAngulo.png'
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
const ProductDetail = () => {
  const [product, setProduct] = useState({
    id: 1,
    nombre: "Camisa",
    categoria: "remeras",
    precio: 20.99,
    cantidad: 50,
    descripcion: "Camisa de algodón de manga larga",
  });
  return (
    <>
      <Container  className=" product-container container-sm border rounded-4 ">
        <Row className="product-row border rounded-4">
          <Col xs={12} lg={4} className="img-column">
            <img src={imagen} className="w-100 h-100 img-product"/>
          </Col>
          <Col xs={12} lg={4} className="d-flex aling-items-center justify-content-center" >
            <div className="info-container d-flex aling-items-center mb-3 gap-2">
              <h2 className="text-center ">{product.nombre}</h2>
              <h3 className="text-center mt-2">{product.descripcion}</h3>
              <h3 className="text-center mt-2">${product.precio}</h3>
            </div>
          </Col>
          
          <Col xs={12} lg={4} className="d-flex aling-items-center justify-content-center   py-md-0">
            <div className="info-actions d-flex justify-content-center gap-3 py-4">
              <Button className="bg-danger outline border-0"><IoRemoveCircleOutline className="icon-cart" /></Button>
              <h2 className="info-product">{product.cantidad}</h2>
              <Button className="bg-success outline border-0"><IoAddCircleOutline className="icon-cart" /></Button>
             </div>
          </Col>
          
                <Button type="submit" className="btn-pay mb-2">
                  <span className="text-pay">Pagar</span>
                </Button>
              
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
