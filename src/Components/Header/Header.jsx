import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import headerStyles from "./Styles";
import { Search,CartIcon } from "../";
const Header = props => {
    const classes = headerStyles(),{props:{history}} = props,
    navigateHome = () =>{
      history.push({pathname:"/"})
    }
  return (
    
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Icon onClick={navigateHome} className={classes.logo}>star</Icon>
          </Typography>
          <Search typeText={()=>{}} products = {props.rest.products} />
          <CartIcon count={props.count} props={props} />
        </Toolbar>
      </AppBar>
    
  );
}
Header.propTypes = {
  count : PropTypes.number.isRequired
}

export default Header
