import './TabbedFrame.css';
import { Container, Row, Col, Nav, Tab, Image, Button } from 'react-bootstrap';
import UsersTable from '../UsersTable/UsersTable';
import ProductsTable from '../ProductsTable/ProductsTable';
import { ImSortAlphaDesc, ImSortAlphaAsc } from "react-icons/im";
import { FcAddDatabase } from "react-icons/fc";


const loggedAdmin = JSON.parse(localStorage.getItem("Admin_Registrado_En_Local"))

const TabbedFrame = () => {
  return (
    <>
      <section className='container-fluid bg-danger frame'>
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
                    <Tab.Pane eventKey="third">
                    <div className='d-flex'>
                    <div className='mx-1' ><Button className='m-0 p-1' variant='outline-success'> <FcAddDatabase className='addIcon'/> </Button></div>
                    </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className='d-flex'>
                    <div className='mx-1' ><Button className='m-0 p-1' variant='outline-success'> <FcAddDatabase className='addIcon'/> </Button></div>
                    </div>
                    </Tab.Pane>
                    <div className='d-flex'>
                    <Image src={loggedAdmin ?loggedAdmin.image :"https://xsgames.co/randomusers/assets/avatars/male/13.jpg"} alt="imagen de admin logeado" roundedCircle fluid className='adminLogged'/>
                    <p className='my-auto ps-1 d-none d-md-block'>{loggedAdmin ?loggedAdmin.name :"BenitoCamela"}</p>
                    </div>
                </Tab.Content>
                <Tab.Content className='rightBlock_2'>
                  <Tab.Pane eventKey="first"> <UsersTable/> </Tab.Pane>
                  <Tab.Pane eventKey="second"> <ProductsTable/> </Tab.Pane>
                  <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
        </Tab.Container>
        </section>

<br />
    {/* <section>
        <div className='contaier'>
        <Tab.Container fluid id="left-tabs-example" defaultActiveKey="first">
          <div className='row row-cols-1'>
          <Row>
            <div className='col col-3 d-flex-inlin'>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            </div>
            <div className='col col-9'>  
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first"><UsersTable/></Tab.Pane>
                <Tab.Pane eventKey="second"><UsersTable/></Tab.Pane>
              </Tab.Content>
            </Col>
            </div>
          </Row>
          </div>  
        </Tab.Container>
      </div>
    </section> */}

    </>
  )
}

export default TabbedFrame;