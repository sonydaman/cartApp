import React from 'react'
import PropTypes from 'prop-types'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import cartIconStyles from "./Styles";
const CartIcon = ({count,props}) => {
    const classes = cartIconStyles(),
        {props:{history}} = props,
        handelCart=()=>history.push({pathname:'/cart'})
    return (
        <Badge onClick={handelCart} badgeContent={count} color="secondary">
          <ShoppingCartIcon className={classes.cartIcon}  />  
        </Badge>
    )
}

CartIcon.propTypes = {
    count : PropTypes.number
}

export default CartIcon
