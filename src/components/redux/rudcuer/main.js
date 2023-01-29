import { getProductData,getCart,userRegister } from "./product";
import { combineReducers } from "redux";

export const rootRedcuer = combineReducers({
    getProductData:getProductData ,
    getCart:getCart,
    userRegister:userRegister
})