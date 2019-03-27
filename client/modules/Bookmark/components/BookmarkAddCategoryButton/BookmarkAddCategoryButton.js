import React from 'react';

import { connect } from 'react-redux';

import { toggleBookmarkCategoryForm } from '../../BookmarkActions';

function BookmarkAddCategoryButton(props) {
  return (
    <button onClick={() => props.dispatch(toggleBookmarkCategoryForm(true))}>Add category</button>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BookmarkAddCategoryButton);
