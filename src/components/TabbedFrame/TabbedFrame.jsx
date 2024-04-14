import './TabbedFrame.css';
import { Container, Row, Col, Nav, Tab, Image, Button } from 'react-bootstrap';
import UsersTable from '../UsersTable/UsersTable';
import { ImSortAlphaDesc, ImSortAlphaAsc } from "react-icons/im";


const loggedAdmin = JSON.parse(localStorage.getItem("Admin_Registrado_En_Local"))

const TabbedFrame = () => {
  return (
    <>
      <div className='container frame'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="mainFrame">
            <Row className="frame__row">
              <Col sm={3} className='frame__leftBlock'>
                    <Container className='mt-2'>
                        <Nav variant="underline" className=" justify-content-around leftBlock row row-cols-1">
                            <Col className='m-0 p-0 mx-auto col-auto'>
                          <Nav.Item>
                            <Nav.Link eventKey="first">Usuarios</Nav.Link>
                          </Nav.Item>
                            </Col>
                            <Col className='m-0 p-0 mx-auto col-auto'>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Productos</Nav.Link>
                          </Nav.Item>
                            </Col>
                            <Col className='m-0 p-0 mx-auto col-auto'>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Canchas</Nav.Link>
                          </Nav.Item>
                            </Col>
                        </Nav>
                    </Container>
              </Col>
              <Col sm={9} className='frame__rightBlock'>
                <Tab.Content className='rightBlock_1 p-2 justify-content-between'>
                    <p className='p-0 my-auto'>ADMIN</p>
                    <div className='d-flex'>
                      <div className='mx-1' ><Button  className='m-0' variant='outline-success'><ImSortAlphaAsc /></Button></div>
                      <div className='mx-1' ><Button  className='m-0' variant='outline-success'><ImSortAlphaDesc /></Button></div>
                    </div>
                    <div className='d-flex'>
                    <Image src={loggedAdmin ?loggedAdmin.image :"https://xsgames.co/randomusers/assets/avatars/male/13.jpg"} alt="imagen de admin logeado" roundedCircle fluid className='adminLogged'/>
                    <p className='my-auto ps-1'>{loggedAdmin ?loggedAdmin.name :"Nombre Apellido"}</p>
                    </div>
                </Tab.Content>
                <Tab.Content className='rightBlock_2'>
                  <Tab.Pane eventKey="first"> <UsersTable/> </Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                  <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
        </Tab.Container>
        </div>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
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
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </>
  )
}

export default TabbedFrame;