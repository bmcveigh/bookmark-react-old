import React from 'react';
import PropTypes from 'prop-types';

function BookmarkList(props) {
  return (
    <div className="listView">
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
