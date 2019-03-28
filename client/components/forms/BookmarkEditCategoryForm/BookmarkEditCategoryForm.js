import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateUserById } from '../../../store/actions/UserActions';
import { injectIntl } from 'react-intl';
import BookmarkFormWidget from '../../widgets/BookmarkFormWidget/BookmarkFormWidget';

class BookmarkEditCategoryForm extends Component {

  handleClick(e, type) {
    e.preventDefault();

    const user = this.props.user;
    const category = this.props.category;
    const props = this.props;

    switch (type) {
      case 'add_bookmark':
        user.bookmarkSpaces[0][0].bookmarkCategories.forEach(function (c, index) {
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
    const messages = this.props.intl.messages;

    return (
      <form>
        <div><label htmlFor="name">Category Name</label></div>
        <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
          <input
            type="text"
            id="name"
            ref="name"
            defaultValue={category.name}
          />
        </div>
        <div>
          <label htmlFor="description">Category Description</label>
        </div>
        <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
          <input
            type="text"
            id="description"
            ref="description"
            defaultValue={category.description}
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
