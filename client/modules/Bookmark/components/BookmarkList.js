import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import BookmarkListItem from './BookmarkListItem/BookmarkListItem';

function BookmarkList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <BookmarkListItem
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
          />
        ))
      }
    </div>
  );
}

BookmarkList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default BookmarkList;
