import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import "./Header.css";

const Header = () => {
  const { cart, user } = useStateValue()[0];

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user ? "/login" : "/"} className="header__link">
          <div onClick={user ? () => auth.signOut() : null} className="header__option">
            <span className="header__optionLineOne">Hello, {user && user.email}</span>
            <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/cart" className="header__link">
          <div className="header__optionCart">
            <ShoppingCart />
            <span className="header__optionLineTwo header__cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
