import React from 'react';

import { Card, Col, Jumbotron, Row } from 'reactstrap';

import classes from './Pricing.css';

function Pricing() {
  return (
    <Jumbotron className={classes.Pricing}>
      <h1>Pricing</h1>
      <p>Below are the plans that we offer.</p>
      <Row>
        <Col md={4}>
          <Card>
            <h3>Basic</h3>
            <span>$0.00 /month</span>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <h3>Premium</h3>
            <span>$0.99 /month</span>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <h3>Enterprise</h3>
            <span>$1.99 /month</span>
          </Card>
        </Col>
      </Row>
    </Jumbotron>
  );
}

export default Pricing;
