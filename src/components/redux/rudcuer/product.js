import { AccessTimeRounded } from "@mui/icons-material";

const product = [];

export const getProductData = (state = {product},action)=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS" : 
        return{product:action.payload};

        case "FAIL_GET_PRODUCTS" : 
        return{product:action.payload};

        default : return state
    }
    
}

export const getCart = (state = {product},action)=>{
    switch(action.type){
        case "CART_DATA" : 
        return{product:action.payload};

        case "FAILED_CART_DATA" : 
        return{product:action.payload};

        default : return state
    }
    
}

export const userRegister = (state={product},action)=>{
    switch(action.type){
        case "REGISTER_SUCCESS":
            return {product:action.payload};
            
            case "REGISTER_FAILED":
            return {product:action.payload}

            default : return state

    }
    
    
}


