import {  makeStyles } from '@material-ui/core/styles';
export default  makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo:{
      fontSize: '1.8rem',
      color: 'yellow',
      lineHeight: '1.3',
      cursor:'pointer'
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    }
  }));