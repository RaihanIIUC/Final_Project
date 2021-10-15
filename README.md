# ClothShop


##Backend Node Js Project

Open [https://github.com/arnab-shuvo/fakecommerce](https://github.com/arnab-shuvo/fakecommerce) from here.

### `Why ?`

While taking course from Dev skill on React Js .

As we compelete most of the basic things but how can we chellenge our learning knowledge\
To make every thing in a bucket , we are given a final Assignment to compelete with time limit.\
So build this dummy project with most of the ecommerce functinality .

Hope it will help other's as well.

### `How to `

 we fetch the data from backend and use Redux to store the data.\
 
 you can also use (fetch API, Axios, jquery ajax,...).

### `Pre-requisites`
 
 - Javascript
 - React 
 - Redux
 - Material Ui
 - Html 
 
### `How to Run `

 1. At first clone this project.
 2. Run  `Yarn` or `npm install` to install the dependencies(Recommendated `Yarn` uses)
 3. Once installed , run `Yarn start ` 
  
 

# Get all products

 ```
export const getAllProductAction = () => {
 return async (dispatch, getState) => {
 const { userStore } = getState();
 const { user } = userStore;
 const { userInfo } = user;

   
 const { token } = userInfo;  
 
 const bearerToken = () => {
     return `bearer ${token}`;
   };
   try {
     const response = await axios.get("http://localhost:8080/products", {
       headers: {
         Authorization: bearerToken(),
       },
     });

     dispatch(setAllProductSuccess(response.data));
   } catch (error) {
     dispatch(setAllProductFailed(error.response));
   }
 };
};
```

# Get a single product
 
 ```  
 export const requestProductDetails = (pid) => {
 return async (dispatch, getState) => {
    const { userStore } = getState();
    const { user } = userStore;
    const { userInfo } = user;
    const { token } = userInfo;  
   const bearerToken = () => {
     return `bearer ${token}`;
   };
   try {
     const response = await axios.get(`http://localhost:8080/products/${pid}`);

     dispatch(setCurrentProductSuccess(response.data));
     Swal.fire("Good job!", `product  getting success`, "success");
   } catch (error) {
     dispatch(setCurrentProductFailed(error.response));
     Swal.fire("Failed", `product  getting Failed`, "error");
   }
 };
};
 
 ```

### Add new product
`
Required Admin User account with bearer token 
`

``` 

export const productAddAction = (product  ) => {
 return async (dispatch, getState) => {
 const { userStore } = getState();
 const { user } = userStore;
 const { userInfo } = user;
 const { token } = userInfo;  

   if (!token) {
          Swal.fire(`Please Login first`, "Product add Failed", "error");

     history.push("/");
   }
   const bearerToken = () => {
     return `bearer ${token}`;
   };
   try {
     const response = await axios.post(
       "http://localhost:8080/products",
       {
         title: product.title,
         price: parseInt(product.price, 10),
         description: product.description,
         image: product.image,
         stock: product.stock,
         category: {
           _id: product.category._id,
         },
       },
       {
         headers: {
           Authorization: bearerToken(),
         },
       }
     );
     dispatch(setProductData(response.data));
     Swal.fire("Good job!", `${product.title} Added Successfully`, "success");
   } catch (error) {
     dispatch(setProudctInsertError(error.response));
     Swal.fire(`${error.response}`, "Product add Failed", "error");
   }
 };
 };


```

 
 `
 Redux payload
 `
 
 ```
 export const setProductData = (category) => {
  return {
    type: ActionType.PRODUCT_ADD_SUCCESSFULLY,
    payload: category,
  };
};
export const setProudctInsertError = (error) => {
  return {
    type: ActionType.PRODUCT_ADD_FAILED,
    payload: error,
  };
};

 
 ```
 
 `
 Product Reducers
 `
 
 ``` 
 
const productReducer = (state = productState, action) => {
  switch (action.type) {
    case ActionType.PRODUCT_ADD_SUCCESSFULLY:
      return { ...state, product: action.payload };
    case ActionType.PRODUCT_ADD_FAILED:
      return { ...state, error: action.payload };
    case ActionType.ALL_PRODUCT_GETTING_SUCCESS:
      return { ...state, products: action.payload };
    case ActionType.ALL_PRODUCT_GETTING_FAILED:
      return { ...state, error: action.payload };
    case ActionType.PRODUCT_DETAILS_SUCCESS:
      return { ...state, currentProduct: action.payload };
    case ActionType.PRODUCT_UPDATED_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
 
 ```
 
 
  

 

# Cart 
`
Get Cart
`

* Required user bearer Token *

```
export const requestCart = () => {
  return async (dispatch, getState) => {
    const { userStore} = getState();
    const { user } = userStore;
    const { userInfo } = user;
    console.log(userInfo,NaN);
    const { token } = userInfo;    
      const bearerToken = () => {
       return `bearer ${token}`;
     };
     try {
      const response = await axios.get("http://localhost:8080/cart",{
        headers: {
          Authorization: bearerToken(),
        },
      });
      dispatch(setCart(response.data));
 
    }catch (err) {
         Swal.fire(`${err}`, `Request Cart Failed`, "error");
    }
  };
};
 

```

` Redux `
** Payload **
 ``` 
  export const setCart = (data) => ({
   type: ActionType.CART_REQUEST_SUCCESS,
   payload: data.products,
 });

 ```
 
 ** Cart Reducers **
 ``` 
 const cartReducer = (state = cartstate, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return { ...state, cart: action.payload };
   case ActionType.CART_REQUEST_SUCCESS: 
      return { ...state, cartList: action.payload };
   case ActionType.CART_CHECKOUT: 
      return {...state, checkOut : action.payload }; 
    default:
      return state;
  }
};
 
 ```
 
 ` Add to Cart`
 
 ```
 
 export const requestAddToCartAction = (item, quantity, firstAdd) => {
    const id = item._id;
   return async (dispatch, getState) => {
   const { userStore } = getState();
   const { user } = userStore;
   const { userInfo } = user;
   const { token } = userInfo; 
      const bearerToken =() => { return `bearer ${token}`;};
     try {
       const response = await axios.post(
         `${RouterPath.BASE_URL}/cart`,
         {
           product: {
             id: id,
             quantity: parseInt(quantity, 10),
           },
         },
         {
           headers: {
             Authorization: bearerToken(),
           },
         }
       );

       dispatch(setAddToCart(response.data));
        dispatch(requestCart());
       if (quantity < 2 && firstAdd) {
         Swal.fire({
           title: `${item.title}`,
           text: `${item.title} Added to Cart`,
           imageUrl: `http://localhost:8080${item?.image}`,
           imageWidth: 400,
           imageHeight: 200,
           imageAlt: "Custom image",
         });
       }
       if (quantity < 1) {
         Swal.fire({
           title: `${item.title}`,
           text: `${item.title} Deleted from  Cart`,
           imageUrl: `http://localhost:8080${item?.image}`,
           imageWidth: 400,
           imageHeight: 200,
           imageAlt: "Custom image",
         });
       }
     } catch (error) {
        Swal.fire(`${error}`, "Add to Cart Failed", "error");
     }
   };
};

 ```
` Redux Payload `

``` 
export const setAddToCart = (data) => ({
  type: ActionType.ADD_TO_CART,
  payload: data.products,
});

```

