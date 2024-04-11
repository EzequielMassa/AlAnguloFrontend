import './UsersTable.css';
import { useContext } from 'react';
import { Table, Button, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import { UsersProvider } from '../../context/UsersContext';
import Swal from 'sweetalert2';

const UsersTable = () => {
    const { usersArr } = useContext(UsersProvider);
    console.log(usersArr)

    const userImage = (url) => {
        console.log(url)
        return (
            Swal.fire({
                imageUrl: url,
                imageAlt: "User image",
                showCloseButton: true,
                closeButtonAriaLabel: 'Cierra ésta imagen',
                showConfirmButton: false,
                // timer: 5000
            })
        )
    };

    const isActiveMenu = (userObj)=> {
        console.log(userObj)
        return (
            <>
                {/* <Dropdown className="d-inline mx-2" >
                    <Dropdown.Toggle id="dropdown-autoclose-true" size="sm">
                        {userObj.active}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Menu Item1</Dropdown.Item>
                      <Dropdown.Item href="#">Menu Item2</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                <DropdownButton
            //   as="ButtonGroup"
              key="end"
              id="dropdown-button-drop-end"
              drop="end"
              variant="secondary"
              title={userObj.name}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            </>
        )
    }

  return (
    <>
    <Table
        striped
        hover
        responsive
        className="border border-success border-opacity-100 text-center align-middle">
        <thead>
          <tr>
            <th key="ACTIVE" className="border border-success border-opacity-50">ACTIVO</th>
            <th key="NAME" className="border border-success border-opacity-50">NOMBRE</th>
            <th key="LASTNAME" className="border border-success border-opacity-50">APELLIDO</th>
            <th key="EMAIL" className="border border-success border-opacity-50">EMAIL</th>
            <th key="PHONE" className="border border-success border-opacity-50">TELÉFONO</th>
            <th key="ROLE" className="border border-success border-opacity-50">ROL</th>
            <th key="ACTIONS" className="border border-success border-opacity-50">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {usersArr.map((userObj) => (
            <tr key={userObj._id}>
              <td key={"active"+userObj._id} className="border border-success border-opacity-50" >
                {isActiveMenu(userObj)}
              </td>
              <td key={"name"+userObj._id} className="cursorChange border-start border-success border-opacity-25" onClick={ ()=> userImage(userObj.image) }>
                {userObj.name}
              </td>
              <td key={"lastname"+userObj._id} className="cursorChange border-start border-success border-opacity-25" onClick={ ()=> userImage(userObj.image) }>
                {userObj.lastname}
              </td>
              <td key={"email"+userObj._id} className="cursorChange border-start border-success border-opacity-25" onClick={ ()=> userImage(userObj.image) }>
                {userObj.email}
              </td>
              <td key={"phone"+userObj._id} className="cursorChange border-start border-success border-opacity-25" onClick={ ()=> userImage(userObj.image) }>
                {userObj.phone}
              </td>
              <td key={"role"+userObj._id} className="cursorChange border-start border-success border-opacity-25" onClick={ ()=> userImage(userObj.image) }>
                {userObj.roles}
              </td>
              <td key={"actions"+userObj._id} className="border-start border-success border-opacity-25 text-nowrap">
                    <Button onClick={ ()=> userImage(userObj.image) } className="" variant="info">
                      IMG
                    </Button>
                    <Button  className="ms-1" variant="warning">
                      Editar
                    </Button>
                    <Button  className="ms-1" variant="danger">
                      Eliminar
                    </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComp editUser={editUser} handleClose={handleClose} />
        </Modal.Body>
      </Modal> */}
    </>
  )
};

export default UsersTable;