import React from 'react'
import PropTypes from 'prop-types'
import { Segment,Item,Button,Icon } from 'semantic-ui-react'
import "../../scss/Component/CartList.scss";
const CartList = ({product,handelProduct,index}) =>{
    const handelCart = input =>{
      if(input)
        handelProduct(product,1,index)
      else
        handelProduct(product,0,index)
    }
    const removeProductFromCart = event =>{
      event.preventDefault();
      handelProduct(product,2,index)
    }
    return(
      <Segment className="CartList">
          <Item>
            <Item.Image size='small' src={product.img_url} />
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>{product.name}</Item.Header>
              <Item.Meta>
                <div className="meta-label">
                  <label className="price">
                    <Icon size='small' name="rupee sign" className="price-icon" />
                    {product.offeredPrice}
                  </label>
                  {product.discount !== 0 &&
                    (<>
                      <label className="original-price">{product.price}</label>
                      <label className="discount-price">{product.discount}% off </label>
                    </>)
                  }
                </div>
                <div className="meta-actions">
                    <Button onClick={()=>handelCart(0)} basic circular icon='minus' /> 
                    <input className="input" type="text" value={product.count} disabled="disabled" />
                    <Button onClick={()=>handelCart(1)} basic circular icon='add' />
                </div>
                <div className="meta-remove">
                  <a href="/" onClick={removeProductFromCart} className="meta-remove-link"> Remove </a>
                </div>
              </Item.Meta>
            </Item.Content>
          </Item>
      </Segment>
    )
  }
CartList.propTypes = {
    product : PropTypes.object.isRequired
}
export default CartList;