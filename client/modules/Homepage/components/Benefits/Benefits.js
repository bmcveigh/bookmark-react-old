import React from 'react';

import { Card, CardBody, CardHeader, CardText, Col, Jumbotron, Row } from 'reactstrap';

import { FormattedMessage } from 'react-intl';

import classes from './Benefits.css';

function Benefits() {
  const benefits = [
    {
      title: 'Organize your bookmarks into spaces',
      description: 'Group your bookmarks into what are called spaces. Each space has its own tab.',
      rowClass: 'OrganizeBookmarks',
    },
    {
      title: 'Create categories for your bookmarks',
      description: 'Group related bookmarks into what we call categories. This allows you to group your bookmarks.',
      rowClass: 'CreateCategories',
    },
    {
      title: 'Customize the appearance',
      description: 'Customize the theme of your bookmark spaces.',
      rowClass: 'CustomizeAppearance',
    },
  ];

  return (
    <Jumbotron className={classes.Benefits}>
      <h1><FormattedMessage id="benefitsTitle" /></h1>
      <div>
        {
          benefits.map((benefit, key) => (
            <Row key={key} className={`${classes.Benefit} ${classes[benefit.rowClass]}`}>
              <Col md={3}>
                <Card className={classes.Card}>
                  <CardHeader>
                    <h3>{benefit.title}</h3>
                  </CardHeader>
                  <CardBody>
                    <CardText>{benefit.description}</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ))
        }
      </div>
    </Jumbotron>
  );
}

export default Benefits;
