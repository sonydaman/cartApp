import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import sortStyles from "./Styles";

const Sort = props => {
    const {sortProducts} = props,
        classes = sortStyles(),
        [Select,setSelect] = useState(0),
        price = (input) =>{
            if(input){
                setSelect(1)
                sortProducts(0)
            }
            else{
                setSelect(0)
                sortProducts(1)
            }
        },
        discount = () =>{
            setSelect(2)
            sortProducts(2)
        }
    return (
        <div className={classes.root}>
          <h3 className={classes.Heading}>
            Sort By
          </h3>
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button className={Select === 0 ? classes.selectedButton : classes.button} onClick={()=>price(0)}>Price -- High Low</Button>
            <Button className={Select === 1 ? classes.selectedButton : classes.button} onClick={()=>price(1)}>Price -- Low High</Button>
            <Button className={Select === 2 ? classes.selectedButton : classes.button} onClick={discount}>Discount</Button>
        </ButtonGroup>  
        </div>
    )
}

Sort.propTypes = {
    sortProducts : PropTypes.func.isRequired
}

export default Sort
