import React from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus, faWindowClose } from '@fortawesome/free-solid-svg-icons';

import HoverTooltip from '../../elements/HoverTooltip/HoverTooltip';

function CrudButtons(props) {
  return (
    <span>
      <HoverTooltip
        helpText={props.editButtonLabel}
        placement="right"
        tooltipId={props.editButtonId}
      >
        <a
          href="#"
          className="text-warning"
          onClick={props.editButtonClick}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </a>
      </HoverTooltip>
      <HoverTooltip
        helpText={props.deleteButtonLabel}
        placement="right"
        tooltipId={props.deleteButtonId}
      >
        <a
          href="#"
          className="text-danger"
          onClick={props.deleteButtonClick}
        >
          <FontAwesomeIcon icon={faWindowClose} />
        </a>
      </HoverTooltip>
    </span>
  );
}

CrudButtons.propTypes = {
  addButtonLabel: PropTypes.string.isRequired,
  addButtonId: PropTypes.string.isRequired,
  addButtonClick: PropTypes.func,
  editButtonLabel: PropTypes.string.isRequired,
  editButtonId: PropTypes.string.isRequired,
  editButtonClick: PropTypes.func,
  deleteButtonLabel: PropTypes.string.isRequired,
  deleteButtonId: PropTypes.string.isRequired,
  deleteButtonClick: PropTypes.func,
};

export default CrudButtons;
