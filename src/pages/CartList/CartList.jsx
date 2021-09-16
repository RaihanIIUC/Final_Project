import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function CartList() {

      const { cart  } = useSelector((store) => store.cartStore);
     console.log(cart,null, ' ');

  const dispatch = useDispatch();
    useEffect(() => {
  dispatch(requestCart());

    }, [input])
    return (
        <div>
            <p>hello</p>
        </div>
    )
}

export default CartList
