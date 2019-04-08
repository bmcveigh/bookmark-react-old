import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import BookmarkAddSpaceForm from '../../../components/forms/BookmarkAddSpaceForm/BookmarkAddSpaceForm';
import BookmarkAddCategoryButton from './BookmarkAddCategoryButton/BookmarkAddCategoryButton';
import BookmarkCategories from './BookmarkCategories/BookmarkCategories';
import Tabs from '../../../components/elements/Tabs/Tabs';

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
      <BookmarkAddSpaceForm />
      <Tabs data={bkSpaceTabsData} />
      {
        props.user.bookmarkSpaces.map((bookmarkSpace, key) => {
          return (
            <div key={key}>
              <BookmarkCategories space={bookmarkSpace[0]} />
            </div>
          );
        })
      }
    </div>
  );
}

BookmarkList.propTypes = {
  globalStyles: PropTypes.object,
  user: PropTypes.any, // .isRequired,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    user: state.user,
  };
}

export default connect(mapStateToProps)(BookmarkList);
