import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleBookmarkCategoryForm } from '../../../../store/actions/BookmarkActions';

function BookmarkAddCategoryButton(props) {
  const styles = props.styles || {};

  return (
    <button
      className={`${styles.button} ${styles['button--small']}`}
      onClick={() => props.dispatch(toggleBookmarkCategoryForm(true))}
    >Add category</button>
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
