import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

function BookmarkCategories(props) {
  const output = props.space.bookmarkCategories.map(function (category, index) {
    return (
      <div className={`${props.styles['col-md-3']} ${props.styles['bg-gray-light']} `} key={index}>
        <div>{category.name}</div>
        <div>{category.description}</div>
      </div>
    );
  });

  return (
    <div className={`${props.styles.container}`}>
      <div className={`${props.styles.row}`}>
        {output}
      </div>
    </div>
  );
}

BookmarkCategories.propTypes = {
  space: PropTypes.object.isRequired,
  styles: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    styles: state.styles.data,
    user: state.user,
  };
}

export default connect(mapStateToProps)(BookmarkCategories);
