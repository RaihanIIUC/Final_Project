import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 
import { RouterPath } from "../../_helpers/RoutePath";
 import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useHistory } from "react-router";
import { Wrapper } from "../CartList/CartItem.styles";
 
import Home from "../Home/Home";
import { getAllCategoryAction, requestDeleteCategory } from "../../_actions/categoryAction";

const CategoryList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { categorys } = useSelector((store) => store.categoryStore);

   

  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, []);

 const deleteHandler = (categoryId, category) => {
   dispatch(requestDeleteCategory(categoryId, category));
   console.log("category remove from cart");
 }; 
  
  return (
    <Home>
      {categorys.map((category) => {
        return (
          <>
            <Wrapper>
              <div>
                <h3>{category.name}</h3>
                <div className="information">
                  <p>{category.description}</p>
                </div>
                <div className="buttons"></div>
                <p onClick={() => deleteHandler(category._id, category)}>
                  <DeleteForeverIcon />
                </p>
              </div>
              <Button>Edit</Button>
            </Wrapper>
          </>
        );
      })}
    </Home>
  );
};

export default CategoryList;
