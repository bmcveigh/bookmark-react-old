import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

import AppModal from '../../../components/containers/AppModal/AppModal';

import BookmarkAddSpaceForm from './forms/BookmarkAddSpaceForm/BookmarkAddSpaceForm';
import BookmarkCategories from './BookmarkCategories/BookmarkCategories';
import Tabs from '../../../components/elements/Tabs/Tabs';
import { updateUserById } from '../../../store/actions/UserActions';
import MakeDefaultSpaceButton from './buttons/MakeDefaultSpaceButton/MakeDefaultSpaceButton';

import classes from './BookmarkCategoriesContainer.css';
import BookmarkAddCategoryModalForm from './forms/BookmarkAddCategoryModalForm/BookmarkAddCategoryModalForm';

const confirmHandler = (props, bookmarkSpaces, index) => {
  const user = props.user;

  // todo: add logic for confirm handler.
  bookmarkSpaces.splice(index);
  props.dispatch(updateUserById(user._id, user));
};

class BookmarkCategoriesContainer extends Component {
  render() {
    const bkSpaceTabsData = this.props.user.bookmarkSpaces[0].map((space, index) => {
      return {
        label: index ? space.name : `${space.name} (default space)`,
        href: index ? `/space/${index}` : '/',
      };
    });

    const params = this.props.routeParams || {};
    const index = params.id || 0;
    const user = this.props.user || false;
    const bookmarkSpaces = user.bookmarkSpaces[0];

    return (
      <div>
        <Row
          className={classes.ContainerHeader}
          style={this.props.userPreferenceStyles.spaceHeader}
        >
          <Col md={8}>
            <BookmarkAddCategoryModalForm params={params} />
            <BookmarkAddSpaceForm />
          </Col>
          <Col md={4}>
            <a href="#">Switch to table view</a>
          </Col>
        </Row>
        <div className={classes.Content}>
          <Tabs data={bkSpaceTabsData} />
          <Row className="float-right">
            <Col md={12}>
              {
                index > 0 ? (
                  <div>
                    <MakeDefaultSpaceButton spaceIndex={index} />
                    <AppModal
                      labelId="deleteThisSpace"
                      confirmHandler={() => confirmHandler(this.props, bookmarkSpaces, index)}
                    >
                      <span>Are you sure you would like to delete this space?</span>
                    </AppModal>
                  </div>
                ) : null
              }
            </Col>
          </Row>
          <BookmarkCategories space={bookmarkSpaces[index]} />
        </div>
      </div>
    );
  }
}

BookmarkCategoriesContainer.propTypes = {
  dispatch: PropTypes.func,
  globalStyles: PropTypes.object,
  params: PropTypes.object,
  routeParams: PropTypes.object,
  user: PropTypes.any, // .isRequired,
  userPreferenceStyles: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    globalStyles: state.styles.data,
    routeParams: state.routeParams,
    user: state.user,
    userPreferenceStyles: state.styles.userPreferenceStyles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    updateUserById,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkCategoriesContainer);
