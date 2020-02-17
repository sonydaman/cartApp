import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import FilterStyle  from "./Styles";
import {Conatiner} from "../../Container/"
const Filter = ({filterVal}) => {
    const {filterProducts} = Conatiner();
    const classes = FilterStyle();
    const [value, setValue] = useState(filterVal);
    const valuetext = (value) => {
        return `${value}`;
      }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const applyFilter = ()=>{
        filterProducts(value)
    }
    return (
        <div className={classes.root}>
             <Typography className={classes.labelName} id="range-slider" gutterBottom>
              Filters
            </Typography>
            <div className={classes.lablesValues}>
                <label className={classes.leftLableVal}>
                {`Rs.${value[0]}`}
                </label>
                <label className={classes.rightLableVal}>
                {`Rs.${value[1]}`}
                </label>
            </div>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
            max={filterVal[1]}
            min={filterVal[0]}
            valueLabelDisplay='off'
            /> 
            <Button onClick={applyFilter} className={classes.filterApply} variant="contained" color="primary" disableElevation>
                Apply
            </Button> 
        </div>
    )
}

Filter.propTypes = {
    filterVal : PropTypes.array.isRequired
}

export default Filter
