import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { requestProductDetails } from "../../_Redux/../_actions/productAction";
import Loader from "../../_Redux/../components/Loader/Loader";


const ProductDetails = () => {
  const dispatch = useDispatch();
  const [restloader, setrestLoader] = useState(true);

  const { currentProduct } = useSelector((store) => store.productStore);
  const [found, setFound] = useState(false);
  const { _id } = useParams();
    const product = currentProduct;
    console.log(product,null,' current')

  useEffect(() => {
    dispatch(requestProductDetails(_id));
    setInterval(() => {
      setrestLoader(false);
      setFound(true);
    }, 2000);
  }, [restloader, found]);

 
  return restloader ? (
    <Loader />
  ) : (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item md={12}>
        <Grid item md={12}>
          <p>Shirt Detail </p>
        </Grid>
      </Grid>
      <Grid item md={5}>
        {found && (
          <>
            <p>{product?.name}</p>
            <p>{product.category.name}</p>

            <img
              src={`http://localhost:8080${product?.image}`}
              style={{ width: "100%" }}
              alt={" it api "}
            />
            <p>{product.price}</p>
            <Button variant="outlined" color="primary">
              <Link to={`/product_edit/${product._id}`}>Edit</Link>
            </Button>
            <Button variant="outlined" color="link">
              <Link to={`/product_delete/${product._id}`}>Delete </Link>
            </Button>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
