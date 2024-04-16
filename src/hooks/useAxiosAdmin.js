import axios from 'axios'
import { useState } from 'react'
import { baseUrl } from '../api/apiUrl.js'
import Swal from 'sweetalert2'

function UseAxiosAdmin() {
	const [users, setUsers] = useState([])
	const [usersLoading, setUsersLoading] = useState(false)
	const [usersError, setUsersError] = useState(null)

    const getAllUsers = async () => {
        setUsersLoading(true);
        try {
            const serverReply = await axios.get(`${baseUrl}/users`,{
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTc2MGFhMzExYmY3Y2RhM2VlNmE5NiIsIm5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJyb2xlcyI6IjY2MTcwYzQ1Njk1YWQwYzM3NmNkNWFlYyJ9.G0MZJD1CjP9XMJWjEz9uqhdBsTC3CmMKK4GQKQ4E4EQ"//TODO reemplazar value por acceso a token de sesión, posiblemente desde localStorage/sessionStorage
                }
            });
            setUsers(serverReply.data.data);
        } catch (error) {
            setUsersError(error)
        } finally {
            setUsersLoading(false)
        }
    };

    const updateUserActive = async (userObj) => {
        try {
            const updatedUser = await axios.put(`${baseUrl}/user/changeState/${userObj._id}`, userObj,{
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTc2MGFhMzExYmY3Y2RhM2VlNmE5NiIsIm5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJyb2xlcyI6IjY2MTcwYzQ1Njk1YWQwYzM3NmNkNWFlYyJ9.G0MZJD1CjP9XMJWjEz9uqhdBsTC3CmMKK4GQKQ4E4EQ"//TODO reemplazar value por acceso a token de sesión, posiblemente desde localStorage/sessionStorage
                }
            });            
            if(updatedUser.status===200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Cambio guardado",
                    showConfirmButton: false,
                    timer: 2000
                });
                await getAllUsers();
            }
            
        } catch (error) {
            console.error(error)
        }
    };

    const updateUser = async (userObj) => {
        try {
            const updatedUser = await axios.put(`${baseUrl}/user/${userObj._id}`, userObj,{
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTc2MGFhMzExYmY3Y2RhM2VlNmE5NiIsIm5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJyb2xlcyI6IjY2MTcwYzQ1Njk1YWQwYzM3NmNkNWFlYyJ9.G0MZJD1CjP9XMJWjEz9uqhdBsTC3CmMKK4GQKQ4E4EQ"//TODO reemplazar value por acceso a token de sesión, posiblemente desde localStorage/sessionStorage
                }
            });
            if(updatedUser.status===200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Cambios guardados",
                    showConfirmButton: false,
                    timer: 2000
                });
                await getAllUsers();
            }
            
        } catch (error) {
            console.error(error)
        }
    };


    const deleteUser = async (userObj) => {
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
                    const response = axios.delete(`${baseUrl}/user/${userObj._id}`,{
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
                            getAllUsers();
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
	

	
	// const post = async (url, body) => {
	// 	setLoading(true)
	// 	try {
	// 		const response = await axios.post(url, body)
	// 		setData(response.data)
	// 	} catch (err) {
	// 		setError(err)
	// 	} finally {
	// 		setLoading(false)
	// 	}
	// }

	// const put = async (url, body) => {
	// 	setLoading(true)
	// 	try {
	// 		const response = await axios.put(url, body)
	// 		setData(response.data)
	// 	} catch (err) {
	// 		setError(err)
	// 	} finally {
	// 		setLoading(false)
	// 	}
	// }

	// const del = async (url) => {
	// 	setLoading(true)
	// 	try {
	// 		await axios.delete(url)
	// 		setData(null)
	// 	} catch (err) {
	// 		setError(err)
	// 	} finally {
	// 		setLoading(false)
	// 	}
	// }

	return {
        users,
        usersLoading,
        usersError,
		getAllUsers,
        updateUserActive,
        updateUser,
        deleteUser
	}
}

export default UseAxiosAdmin;
