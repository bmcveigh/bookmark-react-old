import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Table } from 'reactstrap';

import classes from './BookmarkTableView.css';

function BookmarkTableView(props) {
  return (
    <Table className={classes.BookmarkTableView}>
      <thead>
        <tr>
          <th>Bookmark</th>
          <th>Bookmark Category</th>
        </tr>
      </thead>
      <tbody>
      {
        props.space.bookmarkCategories.map(category => {
          return category.bookmarks.map((bookmark, key) => (
            <tr key={key}>
              <td>
                <a
                  href={bookmark.href}
                  target="_blank"
                >
                  {bookmark.label}
                </a>
              </td>
              <td>{category.name}</td>
            </tr>
          ));
        })
      }
      </tbody>
    </Table>
  );
}

BookmarkTableView.propTypes = {
  space: PropTypes.object.isRequired,
  styles: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    styles: state.styles.data,
    user: state.user,
  };
}

export default connect(mapStateToProps)(BookmarkTableView);
