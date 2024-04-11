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
            setUsersArr(serverReply.data.data);
            console.log(serverReply.data.data);//TODO para solucionar doble .data, en la ruta /users del backend hay que dejar esto: "res.status(200).json({ data: users })" =>asi=> "res.status(200).json( users )"
        } catch (error) {
            console.error(error)
        }
    };



    useEffect(() => {
      getUsers();
    }, []);
    

  return (
    <UsersProvider.Provider value={{ usersArr }}>
        {children}
    </UsersProvider.Provider>
  )
}

export default UsersContext;

