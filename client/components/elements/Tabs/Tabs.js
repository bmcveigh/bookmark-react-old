import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function Tabs(props) {
  const gs = props.globalStyles;
  const t = gs.tabs;
  const tItem = gs['tabs-item'];

  if (!props.data) {
    return <div></div>;
  }

  const tabs = props.userPreferenceStyles.tabs || {};

  return (
    <div className={t}>
      {
        props.data.map((item, key) => {
          const isSelected = window.location.pathname === item.href;

          return (
            <Link
              to={item.href} className={`${tItem} ${isSelected ? gs['is-selected'] : ''}`}
              key={key}
              style={isSelected ? tabs.selected : tabs.notSelected}
            >
              {item.label}
            </Link>
          );
        })
      }
    </div>
  );
}

Tabs.propTypes = {
  globalStyles: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  userPreferenceStyles: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    userPreferenceStyles: state.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(Tabs);
