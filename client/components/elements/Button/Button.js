import React from 'react';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import radium from 'radium';

import classes from './Button.css';

function Button(props) {
  const globalStyles = props.globalStyles || {};

  return (
    <button
      className={`${globalStyles.button} ${globalStyles['button--small']} ${classes.Button}`}
      onClick={props.click}
      style={props.userPreferenceStyles.button}
    >
      <FormattedMessage id={props.labelId} />
    </button>
  );
}

Button.propTypes = {
  click: PropTypes.func,
  globalStyles: PropTypes.object,
  labelId: PropTypes.string.isRequired,
  userPreferenceStyles: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    userPreferenceStyles: state.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(radium(Button));
