import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';


function BookmarkMetadataModalForm() {
  return (
    <span>
      <a
        href="#"
        className="text-warning"
      >
        <FontAwesomeIcon
          icon={faStickyNote}
          size="2x"
        />
      </a>
    </span>
  );
}

export default BookmarkMetadataModalForm;
