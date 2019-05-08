import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Col, Row, Table } from 'reactstrap';

import classes from './BookmarkTableView.css';
import BookmarkTableRow from './BookmarkTableRow/BookmarkTableRow';

function BookmarkTableView(props) {
  const userPreferenceStyles = props.userPreferenceStyles || {};

  return (
    <Row>
      <Col md={12} className={classes.BookmarkTableView}>
        <Table>
          <thead>
          <tr style={userPreferenceStyles.cardHeading}>
            <th>Bookmark</th>
            <th>Bookmark Category</th>
          </tr>
          </thead>
          <tbody>
          {
            props.space.bookmarkCategories.map(category => {
              return category.bookmarks.map((bookmark, key) => {
                if (!bookmark.label) {
                  return null;
                }

                return (
                  <BookmarkTableRow
                    key={key}
                    href={bookmark.href}
                    label={bookmark.label}
                    categoryName={category.name}
                  />
                );
              });
            })
          }
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

BookmarkTableView.propTypes = {
  space: PropTypes.object.isRequired,
  userPreferenceStyles: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: state.user,
    userPreferenceStyles: state.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(BookmarkTableView);
