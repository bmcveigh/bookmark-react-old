import React from 'react';

import { Card, Col, Jumbotron, Row } from 'reactstrap';

import { FormattedMessage } from 'react-intl';

import classes from './Benefits.css';

function Benefits() {
  const benefits = [
    {
      title: 'Organize your bookmarks into spaces.',
      description: 'Group your bookmarks into what are called spaces. Each space has its own tab.',
    },
    {
      title: 'Customize the appearance',
      description: 'Customize the theme of your bookmark spaces',
    },
  ];

  return (
    <Jumbotron className={classes.Benefits}>
      <h1><FormattedMessage id="benefitsTitle" /></h1>
      <div>
        {
          benefits.map((benefit, key) => (
            <Row key={key} className={classes.Benefit}>
              <Col md={3}>
                <Card className={classes.Card}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
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
