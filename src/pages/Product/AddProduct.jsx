import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/Layout/Sidebar";
import Loader from "../../components/Loader/Loader";
import { getAllCategoryAction } from "../../_Redux/_actions/categoryAction";
import { productAddAction } from "../../_Redux/_actions/productAction";
import { green } from "@material-ui/core/colors";
import FileBase64 from "react-file-base64";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Home from "../Home/Home";
 import Swal from "sweetalert2";
 

const customStyles = (value) => ({
  control: (provided, state) => ({
    ...provided,
    alignItems: "baseline",
    backgroundColor: "#1f2b157d",
    borderRadius: "12px",
    border: 0,
    boxSizing: "border-box",
    textColor: "#eee",
    fontSize: "18px",
    height: "100%",
    outline: 0,
    padding: "4px 20px 0",
    width: "100%",
  }),
});
const fileWrapper = styled.div`
  width: "100%";
`;

function AddProduct() {
  const dispatch = useDispatch();

  const [restloader, setrestLoader] = useState(true);
  const [photo, setPhoto] = useState(null);

  //state for user
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    stock: "",
    category: {
      _id: "",
    },
  });
 

  const productData = (e, key) => {
    setProduct({
      ...product,
      category: { ...product.category, [key]: e.target.value },
      [key]: e.target.value,
    });
  };

  const productsubmitHandler = (e) => {
    e.preventDefault();

    dispatch(productAddAction(product));
    console.log(product);

 
  };

  useEffect(() => {
    dispatch(getAllCategoryAction());
    setInterval(() => {
      setrestLoader(false);
    }, 2000);
 
  }, []);

  const { categories } = useSelector((store) => store.categoryStore);

  const handleFileRead = async (event, key) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setProduct({
      ...product,
      image: base64,
    });

    //  setProduct({...product , image : base64 })
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return restloader ? (
    <Loader />
  ) : (
    <>
      <Home>
        <div className="form">
          <div className="subtitle">Product </div>
          <div className="input-container ic1">
            <input
              id="ProductName"
              className="input"
              type="text"
              placeholder=" "
              value={product.title}
              onChange={(e) => productData(e, "title")}
            />
            <label className="placeholder">Product Title </label>
          </div>
          <div className="input-container ic2">
            <input
              id="price"
              className="input"
              type="number"
              placeholder=""
              value={product.price}
              onChange={(e) => productData(e, "price")}
            />
            <label className="placeholder">Price</label>
          </div>
          <div className="input-container ic2">
            <input
              id="description"
              className="input"
              type="text"
              placeholder=""
              value={product.description}
              onChange={(e) => productData(e, "description")}
            />
            <label className="placeholder">Description</label>
          </div>

          <div className="input-container ic2">
            <select
              id="category"
              className="input"
              value={product.category._id}
              onChange={(e) => productData(e, "_id")}
            >
              {categories.map((cat, index) => {
                return (
                  <option key={index} value={cat._id}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input-container ic2">
            <input
              id="stock"
              className="input"
              type="number"
              placeholder=" "
              value={product.stock}
              onChange={(e) => productData(e, "stock")}
            />
            <label className="placeholder">Stock</label>
          </div>
          <div className="input-container ic2">
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              hidden
              onChange={(e) => handleFileRead(e, "image")}
            />
            <label htmlFor="icon-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </div>
          <button
            type="submit"
            className="submit"
            onClick={productsubmitHandler}
          >
            Product Add
          </button>
        </div>
      </Home>
    </>
  );
}

export default AddProduct;
