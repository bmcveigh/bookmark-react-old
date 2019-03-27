import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const TOGGLE_BOOKMARK_CATEGORY_FORM = 'TOGGLE_BOOKMARK_CATEGORY_FORM';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export const toggleBookmarkCategoryForm = (shouldDisplayBookmark = false) => {
  return {
    type: TOGGLE_BOOKMARK_CATEGORY_FORM,
    shouldDisplayBookmark,
  };
};
