import React from 'react'
 import "./Navbar.css";
import { Link } from 'react-router-dom';
import LogOutMenu from './LogOut';

 function Navbars() {
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
              <LogOutMenu/>
            </div>
          </div>
        </header>
      </div>
    );
}

export default Navbars
