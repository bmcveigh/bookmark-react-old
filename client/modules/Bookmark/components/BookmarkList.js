import React from 'react';
import PropTypes from 'prop-types';
import BookmarkAddCategoryButton from './BookmarkAddCategoryButton/BookmarkAddCategoryButton';
import BookmarkCategories from './BookmarkCategories/BookmarkCategories';

import classes from './BookmarkList.css';

function BookmarkList(props) {
  if (!props.user.bookmarkSpaces) {
    return '';
  }

  return (
    <div className={classes.BookmarkCategoryList}>
      <BookmarkAddCategoryButton />
      {
        props.user.bookmarkSpaces.map((bookmarkSpace, key) => {
          const space = bookmarkSpace[0];
          return (
            <div key={key}>
              {space.name}
              <BookmarkCategories space={bookmarkSpace[0]} />
            </div>
          );
        })
      }
    </div>
  );
}

BookmarkList.propTypes = {
  user: PropTypes.any.isRequired, // .isRequired,
};

export default BookmarkList;
