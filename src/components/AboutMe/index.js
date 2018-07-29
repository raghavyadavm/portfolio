import React from 'react';
import classNames from 'classnames';
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
import Tooltip from '@material-ui/core/Tooltip';

import Work from '@material-ui/icons/Work';
import School from '@material-ui/icons/School';
import { Code } from 'styled-icons/fa-solid/Code';

import GridContainer from '../Grid/GridContainer.jsx';
import GridItem from '../Grid/GridItem.jsx';
import Button from '../CustomButtons/Button.jsx';
import NavPills from '../NavPills/NavPills.jsx';

import Card from '../Card/Card.jsx';
import CardHeader from '../Card/CardHeader.jsx';
import CardBody from '../Card/CardBody.jsx';
import Divider from '@material-ui/core/Divider';

import image from '../../assets/images/raghav.jpg';
import profilePageStyle from '../../assets/jss/material-kit-react/views/profilePage';

import { Html5 } from 'styled-icons/fa-brands/Html5';
import { Css3Alt } from 'styled-icons/fa-brands/Css3Alt';
import { Js } from 'styled-icons/fa-brands/Js';
import { Node } from 'styled-icons/fa-brands/Node';
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo';
import { Github } from 'styled-icons/fa-brands/Github';

import redux from '../../assets/images/redux.png';
import saga from '../../assets/images/redux-saga.png';
import router from '../../assets/images/router.png';
import mongo from '../../assets/images/mongo.png';
import mysql from '../../assets/images/mysql.png';
import java from '../../assets/images/java.png';
import cpp from '../../assets/images/cpp.png';
import bootstrap from '../../assets/images/bootstrap.png';
import webrtc from '../../assets/images/webrtc.png';
import GraphQL from '../../assets/images/GraphQL.png';
import spring from '../../assets/images/spring.png';
import aws from '../../assets/images/aws.png';

const AboutMe = props => {
  const { classes } = props;
  const skillsStyle = {
    placement: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  };
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return <div className={classNames(classes.main, classes.mainRaised)}>
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={image} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h1 className={classes.title}>Raghavender Mylagary</h1>
                  <h3>UI Developer</h3>
                  <Button justIcon link className={classes.margin5} href="https://github.com/raghavyadavm" target="_blank">
                    <i className={'fab fa-github'} />
                  </Button>
                <Button justIcon link className={classes.margin5} href="https://www.linkedin.com/in/raghavender-mylagary/" target="_blank">
                    <i className={'fab fa-linkedin'} />
                  </Button>
                <Tooltip title="mailto : raghavender.mylagary@usm.edu">
                  <Button justIcon link className={classes.margin5} href="mailto:raghavender.mylagary@usm.edu">
                    <i className={'fa fa-envelope'} />
                  </Button>
                </Tooltip> 
                <Tooltip title="phone number : (925) 282-9255">
                  <Button justIcon link className={classes.margin5} href="tel:9252829255">
                    <i className={'fa fa-phone-square'} />
                  </Button>
                  </Tooltip>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>
              My passion as an engineer lies in developing easy to use,
              user-friendly web applications with Open Source technologies
              dealing with real world problems.{' '}
            </p>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              <NavPills alignCenter color="primary" tabs={[{ tabButton: 'Work', tabIcon: Work, tabContent: <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="info">
                              Graduate Assistant
                            </CardHeader>
                            <CardBody>
                              <h4 style={{ color: '#9c27b0', fontFamily: `"Roboto Slab", "Times New Roman", serif` }}>
                                The University of Southern Mississippi
                              </h4>
                              <Divider />
                              <p>Aug 2016 - May 2018</p>
                              <p>Hattiesburg, MS</p>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="info">
                              Associate Software Engineer
                            </CardHeader> <CardBody>
                              <h4 style={{ color: '#9c27b0', fontFamily: `"Roboto Slab", "Times New Roman", serif` }}>
                                Accenture Solutions Pvt. ltd.
                              </h4>
                              <Divider />
                              <p>June 2015 - May 2016</p>
                              <p>Hyderabad, India</p>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="info">
                              Software Developer Intern
                            </CardHeader>
                            <CardBody>
                              <h4 style={{ color: '#9c27b0', fontFamily: `"Roboto Slab", "Times New Roman", serif` }}>
                                OpenText Technologies Pvt. ltd.
                              </h4>
                              <Divider />
                              <p>Jan 2015 - June 2015</p>
                              <p>Hyderabad, India</p>
                            </CardBody>
                          </Card>
                        </GridItem>
                      </GridContainer> }, { tabButton: 'School', tabIcon: School, tabContent: <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="success">
                              Masters in Computer Science
                            </CardHeader>
                            <CardBody>
                              <h4 style={{ color: '#9c27b0', fontFamily: `"Roboto Slab", "Times New Roman", serif` }}>
                                The University of Southern Mississippi
                              </h4>
                              <h5 style={{ color: '#f44336', fontFamily: `"Roboto Slab", "Times New Roman", serif` }}>
                                GPA : 3.9
                              </h5>
                              <Divider />
                              <p>Aug 2016 - May 2018</p>
                              <p>Hattiesburg, MS</p>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="success">
                              Bachelors in Computer Science
                            </CardHeader>
                            <CardBody>
                              <h4 style={{ color: '#9c27b0', fontFamily: `"Roboto Slab", "Times New Roman", serif` }}>
                                Jawaharlal Nehru Tech. University
                              </h4>
                              <h5 style={{ color: '#f44336', fontFamily: `"Roboto Slab", "Times New Roman", serif` }}>
                                GPA : 3.5
                              </h5>
                              <Divider />
                              <p>Aug 2011 - May 2015</p>
                              <p>Hyderabad, India</p>
                            </CardBody>
                          </Card>
                        </GridItem>
                      </GridContainer> }, { tabButton: 'Skills', tabIcon: Code, tabContent: <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="danger">
                              ReactJS Stack
                            </CardHeader>
                            <CardBody>
                              <div style={skillsStyle.placement}>
                                <ReactLogo size="40" title="ReactJS" css="color: #00d8ff;" />
                                <img alt="redux" title="redux" src={redux} style={{ height: '40px', width: '40px' }} />
                                <img alt="redux-saga" title="redux-saga" src={saga} style={{ height: '40px', width: '40px' }} />
                                <img alt="react-router" title="react-router" src={router} style={{ height: '40px', width: '40px' }} />
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="danger">Languages</CardHeader>
                            <CardBody>
                              <div style={skillsStyle.placement}>
                                <Js size="40" title="JavaScript" css="color: #f7df1e;" />
                                <img alt="java" title="java" src={java} style={{ height: '40px', width: '40px' }} />
                                <img alt="c++" title="c++" src={cpp} style={{ height: '40px', width: '40px' }} />
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="danger">
                              Web Technologies
                            </CardHeader>
                            <CardBody>
                              <div style={skillsStyle.placement}>
                                <Html5 size="40" title="HTML5" css="color: #e34f26;" />
                                <Css3Alt size="40" title="HTML5" css="color: #0872b9;" />
                                <img alt="bootstrap" title="bootstrap" src={bootstrap} style={{ height: '40px', width: '40px' }} />
                                <img alt="webrtc" title="webrtc" src={webrtc} style={{ height: '40px', width: '40px' }} />
                                <Node size="40" title="NodeJS" css="color: #215732;" />
                                <img alt="GraphQL" title="GraphQL" src={GraphQL} style={{ height: '40px', width: '40px' }} />
                                <img alt="spring" title="spring" src={spring} style={{ height: '40px', width: '40px' }} />
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="danger">
                              Databases & Technologies
                            </CardHeader>
                            <CardBody>
                              <div style={skillsStyle.placement}>
                                <img alt="mysql" title="mysql" src={mysql} style={{ height: '40px', width: '40px' }} />
                                <img alt="mongodb" title="mongodb" src={mongo} style={{ height: '40px', width: '40px' }} />
                                <Github size="40" title="Github" css="color: black;" />
                                <img alt="aws" title="aws" src={aws} style={{ height: '40px', width: '40px', backgroundColor: 'black' }} />
                              </div>
                            </CardBody>
                          </Card>
                        </GridItem>
                      </GridContainer> }]} />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>;
};

export default withStyles(profilePageStyle)(AboutMe);
