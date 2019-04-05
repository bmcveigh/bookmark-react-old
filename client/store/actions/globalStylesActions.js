// Export Constants
export const SET_GLOBAL_STYLES = 'SET_GLOBAL_STYLES';
export const GET_USER_PREFERENCE_STYLES = 'GET_USER_PREFERENCE_STYLES';

export function setGlobalStyles(styles) {
  return (dispatch) => {
    return dispatch({
      type: SET_GLOBAL_STYLES,
      data: styles,
    });
  };
}

export function getUserPreferenceStyles(user) {
  return (dispatch) => {
    const preferences = user.preferences;
    const themeSettings = preferences.themeSettings;
    const colors = themeSettings.colors.split(/,/g);

    return dispatch({
      type: GET_USER_PREFERENCE_STYLES,
      data: {
        background: {
          background: colors[0],
        },
      },
    });
  };
}
