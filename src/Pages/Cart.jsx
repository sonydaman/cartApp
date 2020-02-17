import React from 'react'
// import PropTypes from 'prop-types'
import { Grid, Item } from 'semantic-ui-react'
import { Layout,CartList,PriceDetails } from "../Components/";
import { Conatiner } from "../Container/";
import "../scss/Pages/cart.scss";

const Cart = props => {
  const {cart,handelProduct} = Conatiner();
  const {list : {products},total} = cart;
  // const data = [{"id":9096,"name":"Item3","price":700,"discount":22,"category":"literature","img_url":"https://i.picsum.photos/id/500/600/600.jpg"},{"id":9094,"name":"Item1","price":500,"discount":25,"category":"thriller","img_url":"https://i.picsum.photos/id/500/600/600.jpg"},{"id":9097,"name":"Item4","price":350,"discount":18,"category":"fiction","img_url":"https://i.picsum.photos/id/500/600/600.jpg"},{"id":9097,"name":"Item4","price":350,"discount":18,"category":"fiction","img_url":"https://i.picsum.photos/id/500/600/600.jpg"},{"id":9097,"name":"Item4","price":350,"discount":18,"category":"fiction","img_url":"https://i.picsum.photos/id/500/600/600.jpg"},{"id":9097,"name":"Item4","price":350,"discount":18,"category":"fiction","img_url":"https://i.picsum.photos/id/500/600/600.jpg"},{"id":9097,"name":"Item4","price":350,"discount":18,"category":"fiction","img_url":"https://i.picsum.photos/id/500/600/600.jpg"},{"id":9097,"name":"Item4","price":350,"discount":18,"category":"fiction","img_url":"https://i.picsum.photos/id/500/600/600.jpg"}];
    return (
      <Layout className="Page-Cart" cart={cart} title="Welcome to cart application" props={props}>
        <Grid columns={2} style={{width:'100%',padding:5}}>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={12} computer={10}>
                <Item.Group divided>
                  {products.map((product,key)=><CartList product={product} key={key} index={key} handelProduct={handelProduct} />)}
                </Item.Group>
              </Grid.Column>
              {/* <Grid.Column mobile={1} tablet={2} computer={2}></Grid.Column> */}
              <Grid.Column mobile={16} tablet={4} computer={6}>
                <PriceDetails {...props} total={total} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Layout>
    )
}

// Cart.propTypes = {

// }
export default Cart