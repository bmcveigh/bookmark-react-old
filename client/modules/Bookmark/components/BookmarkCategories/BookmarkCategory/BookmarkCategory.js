import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import classes from './BookmarkCategory.css';
import { updateUserById } from '../../../../../store/actions/UserActions';
import BookmarkEditCategoryForm from '../../../../../components/forms/BookmarkEditCategoryForm/BookmarkEditCategoryForm';
import Card from '../../../../../components/elements/Card/Card';
import BookmarkList from './BookmarkList/BookmarkList';

class BookmarkCategory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleEditForm: false,
    };
  }

  handleClick(e, action, category, props) {
    e.preventDefault();

    switch (action) {
      case 'edit':
        this.setState({ toggleEditForm: !this.state.toggleEditForm });
        break;

      case 'delete':
        if (confirm('Are you sure you want to delete?')) {
          const user = props.user;

          user.bookmarkSpaces[0][0].bookmarkCategories.forEach((c, index) => {
            if (c.categoryId === category.categoryId) {
              // todo: check by an id instead.
              user.bookmarkSpaces[0][0].bookmarkCategories.splice(index);
              props.dispatch(updateUserById(user._id, user));
            }
          });
        }
        break;

      default:
        break;
    }
  }

  render() {
    const category = this.props.category;
    let output = (
      <div>
        <BookmarkList bookmarks={category.bookmarks} />
      </div>
    );

    if (this.state.toggleEditForm) {
      output = <BookmarkEditCategoryForm category={category} />;
    }

    return (
      <Card cardHeading={category.name}>
        {output}
        <div className={classes.BookmarkCategoryActions}>
          <a
            href="#"
            onClick={(e) => this.handleClick(e, 'edit', category, this.props)}
          >{this.state.toggleEditForm ? 'Done' : 'Edit'}</a>
          <a
            href="#"
            onClick={(e) => this.handleClick(e, 'delete', category, this.props)}
          >
            Delete
          </a>
        </div>
      </Card>
    );
  }

}

BookmarkCategory.propTypes = {
  category: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  styles: PropTypes.object,
  user: PropTypes.object,
  userPreferenceStyles: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    styles: state.styles.data,
    user: state.user,
    userPreferenceStyles: state.styles.userPreferenceStyles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkCategory);
