import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/Layout/Sidebar";
import Loader from "../../components/Loader/Loader";
import { getAllCategoryAction } from "../../_actions/categoryAction";
import { productAddAction } from "../../_actions/productAction";
 import { green } from "@material-ui/core/colors";
import Select from 'react-select';

const customStyles = (value) => ({
  control: (provided, state) => ({
    ...provided,
    alignItems: "baseline",
     backgroundColor: "#1f2b157d",
    borderRadius: "12px",
  border: 0,
  boxSizing: "border-box",
  textColor : "#eee",
  fontSize: "18px",
  height: "100%",
  outline: 0,
  padding: "4px 20px 0",
  width: "100%",
  }),
});



   function AddProduct() {
  const dispatch = useDispatch();
    const [inputValue, setValue] = useState("");

  const [restloader, setrestLoader] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);

  //state for user
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    stock: '',
    category: {
      _id : '',
    },
  });

  const productData = (e, key) => {
          // setUserInfo(user => ({...user, address: {...user.address, [fieldName]: value}}));

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
    }, 4000);
  }, []);

     const { categorys  } = useSelector((store) => store.categoryStore);
     const Categorys = categorys;
     console.log(Categorys, "=====");
      categorys.map((cat) => {
        console.log(cat.name, "!!!!!!!");
      });
 

   
    
       


  return restloader ? (
    <Loader />
  ) : (
    <div>
      <Sidebar>
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
              placeholder=" "
              value={product.description}
              onChange={(e) => productData(e, "description")}
            />
            <label className="placeholder">Description</label>
          </div>
          <div className="input-container ic2">
            <input
              id="image"
              className="input"
              type="file"
              value={product.image}
              onChange={(e) => productData(e, "image")}
            />
          </div>
          <div className="input-container ic2">
            
            <select
              id="category"
              className="input"
              value={product.category._id}
              onChange={(e) => productData(e, "_id")}
              select
            >
      
              {
              categorys.map((cat ,index ) => {
                return (
                  <option key={index} value={cat._id}   >
                    {cat.name}
                  </option>
                );
              })
            }
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

          <button
            type="submit"
            className="submit"
            onClick={productsubmitHandler}
          >
            Product Add
          </button>
        </div>
      </Sidebar>
    </div>
  );
}

export default AddProduct;
