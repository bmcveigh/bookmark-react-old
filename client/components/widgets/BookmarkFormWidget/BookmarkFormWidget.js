import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateUserById } from '../../../store/actions/UserActions';
import { injectIntl } from 'react-intl';
import { Col, Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

import classes from './BookmarkFormWidget.css';
import BookmarkMetadataModalForm from '../../../modules/Bookmark/components/forms/BookmarkMetadataModalForm/BookmarkMetadataModalForm';

class BookmarkFormWidget extends Component {

  constructor(props) {
    super(props);
    this.index = this.props.routeParams && this.props.routeParams.id ? this.props.routeParams.id : 0;
  }

  handleClick(e, type) {
    e.preventDefault();

    const user = this.props.user;
    const category = this.props.category;
    const props = this.props;
    const spIndex = this.index;

    switch (type) {
      case 'add_bookmark':
        user.bookmarkSpaces[0][spIndex].bookmarkCategories.forEach((c, index) => {
          if (c.categoryId === category.categoryId) {
            // todo: check by an id instead.
            user.bookmarkSpaces[0][spIndex].bookmarkCategories[index].bookmarks.push({
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
    const spIndex = this.index;

    if (event.which === 9 || event.which === 13) {
      user.bookmarkSpaces[0][spIndex].bookmarkCategories.forEach((c, index) => {
        if (c.categoryId === category.categoryId) {
          // todo: check by an id instead.
          user.bookmarkSpaces[0][spIndex].bookmarkCategories[index].bookmarks.forEach((b) => {
            if (b.bookmarkId === bookmark.bookmarkId) {
              const bk = b;
              bk.label = refs[`label--${b.bookmarkId}`].value;
              bk.href = refs[`href--${b.bookmarkId}`].value;
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
    const spIndex = this.index;

    user.bookmarkSpaces[0][spIndex].bookmarkCategories.forEach((c, index) => {
      if (c.categoryId === category.categoryId) {
        // todo: check by an id instead.
        user.bookmarkSpaces[0][spIndex].bookmarkCategories[index].bookmarks.forEach((b) => {
          if (b.bookmarkId === bookmark.bookmarkId) {
            const bk = b;
            bk.label = refs[`label--${b.bookmarkId}`].value;
            bk.href = refs[`href--${b.bookmarkId}`].value;
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
        <Row key={key} className={classes.BookmarkRow}>
          <Col md={4}>
            <span className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
              <input
                type="text"
                placeholder="Label"
                onKeyDown={(e) => this.handleKeyDown(e, bookmark, this.props)}
                defaultValue={bookmark.label}
                ref={`label--${bookmark.bookmarkId}`}
              />
            </span>
          </Col>
          <Col md={6}>
            <span className={`${globalStyles.input} ${globalStyles['input-fullWidth']}`}>
              <input
                type="text"
                placeholder="URL"
                onKeyDown={(e) => this.handleKeyDown(e, bookmark, this.props)}
                onMouseLeave={(e) => this.handleMouseLeave(e, bookmark, this.props)}
                defaultValue={bookmark.href.length ? bookmark.href : 'http://'}
                ref={`href--${bookmark.bookmarkId}`}
              />
            </span>
          </Col>
          <Col md={2}>
            <BookmarkMetadataModalForm />
          </Col>
        </Row>
      );
    });

    return (
      <div className={classes.BookmarkFormWidget}>
        <h3 className={classes.BookmarkFormLabel}>Bookmarks</h3>
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
  routeParams: PropTypes.object,
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
