import React from 'react';
import PropTypes from 'prop-types';
import BookmarkAddCategoryButton from './BookmarkAddCategoryButton/BookmarkAddCategoryButton';
import BookmarkCategories from './BookmarkCategories/BookmarkCategories';
import Tabs from '../../../components/elements/sierra/Tabs/Tabs';

function BookmarkList(props) {
  if (!props.user.bookmarkSpaces) {
    return '';
  }

  const bkSpaceTabsData = props.user.bookmarkSpaces[0].map((space) => {
    return {
      label: space.name,
      href: window.location.pathname,
    };
  });

  return (
    <div>
      <BookmarkAddCategoryButton />
      <Tabs data={bkSpaceTabsData} />
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
