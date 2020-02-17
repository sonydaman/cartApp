import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    Heading:{
        padding:'8px 6px'
    },
    button:{
        borderRight: '0px !important'
    },
    selectedButton:{
        borderBottom:"1px solid",
        borderRight: '0px !important',
        fontSize:14.2
    }
  }));