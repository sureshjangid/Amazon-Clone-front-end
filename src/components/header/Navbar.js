import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import Badge from "@mui/icons-material/Badge";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/">
              <img src="../bannerImage/amazon_PNG25.png" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/sign-in">Sign in</NavLink>
          </div>
          <NavLink to="/cart" className="cart_btn">
            {/* <Badge BadgeContent={4} color="primary"> */}
            <ShoppingCartIcon id="icon" />
            {/* </Badge> */}
            <p >Cart</p>
          </NavLink>
          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
