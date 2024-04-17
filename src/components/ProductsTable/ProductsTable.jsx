import "./ProductsTable.css";

import { useEffect, useState } from "react";
import { Image, Modal, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import EditProductForm from "../EditProductForm/EditProductForm";
// import { useProductsContext } from "../../context/ProductsContext";
import { useAdminContext } from "../../context/AdminContext";

const ProductsTable = () => {
//   const { products:productsArr, getAllProducts } = useProductsContext();
  const { products:productsArr, getAllProducts, deleteProduct } = useAdminContext();
  const [editProduct, setEditProduct] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleEdit = (productObj) => {
    setEditProduct(productObj);
    setShow(true);
  };

  const productImagePopup = (url) => {
    return Swal.fire({
      imageUrl: url,
      imageAlt: "Product image",
      showCloseButton: true,
      closeButtonAriaLabel: "Cierra ésta imagen",
      showConfirmButton: false,
      timer: 8000,
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Table
        bordered
        striped
        hover
        responsive
        size="sm"
        className="text-center align-middle">
        <thead className="">
          <tr className="tableTitles">
            <th key="ID" className="border border-success border-opacity-50">
              ID
            </th>
            <th key="NAME" className="border border-success border-opacity-50">
              NOMBRE
            </th>
            <th
              key="DESCRIPTION"
              className="border border-success border-opacity-50">
              DESCRIPCIÓN
            </th>
            <th
              key="CATEGORY"
              className="border border-success border-opacity-50">
              CATEGORIA
            </th>
            <th key="PRICE" className="border border-success border-opacity-50">
              PRECIO
            </th>
            <th key="IMAGE" className="border border-success border-opacity-50">
              IMG
            </th>
            <th
              key="ACTIONS"
              className="border border-success border-opacity-50">
              ACCIONES
            </th>
          </tr>
        </thead>
        <tbody>
          {productsArr.map((productObj) => (
            <tr key={productObj._id} className="fs-5">
              <td
                key={"_id" + productObj._id}
                className="borderCustom text-break ">
                <p className="idCell m-0 p-0"> {productObj._id} </p>
              </td>
              <td
                key={"name" + productObj._id}
                className="cursorChange borderCustom">
                {productObj.name}
              </td>
              <td
                key={"description" + productObj._id}
                className="cursorChange borderCustom">
                {productObj.description}
              </td>
              <td
                key={"category" + productObj._id}
                className="cursorChange borderCustom">
                {productObj.category.name}
              </td>
              <td
                key={"price" + productObj._id}
                className="cursorChange borderCustom">
                $ {productObj.price}
              </td>
              <td
                key={"image" + productObj._id}
                className="cursorChange borderCustom"
                onClick={() => productImagePopup(productObj.image)}>
                <div className="d-flex align-items-center justify-content-evenly">
                  <Image
                    src={
                      productObj.image ||
                      "https://static.vecteezy.com/system/resources/previews/005/720/408/large_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg"
                    }
                    alt="imagen de productos"
                    onClick={() => productImagePopup(productObj.image)}
                    roundedCircle
                    className="cursorChange userImg"
                  />
                </div>
              </td>
              <td key={"actions" + productObj._id} className="borderCustom">
                <div className="d-flex justify-content-evenly">
                  <FaRegEdit
                    className="cursorChange mx-1"
                    onClick={() => handleEdit(productObj)}
                  />
                  <FaRegTrashCan
                    className="cursorChange mx-1"
                    onClick={() => deleteProduct(productObj)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProductForm
            editProduct={editProduct}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductsTable;
