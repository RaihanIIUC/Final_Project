import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../components/Layout/Sidebar';
import { getAllProductAction } from '../../../_actions/productAction';

function Products() {
     const dispatch = useDispatch();
         dispatch(getAllProductAction());
      const { products  } = useSelector((store) => store.productStore);

    useEffect(() => {
     
    }, [])
      
   console.log(products,'=====');


    return (
      <div>
        <Sidebar>
          {products.map((product) => {
            <p>{product.title}</p>;
          })}
        </Sidebar>
      </div>
    );
}

export default Products
