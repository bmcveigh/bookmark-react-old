import React from 'react';

import { connect } from 'react-redux';

import { Col, Row } from 'reactstrap';

import classes from './Homepage.css';
import Pricing from '../../components/Pricing/Pricing';
import Heading from '../../components/Heading/Heading';
import Benefits from '../../components/Benefits/Benefits';
import BookmarkListPage from '../../../Bookmark/pages/BookmarkListPage/BookmarkListPage';

function Homepage(props) {
  if (props.user && props.user._id) {
    return <BookmarkListPage dispatch={props.dispatch} user={props.user} />;
  }

  return (
    <div>
      <Row className={classes.HomepageSection}>
        <Col md={12}>
          <Heading />
        </Col>
      </Row>
      <Row>
        <Col md={12} className={classes.HomepageSection}>
          <Benefits />
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

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Homepage);
