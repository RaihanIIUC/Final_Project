import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestCart,
  requestAddToCartAction,
} from "../../_actions/cartActions";
import { RouterPath } from "../../_helpers/RoutePath";
 import { Wrapper } from "./CartItem.styles";
 import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
 
 
const CartItem = ( ) => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((store) => store.cartStore);

   const len = cartList.length;
  console.log(cartList, null, null, " ");
  console.log(len, null, null, " products in cart");

 


 useEffect(() => {
   dispatch(requestCart());
 }, [ ])

const addToCart = (e, productId, existingQuantity) => {
  e.preventDefault();
  dispatch(requestAddToCartAction(productId, existingQuantity + 1));
  console.log(existingQuantity + 1, null, undefined, ' ');
};


const removeFromCart = (e, productId, existingQuantity )=> {
    e.preventDefault();
   dispatch(requestAddToCartAction(productId, existingQuantity - 1));
 console.log(existingQuantity-1, null, ' ');
 }

 const deleteHandler = ( productId) => {
   dispatch(requestAddToCartAction(productId, 0));
   console.log('product remove from cart');
 }

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
                  <p>Total: ${product.productId.price * product.quantity}</p>
                </div>
                <div className="buttons">
                  <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={(e) =>
                      removeFromCart(e, product.productId._id, product.quantity)
                    }
                  >
                    -
                  </Button>
                  <p>{product.quantity}</p>
                  <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={(e) =>
                      addToCart(e, product.productId, product.quantity)
                    }
                  >
                    +
                  </Button>
                </div>
                <p  onClick={() => deleteHandler(product.productId)}>
                  <DeleteForeverIcon
                                     />
                </p>
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
