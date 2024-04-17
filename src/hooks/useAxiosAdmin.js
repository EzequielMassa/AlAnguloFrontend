import axios from 'axios'
import { useState } from 'react'
import { baseUrl } from '../api/apiUrl.js'
import Swal from 'sweetalert2'
// import { useProductsContext } from "../context/ProductsContext";

function UseAxiosAdmin() {
    // const { getAllProducts } = useProductsContext();
	const [users, setUsers] = useState([])
	const [usersLoading, setUsersLoading] = useState(false)
	const [usersError, setUsersError] = useState(null)

    const [products, setProducts] = useState([])
	const [productsLoading, setProductsLoading] = useState(false)
	const [productsError, setProductsError] = useState(null)

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
                        if(result.status===200) {
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


    const getAllProducts = async () => {
        setProductsLoading(true)
        try {
            const serverReply = await axios.get(`${baseUrl}/products`,{
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTc2MGFhMzExYmY3Y2RhM2VlNmE5NiIsIm5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJyb2xlcyI6IjY2MTcwYzQ1Njk1YWQwYzM3NmNkNWFlYyJ9.G0MZJD1CjP9XMJWjEz9uqhdBsTC3CmMKK4GQKQ4E4EQ"//TODO reemplazar value por acceso a token de sesión, posiblemente desde localStorage/sessionStorage
                }
            });
            setProducts(serverReply.data.data);//TODO para solucionar doble .data, en la ruta /users del backend hay que dejar esto: "res.status(200).json({ data: users })" =>asi=> "res.status(200).json( users )"
        } catch (error) {
            setProductsError(error)
        } finally {
            setProductsLoading(false)
        }
    };

    const deleteProduct = async (ProductObj) => {
        Swal.fire({
            title: `Confirma eliminación del producto "${ProductObj.name}"?`,
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
                    const response = axios.delete(`${baseUrl}/product/delete/${ProductObj._id}`,{
                        headers: {
                            "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTc2MGFhMzExYmY3Y2RhM2VlNmE5NiIsIm5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJyb2xlcyI6IjY2MTcwYzQ1Njk1YWQwYzM3NmNkNWFlYyJ9.G0MZJD1CjP9XMJWjEz9uqhdBsTC3CmMKK4GQKQ4E4EQ"//TODO reemplazar value por acceso a token de sesión, posiblemente desde localStorage/sessionStorage
                        }
                    });
                    response.then((result)=> {
                        if(result.status===200) {
                            return Swal.fire({
                                title: `Producto "${ProductObj.name}" eliminado`,
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2500
                            })+
                            getAllProducts();
                        } 
                    });
                    Swal.fire({
                        title: `Operación fallida`,
                        icon: "error",
                        showConfirmButton: false,
                        timer: 2000
                    });
                } catch (error) {
                    console.error(error)
                }
            }
          });
    };

    const updateProduct = async (userObj) => {
        try {
            const updatedUser = await axios.put(`${baseUrl}/product/update/${userObj._id}`, userObj,{
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
                await getAllProducts();
            }
        } catch (error) {
            console.error(error)
        }
    };

    const createProduct = async (newProductObj) => {
        console.log(newProductObj)
        try {
            const responseNewProduct = await axios.post(`${baseUrl}/products`, newProductObj,{
                headers: {
                    "x-access-token": "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTc2MGFhMzExYmY3Y2RhM2VlNmE5NiIsIm5hbWUiOiJhZG1pbiIsImxhc3RuYW1lIjoiYWRtaW4iLCJyb2xlcyI6IjY2MTcwYzQ1Njk1YWQwYzM3NmNkNWFlYyJ9.G0MZJD1CjP9XMJWjEz9uqhdBsTC3CmMKK4GQKQ4E4EQ"//TODO reemplazar value por acceso a token de sesión, posiblemente desde localStorage/sessionStorage
                }
            });
            console.log(responseNewProduct, "Producto agregado")
            // setProducts([...products, dispatchNewUser.data.data])
            if(responseNewProduct.status===201) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Producto ${newProductObj.name} guardado`,
                showConfirmButton: false,
                timer: 2000
            });
            await getAllProducts();
            }
        } catch(error) {
            console.error(error)
        }
    }
	
	return {
        users,
        usersLoading,
        usersError,
		getAllUsers,
        updateUserActive,
        updateUser,
        deleteUser,
        products,
        productsLoading,
        productsError,
        getAllProducts,
        deleteProduct,
        updateProduct,
        createProduct
	}
}

export default UseAxiosAdmin;

//TODO corregir en backend deleteProduct, falta "unique" en name dentro del model