import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import BookmarkFormWidget from '../../../../../components/widgets/BookmarkFormWidget/BookmarkFormWidget';
import { updateUserById } from '../../../../../store/actions/UserActions';
import { Label } from 'reactstrap';

import classes from './BookmarkEditCategoryForm.css';


class BookmarkEditCategoryForm extends Component {

  handleClick(e, type) {
    e.preventDefault();

    const user = this.props.user;
    const category = this.props.category;
    const props = this.props;

    switch (type) {
      case 'add_bookmark':
        user.bookmarkSpaces[0][0].bookmarkCategories.forEach((c, index) => {
          if (c.categoryId === category.categoryId) {
            // todo: check by an id instead.
            user.bookmarkSpaces[0][0].bookmarkCategories[index].bookmarks.push({
              label: '',
              href: '',
              bookmarkId: Math.random().toString(36).substring(7),
            });
            props.dispatch(updateUserById(user._id, user));
          }
        });
        break;

      default:
        break;
    }
  }

  render() {
    const category = this.props.category;
    const globalStyles = this.props.styles.data;

    return (
      <form className={classes.BookmarkEditCategoryForm}>
        <div>
          <Label htmlFor="name">Category Name</Label>
        </div>
        <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
          <input
            type="text"
            id="name"
            ref="name"
            defaultValue={category.name}
            placeholder="Enter category name"
          />
        </div>
        <div>
          <Label htmlFor="description">Category Description</Label>
        </div>
        <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
          <input
            type="text"
            id="description"
            ref="description"
            defaultValue={category.description}
            placeholder="Enter category description"
          />
        </div>
        <BookmarkFormWidget category={category} />
      </form>
    );
  }

}

BookmarkEditCategoryForm.propTypes = {
  category: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  intl: PropTypes.object,
  user: PropTypes.object,
  styles: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BookmarkEditCategoryForm));
