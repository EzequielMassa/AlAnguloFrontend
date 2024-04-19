import './TabbedFrame.css';
import { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Image, Button, Modal } from 'react-bootstrap';
import { ImSortAlphaDesc, ImSortAlphaAsc } from "react-icons/im";
import { FcAddDatabase } from "react-icons/fc";
import UsersTable from '../UsersTable/UsersTable';
import ProductsTable from '../ProductsTable/ProductsTable';
import SoccerFieldsTable from '../SoccerFieldsTable/SoccerFieldsTable';
import EditProductForm from '../EditProductForm/EditProductForm';
import EditSoccerfieldForm from '../EditSoccerfieldForm/EditSoccerfieldForm';
import { useAuthContext } from '../../context/AuthContext'; 
// import { jwtDecode } from 'jwt-decode'

const TabbedFrame = () => {
  // const token = localStorage.getItem("token")||{};
  // const decoded = jwtDecode(token)
  // console.log(decoded)


    const { user:loggedUser } = useAuthContext();
    const { name, lastname, image } = loggedUser;
    console.log(loggedUser)

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleEdit1 = () => {setShow1(true)};

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleEdit2 = () => {setShow2(true)};

    // const decodedJWTSession = () => {
    //   const token = localStorage.getItem("token")||{};
    //   const base64Url = token.split('.')[1];
    //   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    //   const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    //       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //   }).join(''));
    //   return JSON.parse(jsonPayload);
    // };
    // const { name, lastname, image } = decodedJWTSession();
    // console.log(decodedJWTSession())


  return (
    <>
      <section className='container-fluid frame pt-5'>
        <Tab.Container id="|-tabs-example" defaultActiveKey="first" className="mainFrame">
            <Row className="frame__row d-flex">
              <Col sm={3} className='frame__leftBlock d-flex col-auto flex-column align-item-center'>
                    
                  <Nav variant="underline" className=" leftBlock d-flex flex-column flex-md-row justify-content-around align-item-center">
                     
                    <Nav.Item>
                      <Nav.Link eventKey="first">Usuarios</Nav.Link>
                    </Nav.Item>
                     
                     
                    <Nav.Item>
                      <Nav.Link eventKey="second">Productos</Nav.Link>
                    </Nav.Item>
                     
                      
                    <Nav.Item>
                      <Nav.Link eventKey="third">Canchas</Nav.Link>
                    </Nav.Item>
                     
                  </Nav>
                    
              </Col>
              <Col sm={9} className='frame__rightBlock'>
                <Tab.Content className='rightBlock_1 p-2 justify-content-between'>
                    <p className='p-0 my-auto'>ADMIN</p>

                    <div className='d-flex'>
                      <div className='mx-1' ><Button className='m-0 p-2' variant='outline-success'> <ImSortAlphaAsc className='orderIcon'/> </Button></div>
                      <div className='mx-1' ><Button className='m-0 p-2' variant='outline-success'> <ImSortAlphaDesc className='orderIcon'/> </Button></div>
                    </div>

                    <Tab.Pane eventKey="second">
                    <div className='mx-1' ><Button className='m-0 p-1' variant='outline-success'> <FcAddDatabase onClick={handleEdit1} className='addIcon'/> </Button></div>
                    <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                      <Modal.Title>Producto nuevo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <EditProductForm handleClose={handleClose1} />
                    </Modal.Body>
                    </Modal>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <div className='mx-1' ><Button className='m-0 p-1' variant='outline-success'> <FcAddDatabase onClick={handleEdit2} className='addIcon'/> </Button></div>
                    <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                      <Modal.Title>Cancha nueva</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <EditSoccerfieldForm handleClose={handleClose2} />
                    </Modal.Body>
                    </Modal>
                    </Tab.Pane>

                    <div className='d-flex'>
                    <Image src={loggedUser ?image :"https://xsgames.co/randomusers/assets/avatars/male/13.jpg"} alt="imagen de admin logeado" roundedCircle fluid className='adminLogged'/>
                    <p className='my-auto ps-1 d-none d-md-block'>{loggedUser ?`${name} ${lastname}` :"JohnDoe"}</p>
                    </div>

                </Tab.Content>

                <Tab.Content className='rightBlock_2'>
                  <Tab.Pane eventKey="first"> <UsersTable/> </Tab.Pane>
                  <Tab.Pane eventKey="second"> <ProductsTable/> </Tab.Pane>
                  <Tab.Pane eventKey="third"> <SoccerFieldsTable/> </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
        </Tab.Container>

        

        </section>
    </>
  )
}

export default TabbedFrame;