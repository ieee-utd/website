import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    width: 'calc(100vw * (1/3) - 20px)',
    minWidth: 300,
    maxWidth: 350,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

function SimpleCard(props) {
  const classes = props.classes;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography style={{color:'#01579B'}} type="headline" component="h2">
            {props['title']}
          </Typography>
          <Typography type="body1" className={classes.pos}>
            {props['position']}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);