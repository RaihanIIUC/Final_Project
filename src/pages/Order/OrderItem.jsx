import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 
import { RouterPath } from "../../_Redux/_helpers/RoutePath";
 import { Wrapper } from "./CartItem.styles";
 import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useHistory } from "react-router";
import { requestOrderList, requestStatusChangeAction } from "../../_Redux/_actions/OrderActions";
import { requestAddToCartAction, requestCart } from "../../_Redux/_actions/cartActions";
 
 
const OrderItem = ( ) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isCartFound, setIsFound] = useState(true);
   const { cartList } = useSelector((store) => store.cartStore);
   const { data  } = useSelector((store) => store.orderStore);

   console.log(...data, NaN);
   const  len = cartList?.length;
 
 data.map((item) => {
   console.log(item.products, undefined);
 })
  
 useEffect(() => {
   dispatch(requestCart());
   dispatch(requestOrderList());

   if (!len || !cartList) {
     history.push(`${RouterPath.PRODUCTS}`);
     setIsFound(false);
   }
   
 }, [ ])

const statusChangeHandler = (e, orderId, status) => {
  e.preventDefault();
  dispatch(requestStatusChangeAction(orderId, status));
  console.log('hello ');
};


 
 
  return (
    <>
      {!isCartFound && <>No data found</>}
      {data?.map((item) => {
        return (
          <>
            <Wrapper>
              <div>
                <h3>{item.userId.email}</h3>
                <div className="information"></div>
                <div className="buttons">
                  {item.status === 1 || item.status === 2 ? (
                    <Button
                      size="small"
                      variant="contained"
                      onClick={(e) => statusChangeHandler(e, item._id, 0)}
                    >
                      keep pending
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      vajriant="contained"
                      onClick={(e) => statusChangeHandler(e, item._id, 2)}
                    >
                      reject
                    </Button>
                  )}
                  <p> {`Items : ${item.products.length}`}</p>
                  {item.status === 2 ? (
                    <Button
                      size="small"
                      variant="contained"
                      onClick={(e) => statusChangeHandler(e, item._id, 1)}
                    >
                      confirm
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      variant="contained"
                      onClick={(e) => statusChangeHandler(e, item._id, 2)}
                    >
                      cancel
                    </Button>
                  )}
                </div>
                <p>
                  {item.status === 0
                    ? "pending"
                    : item.status === 1
                    ? "confirmed"
                    : item.status === 2
                    ? "canceled"
                    : ""}
                </p>
              </div>
            </Wrapper>
          </>
        );
      })}
      
    </>
  );
};

export default OrderItem;
