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
import BookmarkTableView from './BookmarkTableView/BookmarkTableView';

import BookmarkEditSpaceModalForm from './forms/BookmarkEditSpaceModalForm/BookmarkEditSpaceModalForm';
import BookmarkCloneSpaceButton from './buttons/BookmarkCloneSpaceButton/BookmarkCloneSpaceButton';

const confirmHandler = (props, bookmarkSpaces, index) => {
  const user = props.user;

  // todo: add logic for confirm handler.
  bookmarkSpaces.splice(index);
  props.dispatch(updateUserById(user._id, user));
};

const CATEGORY_VIEW = 'CATEGORY_VIEW';
const TABLE_VIEW = 'TABLE_VIEW';

class BookmarkCategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: CATEGORY_VIEW,
    };
  }

  handleViewModeClick(e) {
    e.preventDefault();
    this.setState({ viewMode: this.state.viewMode === TABLE_VIEW ? CATEGORY_VIEW : TABLE_VIEW });
  }

  render() {
    if (!this.props.user || this.props.user.data) {
      return <div>Loading...</div>;
    }

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
            <a
              href="#"
              onClick={(e) => this.handleViewModeClick(e)}
            >
              Switch to {this.state.viewMode === CATEGORY_VIEW ? 'table' : 'category'} view
            </a>
          </Col>
        </Row>
        <div className={classes.Content}>
          <Tabs data={bkSpaceTabsData} />
          <Row className="float-right">
            <Col md={12}>
              <div>
                {
                  index > 0 ? (
                    <span>
                      <MakeDefaultSpaceButton spaceIndex={index} />
                      <AppModal
                        labelId="deleteThisSpace"
                        confirmHandler={() => confirmHandler(this.props, bookmarkSpaces, index)}
                      >
                        <span>Are you sure you would like to delete this space?</span>
                      </AppModal>
                    </span>
                  ) : null
                }
                <BookmarkEditSpaceModalForm
                  index={index}
                  space={bookmarkSpaces[index]}
                />
                <BookmarkCloneSpaceButton spaceToClone={bookmarkSpaces[index]} />
              </div>
            </Col>
          </Row>
          {this.state.viewMode === CATEGORY_VIEW ?
            <BookmarkCategories space={bookmarkSpaces[index]} /> : <BookmarkTableView space={bookmarkSpaces[index]} />}
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
    userPreferenceStyles: state.userPreferenceStyles,
  };
}

export default connect(mapStateToProps)(BookmarkCategoriesContainer);
