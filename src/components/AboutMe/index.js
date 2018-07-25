import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import image from '../../assets/images/raghav.jpg';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 128,
    height: 128
  }
};

const AboutMe = props => {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="Raghavender Mylagary"
        src={image}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
};

export default withStyles(styles)(AboutMe);
