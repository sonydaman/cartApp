import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ProductStyle from "./styles"; 
const Product = props => {
    // console.log(props);
    const {detail,updateCart} = props;
    const classes = ProductStyle();
    const handelCart = async() =>{
      await updateCart(detail);
      // history.push({pathname:"/cart"});
    }
    return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={detail.img_url}
                  title={detail.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {detail.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="h3">
                    <label>
                        {/* {detail.category} */}
                        {detail.offeredPrice}
                    </label>
                    <label>   {detail.discount}%off</label>
                    {/* <label>
                        {detail.price}
                    </label> */}

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{justifyContent:'center'}}>
                <Button onClick={handelCart}  variant="contained" color="primary">
                 Buy Now
                </Button>
              </CardActions>
            </Card>
    )
}

Product.propTypes = {
    detail : PropTypes.object.isRequired,
    // cart : PropTypes.object.isRequired
}

export default Product
