import React, { Component } from 'react';

import { connect } from 'react-redux';
import radium from 'radium';

import arrayMove from 'array-move';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

import classes from './BookmarkList.css';

import { SortableContainer as sc, SortableElement as se } from 'react-sortable-hoc';
import { updateUserById } from '../../../../../../store/actions/UserActions';

const handleDeleteBookmarkClick = (e, bookmark, props) => {
  e.preventDefault();
  const index = props.routeParams.id ? props.routeParams.id : 0;
  const user = props.user;
  const space = user.bookmarkSpaces[0][index];
  const categories = space.bookmarkCategories;

  categories.forEach(category => {
    category.bookmarks.forEach((bm, i) => {
      if (
        bm.bookmarkId === bookmark.bookmarkId
      ) {
        category.bookmarks.splice(i, 1);
      }
    });
  });
  props.dispatch(updateUserById(user._id, user));
};

const SortableItem = se(
  radium(({ index, value, props }) => (
    <li
      className={classes.Bookmark}
      style={props.userPreferenceStyles.cardLink}
    >
      <a
        href={value.href}
        key={index}
        target="_blank"
        style={props.userPreferenceStyles.cardLink}
      >
        {value.label}
      </a>
      <a
        href="#"
        className={`${classes.DeleteBookmark} float-right`}
        onClick={(e) => handleDeleteBookmarkClick(e, value, props)}
        style={{ color: props.userPreferenceStyles.button ? props.userPreferenceStyles.button.background : {} }}
      >
        <FontAwesomeIcon icon={faWindowClose} />
      </a>
    </li>
  ),
));

const SortableList = sc(({ items, props }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} props={props} />
      ))}
    </ul>
  );
});

class BookmarkList extends Component {
  constructor(props) {
    super(props);

    const items = props.bookmarks;

    this.state = {
      items,
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  shouldCancelStart(e) {
    // Cancel sorting if the event target is an anchor tag (`a`)
    if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'svg') {
      return true; // Return true to cancel sorting
    }
    return false;
  }

  render() {
    return (
      <SortableList
        items={this.props.bookmarks}
        onSortEnd={this.onSortEnd}
        props={this.props}
        shouldCancelStart={this.shouldCancelStart}
        style={this.props.userPreferenceStyles}
      />
    );
  }
}

BookmarkList.propTypes = {
  bookmarks: PropTypes.array,
  userPreferenceStyles: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    routeParams: state.routeParams,
    user: state.user,
    userPreferenceStyles: state.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(radium(BookmarkList));
