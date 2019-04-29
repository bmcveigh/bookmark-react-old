import React from 'react';

import { Col, Row } from 'reactstrap';

import classes from './Homepage.css';
import Pricing from '../../components/Pricing/Pricing';
import Heading from '../../components/Heading/Heading';

function Homepage() {
  return (
    <div>
      <Row className={classes.HomepageSection}>
        <Col md={12}>
          <Heading />
        </Col>
      </Row>
      <Row>
        <Col md={12} className={classes.HomepageSection}>
          <Pricing />
        </Col>
      </Row>
    </div>
  );
}

export default Homepage;
