import React, { Component } from 'react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { SortableContainer as sc, SortableElement as se } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = se(({ value }) => (
  <a
    href={value.href}
    target="_blank"
  >
    <li>{value.label}</li>
  </a>
));

const SortableList = sc(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
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

  render() {
    return <SortableList items={this.props.bookmarks} onSortEnd={this.onSortEnd} />;
  }
}

BookmarkList.propTypes = {
  bookmarks: PropTypes.array,
};

export default connect()(BookmarkList);
