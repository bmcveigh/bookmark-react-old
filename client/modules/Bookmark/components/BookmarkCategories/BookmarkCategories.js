import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import BookmarkCategory from './BookmarkCategory/BookmarkCategory';

import classes from './BookmarkCategories.css';

function BookmarkCategories(props) {
  if (!props.space.bookmarkCategories) {
    return <div>No categories exist.</div>;
  }

  const output = props.space.bookmarkCategories.map((category, index) => (
    <BookmarkCategory
      category={category}
      key={index}
    />
  ));

  return (
    <div className={`${props.styles.row} ${classes.BookmarkCategories}`}>
      {output}
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
