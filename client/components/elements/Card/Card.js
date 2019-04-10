import React from 'react';

import PropTypes from 'prop-types';
import radium from 'radium';
import { connect } from 'react-redux';

import classes from './Card.css';

function Card(props) {
  const gs = props.globalStyles;
  return (
    <div
      className={`${gs[`col-md-${props.cardWidth}`]} ${gs['bg-gray-light']} ${gs['m-medium']} ${gs['p-medium']} ${classes.Card}`}
      style={props.userPreferenceStyles.card}
    >
      <h4
        className={classes.CardHeading}
        style={props.userPreferenceStyles.cardHeading}
      >
        {props.cardHeading}
      </h4>
      <div
        className={classes.CardBody}
        style={props.userPreferenceStyles.card}
      >
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  cardHeading: PropTypes.string,
  cardWidth: PropTypes.number,
  children: PropTypes.any,
  globalStyles: PropTypes.object,
  userPreferenceStyles: PropTypes.object,
};

Card.defaultProps = {
  cardHeading: '',
  cardWidth: 4,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    userPreferenceStyles: state.styles.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(radium(Card));
