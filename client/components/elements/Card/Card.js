import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Card(props) {
  const gs = props.globalStyles;
  return (
    <div
      className={`${gs[`col-md-${props.cardWidth}`]} ${gs['bg-gray-light']} ${gs['m-medium']} ${gs['p-medium']} `}
    >
      {props.children}
    </div>
  );
}

Card.propTypes = {
  cardWidth: PropTypes.number,
  children: PropTypes.any,
  globalStyles: PropTypes.object,
};

Card.defaultProps = {
  cardWidth: 2,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
  };
}

export default connect(mapStateToProps)(Card);
