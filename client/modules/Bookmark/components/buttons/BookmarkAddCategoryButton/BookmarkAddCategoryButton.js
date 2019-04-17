import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleBookmarkCategoryForm } from '../../../../../store/actions/BookmarkActions';
import Button from '../../../../../components/elements/Button/Button';

function BookmarkAddCategoryButton(props) {
  return (
    <Button
      labelId="addCategory"
      click={() => props.dispatch(toggleBookmarkCategoryForm(true))}
    />
  );
}

function mapStateToProps(state) {
  return {
    styles: state.styles.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

BookmarkAddCategoryButton.propTypes = {
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkAddCategoryButton);
