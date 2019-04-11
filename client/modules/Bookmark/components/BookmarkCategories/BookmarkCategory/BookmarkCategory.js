import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus, faWindowClose } from '@fortawesome/free-solid-svg-icons';

import classes from './BookmarkCategory.css';
import { updateUserById } from '../../../../../store/actions/UserActions';
import BookmarkEditCategoryForm from '../../forms/BookmarkEditCategoryForm/BookmarkEditCategoryForm';
import Card from '../../../../../components/elements/Card/Card';
import BookmarkList from './BookmarkList/BookmarkList';
import HoverTooltip from '../../../../../components/elements/HoverTooltip/HoverTooltip';

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

          const spaceIndex = props.routeParams.id ? this.props.routeParams.id : 0;

          user.bookmarkSpaces[0][spaceIndex].bookmarkCategories.forEach((c, index) => {
            if (c.categoryId === category.categoryId) {
              // todo: check by an id instead.
              user.bookmarkSpaces[0][spaceIndex].bookmarkCategories.splice(index);
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
      <Card cardHeading={category.name} helpText={category.description || ''}>
        {output}
        <div className={classes.BookmarkCategoryActions}>
          <HoverTooltip
            helpText="Add bookmark"
            placement="right"
            tooltipId={`add-bookmark-${category.categoryId}`}
          >
            <a
              href="#"
              className="text-success"
            >
              <FontAwesomeIcon icon={faPlus} />
            </a>
          </HoverTooltip>
          <HoverTooltip
            helpText="Edit category"
            placement="right"
            tooltipId={`edit-category-${category.categoryId}`}
          >
            <a
              href="#"
              className="text-warning"
              onClick={(e) => this.handleClick(e, 'edit', category, this.props)}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </a>
          </HoverTooltip>
          <HoverTooltip
            helpText="Delete category"
            placement="right"
            tooltipId={`delete-category-${category.categoryId}`}
          >
            <a
              href="#"
              className="text-danger"
              onClick={(e) => this.handleClick(e, 'delete', category, this.props)}
            >
              <FontAwesomeIcon icon={faWindowClose} />
            </a>
          </HoverTooltip>
        </div>
      </Card>
    );
  }

}

BookmarkCategory.propTypes = {
  category: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  routeParams: PropTypes.object,
  styles: PropTypes.object,
  user: PropTypes.object,
  userPreferenceStyles: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    routeParams: state.routeParams,
    styles: state.styles.data,
    user: state.user,
    userPreferenceStyles: state.styles.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(BookmarkCategory);
