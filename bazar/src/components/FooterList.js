import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({

  listItemText: {
    fontSize: '0.7em',
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
  }
});

function FooterList(props) {
  const { classes } = props;
  return (
    <Fragment>


      <List component="nav" className={classes.horizontal}>
        <ListItem component="a" href="#simple-list">
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Trash sfsdfsd fsdfasdasd asd  asd as dadasd asd asda das dad aad ad as das d asd asd as das das d as d sdasd sdfsdf " />
        </ListItem>
        <ListItem component="a" href="#simple-list">
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Spam adadasd asdasdsa dd" />
        </ListItem>

        <ListItem component="a" href="#simple-list">
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Trash sfsdfsd fsdfsdfsdf " />
        </ListItem>
        <ListItem component="a" href="#simple-list">
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Spam adadasd asdasdsa dd asfasd sad as da dasd d ada dadada das a" />
        </ListItem>

        <ListItem component="a" href="#simple-list">
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Trash sfsdfsd fsdfsdfsdf " />
        </ListItem>
        <ListItem component="a" href="#simple-list">
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Spam adadasd asdasdsa dd asfasd sad as da dasd d ada dadada das a" />
        </ListItem>



      </List>
    </Fragment>
  );
}

FooterList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterList);
