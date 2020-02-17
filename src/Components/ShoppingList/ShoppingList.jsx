import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { Product } from "../";
const ShoppingList = props => {
    const {getProducts,products,updateCart} = props;
    
    useEffect(()=>{
        if(!products.length)
            getProducts();
    },[products,getProducts]);
    return (
        <div style={styles.shoppingListContainer}>
            {products.map(product=> <Product updateCart={updateCart} key={product.id} detail={product} {...props} />)}
        </div>
    )
}
const styles = {
    shoppingListContainer : {
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        paddingBottom: '60px'
    }
}
ShoppingList.propTypes = {
    // sortProducts : PropTypes.func.isRequired,
    // filterProducts : PropTypes.func.isRequired,
    // cart : PropTypes.object.isRequired,
    getProducts : PropTypes.func,
    updateCart : PropTypes.func.isRequired,
    products : PropTypes.array.isRequired,
}

export default ShoppingList
