import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Sidebar from '../../components/Layout/Sidebar';
import Loader from '../../components/Loader/Loader';
import { categoryAddAction } from '../../_Redux/_actions/categoryAction';
import Auth from '../../_Redux/_helpers/auth';
import Home from '../Home/Home';
 import "./category.css";


function Category() {
    const dispatch = useDispatch();
   const [restloader, setrestLoader] = useState(true);
   const [category, setCategory] = useState({
    name : "",
    description : "",
    image : " ",
  });


  const CategoryData = (e, key) => {
    setCategory({ ...category, [key]: e.target.value });
  };
 
   
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(categoryAddAction(category));
    console.log(category);
  };


   useEffect(() => {
     setInterval(() => {
       setrestLoader(false);
     }, 2000);
   }, [restloader]);
   
  return (
    <Home>
      <div className="form">
        <div className="subtitle">Category </div>
        <div className="input-container ic1">
          <input
            id="categoryName"
            className="input"
            type="text"
            placeholder=" "
            value={category.name}
            onChange={(e) => CategoryData(e, "name")}
          />
          <label className="placeholder">Category Name </label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={category.description}
            onChange={(e) => CategoryData(e, "description")}
          />
          <label className="placeholder">Description</label>
        </div>
        <div className="input-container ic2">
          <input
            id="image"
            className="input"
            type="file"
            onChange={(e) => CategoryData(e, "image")}
          />
        </div>
        <button type="submit" className="submit" onClick={submitHandler}>
          Category Add
        </button>
      </div>
    </Home>
  );
}

export default Category
