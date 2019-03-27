import React from 'react';
import PropTypes from 'prop-types';
import BookmarkAddCategoryButton from './BookmarkAddCategoryButton/BookmarkAddCategoryButton';

function BookmarkList(props) {
  return (
    <div className="listView">
      <BookmarkAddCategoryButton />
      {
        props.user.bookmarkSpaces.map((bookmarkSpace, key) => {
          const space = bookmarkSpace[0];
          return (
            <div key={key}>
              {space.name}
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
