import { useSelector, useDispatch } from 'react-redux';
import { SET_PRODUCTS,SET_SORTING,SET_FILTER,SET_CART,SET_UPDATED_CART } from "../Store/actions/types";
import Api from "../Services/";
import {PRODUCTLIST} from "../config/"; 
const Conatiner = ()=>{
    const products = useSelector((state = {}) => state.products.filterList);
    const cart = useSelector((state = {}) => state.cart);
    const dispatch = useDispatch();
    const getProducts = async () =>{
        const res = await Api().get(PRODUCTLIST);
        dispatch({
            type: SET_PRODUCTS,
            payload:res.data
		});
    }
    const sortProducts = (input=0) =>{
        dispatch({
            type: SET_SORTING,
            payload:input
		});
    }
    const filterProducts = (input) =>{
        dispatch({
            type: SET_FILTER,
            payload:input
		});
    }
    const updateCart = (input={}) =>{
        dispatch({
            type: SET_CART,
            payload:input
		});
    }
    const handelProduct = (product={},handelProd,key) =>{
        dispatch({
            type: SET_UPDATED_CART,
            payload:{product,handelProd,key}
		});
    }

    return { products,getProducts,cart,handelProduct,sortProducts,filterProducts,updateCart }
}

export default Conatiner;
