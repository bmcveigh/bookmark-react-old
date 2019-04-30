import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';

import { Button, Col, Form, FormGroup, Row } from 'reactstrap';

import { addUserRegistration } from '../../../../store/actions/UserActions';
import classes from './RegistrationPage.css';


export class RegistrationPage extends Component {

  handleFormSubmit = () => {
    const usernameRef = this.refs.username.value;
    const emailRef = this.refs.email.value;
    const passRef = this.refs.pass.value;

    const data = {
      username: usernameRef,
      email: emailRef,
      pass: passRef,
    };

    if (usernameRef && emailRef && passRef) {
      // todo: register the user.
      addUserRegistration(data);
    }
  };

  render() {
    return (
      <Row>
        <Col className={classes.RegistrationFormWrapper} md={4}>
          <h3>Registration</h3>
          <Form className={classes.RegistrationForm}>
            <FormGroup>
              <input ref="username" className="form-control" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <input placeholder={"Email"} className="form-control" ref="email" />
            </FormGroup>
            <FormGroup>
              <input type="password" placeholder="Password" ref="pass" className="form-control" />
            </FormGroup>
            <FormGroup>
              <Button
                color="primary"
                onClick={this.handleFormSubmit}
              >
                <FormattedMessage id="register" />
              </Button>
              <Link to="/" className={classes.CancelLink}>
                <FormattedMessage id="cancel" />
              </Link>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }

}

// Retrieve data from store as props
function mapStateToProps() {
  return {
    user: [],
  };
}

export default connect(mapStateToProps)(RegistrationPage);
