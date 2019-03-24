import callApi from '../../util/apiCaller';
import { addPost } from '../Post/PostActions';

export function addUserRegistration(user) {
  return (dispatch) => {
    return callApi('user-registration', 'post', {
      post: {
        name: user.name,
        email: user.email,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}
