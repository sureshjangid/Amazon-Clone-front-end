import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
// import { products } from '../home/productdata';
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { oneProduct } from "../redux/action/action";
// import { useHistory, useParams } from 'react-router';
// import CircularProgress from '@mui/material/CircularProgress';
// import { Logincontext } from "../context/Contextprovider";

const Product = () => {

  const getSingleData = useSelector(state=>state.getCart)
  console.log(getSingleData,'getSingleDatagetSingleData')
  const dispatch = useDispatch()
  const {id} = useParams();
  useEffect(()=>{
    console.log(id,'id')
    dispatch(oneProduct(id))
},dispatch)

  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src={getSingleData?.product?.url} alt="cart" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>{getSingleData?.product?.title?.shortTitle}</h3>
          <h4>
            {
              getSingleData?.product?.title?.longTitle
            }
          </h4>
          <Divider />
          <p className="mrp">
            M.R.P. : <del>₹{getSingleData?.product?.price?.mrp}</del>
          </p>
          <p>
            Deal of the Day :{" "}
            <span style={{ color: "#B12704" }}>₹{getSingleData?.product?.price?.cost}.00</span>
          </p>
          <p>
            You save :{" "}
            <span style={{ color: "#B12704" }}>
              {" "}
              ₹{getSingleData?.product?.price?.mrp - getSingleData?.product?.price?.cost}
            </span>
          </p>

          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#B12704" }}>{getSingleData?.product?.price?.discount}</span>{" "}
            </h5>
            <h4>
              FREE Delivery :{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                Oct 8 - 21
              </span>{" "}
              Details
            </h4>
            <p style={{ color: "#111" }}>
              Fastest delivery:{" "}
              <span style={{ color: "#111", fontWeight: "600" }}>
                {" "}
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Iteam :{" "}
            <span
              style={{
                color: "#565959",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.4px",
              }}
            >
              {
                getSingleData?.product?.description
              }
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
