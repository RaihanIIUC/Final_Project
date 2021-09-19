import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCart } from "../../_actions/cartActions";
import { RouterPath } from "../../_helpers/RoutePath";
 import { Wrapper } from "./CartItem.styles";


 
 
const CartItem = ( ) => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((store) => store.cartStore);

   const len = cartList.length;
  console.log(cartList, null, null, " ");
  console.log(len, null, null, " products in cart");

 


 useEffect(() => {
   dispatch(requestCart());
 }, [ ])


const removeFromCart = (id)=> {
  console.log(id,null,' ');
}
const addToCart = (item) => {
  console.log(item,null,undefined,' ');
};

 cartList.map((product) => {
   const products = product.productId;

   console.log(products, null, undefined, "");
 });
  return (
    <>
      {cartList.map((product) => {
        
        return (
          <>
            <Wrapper>
              <div>
                <h3>{product.productId.title}</h3>
                <div className="information">
                  <p>Price: ${product.productId.price}</p>
                  <p>Total: $</p>
                </div>
                <div className="buttons">
                  <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(product.productId._id)}
                  >
                    -
                  </Button>
                  <p>amount</p>
                  <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(product.productId)}
                  >
                    +
                  </Button>
                </div>
              </div>
              <img
                src={`${RouterPath.BASE_URL}${product.productId.image}`}
                alt=" "
              />
            </Wrapper>
          </>
        );
      })}
    </>
  );
};

export default CartItem;
