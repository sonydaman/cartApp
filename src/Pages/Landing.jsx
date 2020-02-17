import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Layout,Filter,Sort,ShoppingList } from "../Components/";
import { CONFIG } from "../config/";
import { Conatiner } from "../Container/";
import "../scss/Pages/landing.scss";
const Landing = props => {
    const {filterRange} = CONFIG;
    const {cart,...rest} = Conatiner();
    return (
        <Layout cart={cart} className="Page-Landing" title="Welcome to cart application" props={props} rest={rest}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={2}>
                    <Filter filterVal={filterRange} />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Sort sortProducts={rest.sortProducts}/>
                    <ShoppingList {...rest} cart={cart} {...props} />
                </Grid>
            </Grid>    
        </Layout>
    )
}

export default Landing
