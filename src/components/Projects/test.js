import React from 'react';
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import Card from '../Card/Card.jsx';
import CardBody from '../Card/CardBody.jsx';
import CardHeader from '../Card/CardHeader.jsx';

import { cardTitle } from '../../assets/jss/material-kit-react.jsx';

const style = {
  cardTitle
};

class Cards extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card style={{ width: '20rem', margin: "50px" }}>
        <CardHeader color="warning">Featured</CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>Special title treatment</h4>
          <p>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(Cards);
