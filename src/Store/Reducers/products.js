import {SET_SORTING , SET_PRODUCTS, SET_FILTER } from '../actions/types'
import initialState from "../initialState";
import {sortBy,reverse,uniq} from "lodash";
const {products : ProductsInit} = initialState;
const sortByAny = (payload,{list}) =>{
    switch (payload) {
        case 0:
            return sortBy(list,'offeredPrice')
        case 1:
            return reverse(sortBy(list,'offeredPrice'));
        case 2:
            return reverse(sortBy(list,'discount'));
        default:
            return sortBy(list,'offeredPrice');
    }
};
const applyFilter = (payload,list) =>{
    return list.filter(item=>item.price>payload[0] && item.price<payload[1] );
}
const update_category_list = (items) =>{
    return uniq(items.map((item)=>item.category));
}
const defaultData = products =>{
    return reverse(
                sortBy(
                        products.map(
                                product=> (
                                    {...product,
                                    offeredPrice : product.price - (product.price * product.discount)/100
                                    }) 
                                    ),
                                    'offeredPrice'
                        )
                );
} 
export default function products(products = ProductsInit, action = {}) {
	switch (action.type) {
        case SET_PRODUCTS:
            return { ...products,
                    category_list : update_category_list(action.payload),
                    list :defaultData(action.payload),
                    filterList:defaultData(action.payload) 
                    };
        case SET_SORTING:
            return { ...products,
                    sorting:action.payload,
                    filterList:applyFilter(products.filter,sortByAny(action.payload,products))
                    };
        case SET_FILTER:
            return { ...products,
                    filter:action.payload,
                    filterList:applyFilter(action.payload,sortByAny(products.sorting,products))
                    };
        default:
            return {...products};
    }
}
