import React from 'react';

import PropTypes from 'prop-types';
import radium from 'radium';
import { connect } from 'react-redux';

import classes from './Card.css';
import HoverTooltip from '../HoverTooltip/HoverTooltip';

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
        {props.helpText ? (
          <HoverTooltip
            helpText={props.helpText}
            tooltipId={`tooltip--${props.cardHeading.replace(/ /g, '')}`}
          >
            {props.cardHeading}
          </HoverTooltip>
        ) : props.cardHeading}
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
  helpText: PropTypes.string,
  userPreferenceStyles: PropTypes.object,
};

Card.defaultProps = {
  cardHeading: '',
  cardWidth: 4,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    userPreferenceStyles: state.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(radium(Card));
