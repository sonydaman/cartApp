import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'
// import {debounce,escapeRegExp,filter} from "lodash";
const initialState = {isLoading:false, results: [], value: ''};
const sampelData = products =>{
  return products.map(({id,
                        name,
                        offeredPrice,
                        category
                        ,img_url
                      })=>({
                                id: id,
                                title:name,
                                price:offeredPrice.toString(),
                                description:category,
                                image:img_url
                              })) 
  };
const SearchComp = props => {
  const {products} = props,prod = sampelData(products);
  const [search, setsearch] = useState(initialState);
  const sample = ()=>{
    console.log("asd")
  }
    return (
        <div className='SearchComponent'>
            <Input icon='search' action={{ icon: 'search', onClick:{sample} }} loading={search.isLoading} placeholder='Search...' />           
          </div>
    )
}

SearchComp.propTypes = {
    typeText : PropTypes.func.isRequired
}

export default SearchComp;
