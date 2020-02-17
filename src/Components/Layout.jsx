import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import { Header,Footer } from "./";
const Layout = props => {
    document.title = props.title ?? 'Cart App';
    const {cart : {total : {Items}}} = props
    return (
        <Fragment>
        <Header count={Items} {...props} />
        <div {...props}>
            {props.children}
        </div>
        <Footer />
        </Fragment>
    )
}

Layout.propTypes = {
    title : PropTypes.string,
    cart : PropTypes.object.isRequired
}

export default Layout
