import React from 'react';

import PropTypes from 'prop-types';

/**
 * Component representing a bookmark row in the table view.
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const BookmarkTableRow = (props) => (
  <tr>
    <td>
      <a
        href={props.href}
        target="_blank"
      >
        {props.label}
      </a>
    </td>
    <td>{props.categoryName}</td>
  </tr>
);

BookmarkTableRow.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};

export default BookmarkTableRow;
