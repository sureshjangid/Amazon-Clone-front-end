import { display } from "@mui/system";
import axios from "axios";
import { GET_PRODUCT_DATA } from "./api";

// Getting a All product
export const getProductDatas = () => async (dispatch) => {
  try {
    const data = await axios.get("http://localhost:8080/getProduct");
    const res = data.data;

    console.log(res, "resres");
    dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: res });
  } catch (error) {
    console.log(error, "resres");
    dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.response });
  }
};

// Getting a single product

export const oneProduct = (id) => async (dispatch) => {
  try {
    console.log(id, "idididid");
    const getSingleProduct = await axios.get(
      `http://localhost:8080/single-product/${id}`
    );
    const resData = getSingleProduct.data;
    console.log(resData, "cart");
    dispatch({ type: "CART_DATA", payload: resData });
  } catch (error) {
    console.log(error, "cart");
    dispatch({ type: "FAILED_CART_DATA", payload: error.response });
  }
};

// Register user

export const registerUser = (userData) => async (dispatch) => {
  try {
    const register = await axios.post(
      "http://localhost:8080/register",
      userData
    );
    const storeData = register.data;
    dispatch({
      type: "REGISTER_SUCESS",
      payload: storeData,
    });
  } catch (error) {
    console.log(error,'resresres');
    dispatch({
      type: "REGISTER_FAILED",
      payload: error.response,
    });
  }
};
