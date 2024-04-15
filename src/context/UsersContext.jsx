import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export const UsersProvider = createContext();


const UsersContext = ({children}) => {
    const [usersArr, setUsersArr] = useState([]);

    const getUsers = async () => {
        try {
            const serverReply = await axios.get("http://localhost:4000/api/users",{
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTc2MGFhMzExYmY3Y2RhM2VlNmE5NiIsIm5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJyb2xlcyI6IjY2MTcwYzQ1Njk1YWQwYzM3NmNkNWFlYyJ9.G0MZJD1CjP9XMJWjEz9uqhdBsTC3CmMKK4GQKQ4E4EQ"//TODO reemplazar value por acceso a token de sesión, posiblemente desde localStorage/sessionStorage
                }
            });
            setUsersArr(serverReply.data.data);//TODO para solucionar doble .data, en la ruta /users del backend hay que dejar esto: "res.status(200).json({ data: users })" =>asi=> "res.status(200).json( users )"
        } catch (error) {
            console.error(error)
        }
    };

    const updateUserActive = async (userObj) => {
        console.log(userObj)
        try {
            const updatedUser = await axios.put(`http://localhost:4000/api/user/changeState/${userObj._id}`, userObj,{
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTc2MGFhMzExYmY3Y2RhM2VlNmE5NiIsIm5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJyb2xlcyI6IjY2MTcwYzQ1Njk1YWQwYzM3NmNkNWFlYyJ9.G0MZJD1CjP9XMJWjEz9uqhdBsTC3CmMKK4GQKQ4E4EQ"//TODO reemplazar value por acceso a token de sesión, posiblemente desde localStorage/sessionStorage
                }
            });
            console.log(updatedUser.data)
            if(updatedUser) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Cambio guardado",
                    showConfirmButton: false,
                    timer: 2000
                });
                await getUsers();
            }
            
        } catch (error) {
            console.error(error)
        }
    }


    const deleteUser = async (userObj) => {
        console.log(userObj)
        Swal.fire({
            title: `Confirma eliminación de usuario "${userObj.name}"?`,
            text: "Esta acción no podrá revertirse.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    const response = axios.delete(`http://localhost:4000/api/user/${userObj._id}`,{
                        headers: {
                            "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTc2MGFhMzExYmY3Y2RhM2VlNmE5NiIsIm5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJyb2xlcyI6IjY2MTcwYzQ1Njk1YWQwYzM3NmNkNWFlYyJ9.G0MZJD1CjP9XMJWjEz9uqhdBsTC3CmMKK4GQKQ4E4EQ"//TODO reemplazar value por acceso a token de sesión, posiblemente desde localStorage/sessionStorage
                        }
                    });
                    response.then((result)=> {
                        if(result.status==200) {
                            return Swal.fire({
                                title: `Usuario "${userObj.name}" eliminado`,
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2500
                            })+
                            getUsers();
                        } 
                    });
                    Swal.fire({
                        title: `Operación fallida`,
                        icon: "error",
                        showConfirmButton: false,
                        timer: 2500
                    });
                    // setUsersArr(usersArr.filter((user) => user.id !== userObj._id))
                } catch (error) {
                    console.error(error)
                }
            }
          });
    };

    useEffect(() => {
      getUsers();
    }, []);
    

  return (
    <UsersProvider.Provider value={{ usersArr, getUsers, updateUserActive, deleteUser }}>
        {children}
    </UsersProvider.Provider>
  )
}

export default UsersContext;

