import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { addUserRegistration, fetchUserFromEmail } from '../../../../store/actions/UserActions';

class AuthPage extends Component {
  componentDidMount() {
    const dispatch = this.props.dispatch;

    setTimeout(() => {
      if (typeof window !== 'undefined' && window.gapi) {
        const refreshId = setInterval(() => {
          const googleUserProfile = this.props.googleUser;

          if (googleUserProfile.getEmail) {
            dispatch(fetchUserFromEmail(googleUserProfile.getEmail()));

            if (this.props.user && !this.props.user._id) {
              const registration = {
                googleUid: googleUserProfile.getId(),
                email: googleUserProfile.getEmail(),

              };
              dispatch(addUserRegistration(registration));
            }

            if (this.props.user && this.props.user._id) {
              // clear interval
              clearInterval(refreshId);
            }
          }
        }, 500);
      }
    }, 1000);
  }

  render() {
    return (
      <div>Authenticating...</div>
    );
  }
}

function mapStateToProps(store) {
  return {
    googleUser: store.googleUser,
    user: store.user,
  };
}

AuthPage.propTypes = {
  dispatch: PropTypes.func,
  googleUser: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps)(AuthPage);
