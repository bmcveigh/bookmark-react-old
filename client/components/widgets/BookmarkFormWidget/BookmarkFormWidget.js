import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateUserById } from '../../../store/actions/UserActions';
import { injectIntl } from 'react-intl';

class BookmarkFormWidget extends Component {

  handleClick(e, type) {
    e.preventDefault();

    const user = this.props.user;
    const category = this.props.category;
    const props = this.props;

    switch (type) {
      case 'add_bookmark':
        user.bookmarkSpaces[0][0].bookmarkCategories.forEach(function (c, index) {
          if (c.categoryId === category.categoryId) {
            // todo: check by an id instead.
            user.bookmarkSpaces[0][0].bookmarkCategories[index].bookmarks.push({
              label: '',
              href: '',
              bookmarkId: Math.random()
                .toString(36)
                .substring(7),
            });
            props.dispatch(updateUserById(user._id, user));
          }
        });
        break;

      default:
        break;
    }
  }

  handleKeyDown(event, bookmark, props) {
    const user = props.user;
    const category = props.category;
    const refs = this.refs;

    if (event.which === 9 || event.which === 13) {
      user.bookmarkSpaces[0][0].bookmarkCategories.forEach((c, index) => {
        if (c.categoryId === category.categoryId) {
          // todo: check by an id instead.
          user.bookmarkSpaces[0][0].bookmarkCategories[index].bookmarks.forEach((b, key) => {
            if (b.bookmarkId === bookmark.bookmarkId) {
              b.label = refs[`label--${b.bookmarkId}`].value;
              b.href = refs[`href--${b.bookmarkId}`].value;
            }
          });
          props.dispatch(updateUserById(user._id, user));
        }
      });
    }
  }

  handleMouseLeave(event, bookmark, props) {
    const user = props.user;
    const category = props.category;
    const refs = this.refs;

    user.bookmarkSpaces[0][0].bookmarkCategories.forEach((c, index) => {
      if (c.categoryId === category.categoryId) {
        // todo: check by an id instead.
        user.bookmarkSpaces[0][0].bookmarkCategories[index].bookmarks.forEach((b, key) => {
          if (b.bookmarkId === bookmark.bookmarkId) {
            b.label = refs[`label--${b.bookmarkId}`].value;
            b.href = refs[`href--${b.bookmarkId}`].value;
          }
        });
        props.dispatch(updateUserById(user._id, user));
      }
    });
  }

  render() {
    const category = this.props.category;
    const bookmarks = category.bookmarks;
    const globalStyles = this.props.styles.data;
    const messages = this.props.intl.messages;

    const output = bookmarks.map((bookmark, key) => {
      return (
        <div key={key}>
          <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
            <input
              type="text"
              placeholder="Label"
              onKeyDown={(e) => this.handleKeyDown(e, bookmark, this.props)}
              defaultValue={bookmark.label}
              ref={`label--${bookmark.bookmarkId}`}
            />
          </div>
          <div className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
            <input
              type="text"
              placeholder="URL"
              onKeyDown={(e) => this.handleKeyDown(e, bookmark, this.props)}
              onMouseLeave={(e) => this.handleMouseLeave(e, bookmark, this.props)}
              defaultValue={bookmark.href.length ? bookmark.href : 'http://'}
              ref={`href--${bookmark.bookmarkId}`}
            />
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          {output}
        </div>
        <div>
          <a
            href="#"
            onClick={(e) => this.handleClick(e, 'add_bookmark')}
          >{messages.addBookmark}</a>
        </div>
      </div>
    );
  }

}

BookmarkFormWidget.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(BookmarkFormWidget));
