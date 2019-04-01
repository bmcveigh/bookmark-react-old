import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import BookmarkCategory from './BookmarkCategory/BookmarkCategory';

function BookmarkCategories(props) {
  const output = props.space.bookmarkCategories.map((category, index) => (
    <BookmarkCategory
      category={category}
      key={index}
    />
  ));

  return (
    <div>
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
