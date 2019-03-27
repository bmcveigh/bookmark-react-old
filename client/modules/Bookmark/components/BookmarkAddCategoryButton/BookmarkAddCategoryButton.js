import React from 'react';

import { connect } from 'react-redux';

import { toggleBookmarkCategoryForm } from '../../BookmarkActions';

function BookmarkAddCategoryButton(props) {
  return (
    <button
      className="button button--small button--primary"
      onClick={() => props.dispatch(toggleBookmarkCategoryForm(true))}
    >Add category</button>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BookmarkAddCategoryButton);
