import callApi from '../../util/apiCaller';

// Export Constants
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const GET_USER = 'GET_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const UPDATE_USER = 'UPDATE_USER';

export function addUserRegistration(user) {
  return callApi('user-registration', 'post', {
    post: {
      googleUid: user.googleUid,
      email: user.email,
      pass: '',
      created: 0,
      lastLogin: 0,
      isAdmin: 0,
      status: 1,
      membershipType: 'free_trial',
      paymentMethodType: 'paypal',
      preferences: {
        themeSettings: {
          machineName: 'light',
          name: 'Light',
          colors: '#0074B2,#0083CA,#00A2FF,#FFFFFF,#00A5FF,#FFFFFF,#03EEFF,#00CCC2',
        },
      },
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
  let email = '';

  const intervalId = setInterval(() => {
    if (window.gapi) {
      const auth2 = window.gapi.auth2;

      if (auth2 && auth2.getAuthInstance) {
        const googleUserProfile = auth2.getAuthInstance()
          .currentUser
          .get()
          .getBasicProfile();

        if (googleUserProfile && googleUserProfile.getEmail) {
          email = googleUserProfile.getEmail();

          clearInterval(intervalId);
        }

        if (!email) {
          return false;
        }

        return callApi(`user-email/${email}`, 'get').then(res => dispatch({ type: GET_USER, user: res.user }));
      }
    }

    return false;
  }, 500);

  return false;
};

export const fetchUserFromEmail = (email) => dispatch => {
  return callApi(`user-email/${email}`, 'get').then(res => dispatch({ type: GET_USER, user: res.user }));
};

export const updateUserById = (id, body) => dispatch => {
  return callApi(`user/${id}/update`, 'post', body).then(res => {
    dispatch({ type: UPDATE_USER, user: res.user });
  });
};
