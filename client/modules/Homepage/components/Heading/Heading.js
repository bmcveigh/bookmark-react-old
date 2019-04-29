import React from 'react';

import { Link } from 'react-router';

import { Jumbotron } from 'reactstrap';

import { FormattedMessage } from 'react-intl';

import classes from './Heading.css';

function Heading() {
  return (
    <Jumbotron className={classes.Heading}>
      <h1>Welcome to <FormattedMessage id="siteTitle" /></h1>
      <p><FormattedMessage id="siteSlogan" /></p>
      <hr />
      <Link to="/membership" className="btn btn-danger">Get Started</Link>
    </Jumbotron>
  );
}

export default Heading;
