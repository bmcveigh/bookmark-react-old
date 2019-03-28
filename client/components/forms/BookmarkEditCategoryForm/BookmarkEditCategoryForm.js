import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateUserById } from '../../../store/actions/UserActions';
import { injectIntl } from 'react-intl';

class BookmarkEditCategoryForm extends Component {

  handleClick(e) {
    e.preventDefault();

    const user = this.props.user;

    this.props.dispatch(updateUserById(this.props.user._id, user));
  }

  render() {
    const category = this.props.category;
    const globalStyles = this.props.styles.data;
    const messages = this.props.intl.messages;

    return (
      <form>
        <div><label htmlFor="name">Category Name</label></div>
        <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
          <input
            type="text"
            id="name"
            ref="name"
            defaultValue={category.name}
          />
        </div>
        <div>
          <label htmlFor="description">Category Description</label>
        </div>
        <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
          <input
            type="text"
            id="description"
            ref="description"
            defaultValue={category.description}
          />
        </div>
        <div>
          <a href="#">{messages.addBookmark}</a>
        </div>
        <div>
          <button
            onClick={(e) => this.handleClick(e)}
            className={`${globalStyles.button} ${globalStyles['button--green']} ${globalStyles['button--small']}`}
          >{messages.update}
          </button>
          <a href="#">{messages.cancel}</a>
        </div>
      </form>
    );
  }

}

BookmarkEditCategoryForm.propTypes = {
  category: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  intl: PropTypes.object,
  user: PropTypes.object,
  styles: PropTypes.object,
};

// Retrieve data from store as props
function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BookmarkEditCategoryForm));
