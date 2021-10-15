import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Sidebar from "../../components/Layout/Sidebar";
import Loader from "../../components/Loader/Loader";
import {
  categoryAddAction,
  getCategoryByIdAction,
  getAllCategoryAction,
  editCategoryAction,
} from "../../_Redux/_actions/categoryAction";
import Auth from "../../_Redux/_helpers/auth";
import Home from "../Home/Home";
import "./category.css";

function EditCategory() {
    const cid = useParams();
    console.log(cid, NaN, "id");
  const dispatch = useDispatch();
  const [restloader, setrestLoader] = useState(true);
   const { category } = useSelector((store) => store.categoryStore);
   console.log(category,NaN,'  ');
 console.log(category, NaN);
  const [Updatecategory, setCategory] = useState({
    _id : category?._id,
    name: category.name,
    description: category.description,
    image: category.image,
  });

  const CategoryDataUpdate = (e, key) => {
    setCategory({ ...Updatecategory, [key]: e.target.value });
  };

  const UpdateHandler = (e) => {
    e.preventDefault();
    dispatch(editCategoryAction(Updatecategory));
   };

  useEffect(() => {
   dispatch(getCategoryByIdAction(cid));

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
            value={Updatecategory.name}
            onChange={(e) => CategoryDataUpdate(e, "name")}
          />
          <label className="placeholder">Category Name </label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={Updatecategory.description}
            onChange={(e) => CategoryDataUpdate(e, "description")}
          />
          <label className="placeholder">Description</label>
        </div>
        <div className="input-container ic2">
          <input
            id="image"
            className="input"
            type="file"
            onChange={(e) => CategoryDataUpdate(e, "image")}
          />
        </div>
        <button type="submit" className="submit" onClick={UpdateHandler}>
          Category Updated
        </button>
      </div>
    </Home>
  );
}

export default EditCategory;
