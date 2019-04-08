import React from 'react';

import PropTypes from 'prop-types';
import radium from 'radium';
import { connect } from 'react-redux';

function Card(props) {
  const gs = props.globalStyles;
  return (
    <div
      className={`${gs[`col-md-${props.cardWidth}`]} ${gs['bg-gray-light']} ${gs['m-medium']} ${gs['p-medium']} `}
      style={props.userPreferenceStyles.card}
    >
      {props.children}
    </div>
  );
}

Card.propTypes = {
  cardWidth: PropTypes.number,
  children: PropTypes.any,
  globalStyles: PropTypes.object,
  userPreferenceStyles: PropTypes.object,
};

Card.defaultProps = {
  cardWidth: 4,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    userPreferenceStyles: state.styles.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(radium(Card));
