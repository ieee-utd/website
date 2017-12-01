import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import Tooltip from 'material-ui/Tooltip';


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

const MailIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
  </SvgIcon>
)


const TutorIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
  </SvgIcon>
)

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <img src="/logo.png" alt="logo" className={classes.menuButton}/>
          <Typography type="title" color="inherit">
            <Link to="/" style={{textDecoration:'none', border:'none', color:'white', marginRight:'30px'}}>IEEE UTD</Link>
          </Typography>
          <div className={classes.flex}></div>
          <Tooltip id="tooltip-tutoring" title="View our tutoring schedules!" placement="bottom"><IconButton><Link to="/tutoring" style={{textDecoration:'none', border:'none', color:'white'}}><TutorIcon /></Link></IconButton></Tooltip>
          <Tooltip id="tooltip-tutoring" title="Join our mailing list!" placement="bottom"><IconButton><Link to="/mailing-list" style={{textDecoration:'none', border:'none', color:'white'}}><MailIcon /></Link></IconButton></Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar)