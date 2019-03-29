import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import classes from './BookmarkCategory.css';
import { updateUserById } from '../../../../../store/actions/UserActions';
import BookmarkEditCategoryForm from '../../../../../components/forms/BookmarkEditCategoryForm/BookmarkEditCategoryForm';

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
          let user = props.user;

          user.bookmarkSpaces[0][0].bookmarkCategories.forEach(function (c, index) {
            if (c.categoryId === category.categoryId) {
              // todo: check by an id instead.
              user.bookmarkSpaces[0][0].bookmarkCategories.splice(index);
              props.dispatch(updateUserById(user._id, user));
            }
          });
        }
        break;
    }
  }

  render() {
    const category = this.props.category;
    const styles = this.props.styles;

    let output = (
      <div>
        <div>{category.name}</div>
        <div>{category.description}</div>
        <ul>
          {
            category.bookmarks.map((bookmark, key) => (
              <li key={key}>
                <a
                  href={bookmark.href}
                  target="_blank"
                >{bookmark.label}</a>
              </li>
            ))
          }
        </ul>
      </div>
    );

    if (this.state.toggleEditForm) {
      output = <BookmarkEditCategoryForm category={category}/>;
    }

    return (
      <div
        className={`${styles['col-md-2']} ${styles['bg-gray-light']} ${styles['m-medium']} ${styles['p-medium']} `}>
        {output}
        <div className={classes.BookmarkCategoryActions}>
          <a href="#" onClick={(e) => this.handleClick(e, 'edit', category, this.props)}>Edit</a>
          <a href="#" onClick={(e) => this.handleClick(e, 'delete', category, this.props)}>Delete</a>
        </div>
      </div>
    );
  }

}

BookmarkCategory.propTypes = {
  category: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  styles: PropTypes.object,
  user: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    styles: state.styles.data,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkCategory);
