import './TabbedFrame.css';
import { Container, Row, Col, Nav, Tab, Image } from 'react-bootstrap';
import UsersTable from '../UsersTable/UsersTable';

const TabbedFrame = () => {
  return (
    <>
    
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="">
            <Row className="frame">
              <Col sm={3} className='frame__leftBlock'>
                    <Container className=''>
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
                    <p className='p-0 m-0'>ADMIN</p>
                    <div className='aaa'>
                    <Image src="https://xsgames.co/randomusers/assets/avatars/male/13.jpg" alt="imagen de admin logeado" roundedCircle fluid className='adminLogged m-0 p-0'/>
                    </div>
                </Tab.Content>
                <Tab.Content className='rightBlock_2'>
                  <Tab.Pane eventKey="first"> <UsersTable></UsersTable> </Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                  <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
        </Tab.Container>
        
    </>
  )
}

export default TabbedFrame;