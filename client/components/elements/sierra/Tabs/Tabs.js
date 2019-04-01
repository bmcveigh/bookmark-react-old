import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function Tabs(props) {
  const gs = props.globalStyles;
  const t = gs.tabs;
  const tItem = gs['tabs-item'];

  return (
    <div className={t}>
      {
        props.data.map((item, key) => (
          <Link
            to={item.href} className={`${tItem} ${item.isSelected ? gs['is-selected'] : ''}`}
            key={key}
          >
            {item.label}
          </Link>
        ))
      }
    </div>
  );
}

Tabs.propTypes = {
  globalStyles: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
  };
}

export default connect(mapStateToProps)(Tabs);
