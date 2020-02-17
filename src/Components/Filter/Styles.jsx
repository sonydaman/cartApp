import {  makeStyles } from '@material-ui/core/styles';
export default  makeStyles(theme => ({
    root:{
        padding : '12px',
        borderRightStyle : 'solid',
        borderColor:"#cdcdcd",
        border:'2px',
        height:'100vh',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'column'
    },
    labelName:{
        fontSize:'18px',
        fontWeight:'bold'
    },
    lablesValues:{
        padding: '0 15px',
        width: '100%'
    },
    leftLableVal:{
        float:'left'
    },
    rightLableVal:{
        float:'right'
    },
    filterApply:{
        borderRadius: '20px',
        width: '70%',
        marginTop:20
    }
}));