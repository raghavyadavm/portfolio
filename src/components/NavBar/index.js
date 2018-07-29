import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CloudDownload from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const navBar = props => {
  const { classes } = props;
  return <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            AboutMe
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Tooltip title="Dowload">
          <IconButton color="inherit" aria-label="Download" href="http://orca.st.usm.edu/~rmylagar/RaghavenderMylagary.pdf" target="_blank" download>
            <CloudDownload />
          </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>;
};

export default withStyles(styles)(navBar);
