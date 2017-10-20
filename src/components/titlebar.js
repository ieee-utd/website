import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1
  },
  menuButton: {
    width: 30,
    heigth: 30,
    marginLeft: 12,
    marginRight: 20,
  }
}

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          {/* <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <img src="https://www.ieeeutd.org/logo.png" alt="logo" className={classes.menuButton}/>
          <Typography type="title" color="inherit">
            <Link to="/" style={{textDecoration:'none', border:'none', color:'white', marginRight:'30px'}}>IEEE UTD</Link>
          </Typography>
          <div className={classes.flex}></div>
          <Button color="contrast"><Link to="/mailing-list" style={{textDecoration:'none', border:'none', color:'white'}}>Sign up!</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar)