import React, { useEffect } from 'react'
 import "./Navbar.css";
import { Link } from 'react-router-dom';
import LogOutMenu from './LogOut';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
 import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { RouterPath } from '../../_helpers/RoutePath';
import { requestCart } from '../../_actions/cartActions';

  

 function Navbars() {
 const dispatch = useDispatch();
  const { cartList } = useSelector((store) => store.cartStore);

  
    const  cartLength = cartList?.length;
    useEffect(() => {
     dispatch(requestCart());
    }, [])
  
 
    return (
      <div>
        <header className="site-header">
          <div className="wrapper site-header__wrapper">
            <div className="site-header__start">
              <Link to="#" className="brand">
                Brand
              </Link>
            </div>
            <div className="site-header__middle">
              <nav className="nav">
                <button
                  className="nav__toggle"
                  aria-expanded="false"
                  type="button"
                >
                  menu
                </button>
                <ul className="nav__wrapper">
                  <li className="nav__item">
                    <Link to="home">Home</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="cart">Cart</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="product">Product</Link>
                  </li>
                  <li className="nav__item">
                    <Link to="category">Category</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="site-header__end">
              <li>
                <Link to={RouterPath.CART_LIST}>My cart</Link>
              </li>

              <li>
                <Link to="/cart">
                  <Badge
                    // onClick={gotoCart}
                    badgeContent={cartLength}
                    color="primary"
                  >
                    <ShoppingCartOutlinedIcon color="action" />
                  </Badge>
                </Link>
              </li>
              <li>
                <LogOutMenu />
              </li>
            </div>
          </div>
        </header>
      </div>
    );
}

export default Navbars
