import { QrCodeScannerOutlined } from "@mui/icons-material";
import { Divider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerUser } from "../redux/action/action";
import "./signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [success,setSuccess] = useState('');

 const userRegister = useSelector(state=>state.userRegister.product.status)
console.log(userRegister,'userRegisteruserRegisteruserRegister')
  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault()
    const { name, email, password, mobile } = udata;
    
    const userData = {
      name: name,
      email: email,
      password: password,
      mobile: mobile, 
    };
    dispatch(registerUser(userData))
  };

  
  return (
    <section>
     
      <div className="sign_container">
        <div className="sign_header">
          <img src="../bannerImage/blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form onSubmit={(e)=>senddata(e)}>
            <h1>Create account</h1>
            <div className="form_data">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                name="name"
                onChange={adddata}
                value={udata.name}
                id="name"
                required
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                onChange={adddata}
                value={udata.email}
                id="email"
                required
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile number</label>
              <input
                type="number"
                name="mobile"
                onChange={adddata}
                value={udata.mobile}
                id="mobile"
                required
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={udata.password}
                id="password"
                placeholder="password"
                required
              />
            </div>

            <button
              type="submit"
              className="signin_btn"
              
            >
              Continue
            </button>

            <Divider />

            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/sign-in">Sign in</NavLink>
            </div>
          </form>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </section>
  );
};

export default Signup;
