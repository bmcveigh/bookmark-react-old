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

  return (
    <div className={t}>
      {
        props.data.map((item, key) => (
          <Link
            to={item.href} className={`${tItem} ${window.location.pathname === item.href ? gs['is-selected'] : ''}`}
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
