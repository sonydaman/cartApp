import {SET_CART,SET_UPDATED_CART} from '../actions/types.js'
import initialState from "../initialState";
import {filter,findIndex,reduce} from "lodash";
const {cart : CartInit} = initialState;
const getTotal = (products,key='count')=>reduce(products,(sum,product)=>(
        key === "count" ? sum+product[key] : sum+(product[key] * product.count)     
    ),0);
const getAllTotal = products =>({ Items : getTotal(products),
    Price : getTotal(products,'price'),
    OfferedPrice : getTotal(products,'offeredPrice')
   });
const updateCartList = (products,product) => {
    const isProduct = filter(products,product);
    const index = findIndex(products,product);
    if(isProduct.length && products[index] !== undefined)
        products[index] = {...product,count:products[index].count+1}
    else
        products.push({...product,count:1})
    return { products , total:{...getAllTotal(products)}}
}
export default function cart(cart = CartInit, {type,payload}) {
    const {list} =  cart;
    switch (type) {
        case SET_CART:
            const {products , total} = updateCartList(list.products,payload);
            return { ...cart,list:{products},total };
        case SET_UPDATED_CART:
            const {product,handelProd,key} = payload;
            switch (handelProd) {
                case 0:
                    product.count = product.count-1
                    if(product.count === 0)
                        list.products.splice(key,1);
                    break;
                case 1:
                    product.count = product.count+1
                    break;
                case 2:
                    list.products.splice(key,1);
                    break;
                default:break;
            }
            return { ...cart,list,total:{...getAllTotal(list.products)} };
        default:
            return {...cart}
    }
}