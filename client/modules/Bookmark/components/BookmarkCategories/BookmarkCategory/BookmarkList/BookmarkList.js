import React, { Component } from 'react';

import { connect } from 'react-redux';
import radium from 'radium';

import PropTypes from 'prop-types';

import { SortableContainer as sc, SortableElement as se } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = se(radium(({ index, value, userPreferenceStyles }) => (
  <li style={userPreferenceStyles.cardLink}>
    <a
      href={value.href}
      key={index}
      target="_blank"
      style={userPreferenceStyles.cardLink}
    >
      {value.label}
    </a>
  </li>
)));

const SortableList = sc(({ items, userPreferenceStyles }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} userPreferenceStyles={userPreferenceStyles} />
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
    if (e.target.tagName.toLowerCase() === 'a') {
      return true; // Return true to cancel sorting
    }
    return false;
  }

  render() {
    return (
      <SortableList
        items={this.props.bookmarks}
        onSortEnd={this.onSortEnd}
        userPreferenceStyles={this.props.userPreferenceStyles}
        shouldCancelStart={this.shouldCancelStart}
        style={this.props.userPreferenceStyles}
      />
    );
  }
}

BookmarkList.propTypes = {
  bookmarks: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    userPreferenceStyles: state.styles.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(radium(BookmarkList));
