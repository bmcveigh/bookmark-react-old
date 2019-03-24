import callApi from '../../util/apiCaller';

// Export Constants
export const REGISTER_USER = 'REGISTER_USER';

export function addUserRegistration(user) {
  return callApi('user-registration', 'post', {
    post: {
      username: user.username,
      email: user.email,
      pass: user.pass,
    },
  }).then(res => res.post);
}
