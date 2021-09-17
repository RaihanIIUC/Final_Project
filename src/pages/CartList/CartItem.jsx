import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCart } from "../../_actions/cartActions";
import { RouterPath } from "../../_helpers/RoutePath";
 import { Wrapper } from "./CartItem.styles";


 
 
const CartItem = ( ) => {
  const dispatch = useDispatch();
  const  {products }  = useSelector((store) => store.cartStore);
   console.log(products, null, " ");



 useEffect(() => {
   dispatch(requestCart());
 }, [ ])


const removeFromCart = (id)=> {
  console.log(id,null,' ');
}
const addToCart = (item) => {
  console.log(item,null,undefined,' ');
};


  return (
    <>
    {products.map((product) => {
      return (
        <>
          <Wrapper>
            <div>
              <h3>{product.title}</h3>
              <div className="information">
                <p>Price: ${product.price}</p>
                <p>Total: $</p>
              </div>
              <div className="buttons">
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => removeFromCart(product._id)}
                >
                  -
                </Button>
                <p>amount</p>
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => addToCart(product)}
                >
                  +
                </Button>
              </div>
            </div>
            <img src={`${RouterPath.BASE_URL}${product.image}`} alt=" " />
          </Wrapper>
        </>
      );
    
    } )}
    </>
  );
};

export default CartItem;
