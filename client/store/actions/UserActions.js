import callApi from '../../util/apiCaller';

// Export Constants
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const GET_USER = 'GET_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function addUserRegistration(user) {
  return callApi('user-registration', 'post', {
    post: {
      username: user.username,
      email: user.email,
      pass: user.pass,
      created: 0,
      lastLogin: 0,
      isAdmin: 0,
      status: 1,
      membershipType: 'free_trial',
      paymentMethodType: 'paypal',
      bookmarkSpaces: [
        {
          name: 'Main',
          description: 'This is the main space.',
          bookmarkCategories: [],
        },
      ],
    },
  }).then(res => res.post);
}

export const authenticateUser = (username, pass) => dispatch => {
  const body = {
    username,
    pass,
  };
  return callApi('user/authenticate', 'post', body).then(res => dispatch({ type: AUTHENTICATE_USER, user: res.user }));
};

export const fetchUserFromSession = () => dispatch => {
  const id = localStorage && localStorage.getItem('token') ? localStorage.getItem('token') : '';

  if (!id.length) {
    return false;
  }
  return callApi(`user/${id}`, 'get').then(res => dispatch({ type: GET_USER, user: res.user }));
};

export const updateUserById = (id, body) => dispatch => {
  return callApi(`user/${id}/update`, 'post', body).then(res => {
    dispatch({ type: UPDATE_USER, user: res.user });
  });
};
