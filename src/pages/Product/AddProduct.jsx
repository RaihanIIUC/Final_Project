import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/Layout/Sidebar";
import Loader from "../../components/Loader/Loader";
import { ProductAddAction } from "../../_actions/ProductAction";
  function AddProduct() {
  const dispatch = useDispatch();
  const [restloader, setrestLoader] = useState(true);

  //state for user
  const [Product, setProduct] = useState({
    name: "",
    description: "",
    image: " ",
  });

  const ProductData = (e, key) => {
    setProduct({ ...Product, [key]: e.target.value });
  };

 
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(ProductAddAction(Product));
    console.log(Product);
  };

  useEffect(() => {
    setInterval(() => {
      setrestLoader(false);
    }, 4000);
  }, []);


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
              value={Product.name}
              onChange={(e) => ProductData(e, "name")}
            />
            <label className="placeholder">Product Name </label>
          </div>
          <div className="input-container ic2">
            <input
              id="description"
              className="input"
              type="text"
              placeholder=" "
              value={Product.description}
              onChange={(e) => ProductData(e, "description")}
            />
            <label className="placeholder">Description</label>
          </div>
          <div className="input-container ic2">
            <input
              id="image"
              className="input"
              type="file"
              onChange={(e) => ProductData(e, "image")}
            />
          </div>
          <button type="submit" className="submit" onClick={submitHandler}>
            Product Add
          </button>
        </div>
      </Sidebar>
    </div>
  );
}

export default AddProduct;
