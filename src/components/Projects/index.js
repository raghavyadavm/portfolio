import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Card from './Card';
import data from './data';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  }
});

const Projects = props => {
  const { classes } = props;
  let card = data.map(data => (
    <Card
      key={data.title}
      title={data.title}
      description={data.description}
      technologies={data.technologies}
      srcLink={data.srcLink}
      // demoLink={data.demoLink}
    />
  ));

  return <div className={classes.root}>{card}</div>;
};

export default withStyles(styles)(Projects);
