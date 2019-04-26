import React from 'react';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import radium from 'radium';
import { Link } from 'react-router';

function ButtonLink(props) {
  const globalStyles = props.globalStyles || {};

  return (
    <Link
      to={props.to}
      className={`${globalStyles.button} ${globalStyles['button--small']}`}
      style={props.userPreferenceStyles.button}
    >
      <FormattedMessage id={props.labelId} />
    </Link>
  );
}

ButtonLink.propTypes = {
  click: PropTypes.func,
  globalStyles: PropTypes.object,
  labelId: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  userPreferenceStyles: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    userPreferenceStyles: state.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(radium(ButtonLink));
