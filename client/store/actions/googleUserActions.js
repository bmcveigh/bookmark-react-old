// Export Constants
export const GET_GOOGLE_USER = 'GET_GOOGLE_USER';

export const getGoogleUser = () => dispatch => {
  const intervalId = setInterval(() => {
    if (window && window.gapi) {
      if (window.gapi.auth2 && window.gapi.auth2.getAuthInstance) {
        const profile = window
          .gapi
          .auth2
          .getAuthInstance()
          .currentUser
          .get()
          .getBasicProfile();

        if (profile) {
          clearInterval(intervalId);
          dispatch({ type: GET_GOOGLE_USER, data: profile });
        }
      }
    }
    return false;
  }, 200);
};
