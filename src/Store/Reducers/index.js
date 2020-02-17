import { combineReducers } from 'redux'
import products from './products.js'
import cart from './cart.js'
import search from './search.js'

const reducer = combineReducers({
    products,
    cart,
    search
})

export default reducer