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
    const preferences = user.preferences || {};
    const themeSettings = preferences.themeSettings || false;

    if (!themeSettings) {
      return;
    }

    const colorsRaw = themeSettings.colors.split(/,/g);

    const colors = {
      backgroundColor: colorsRaw[0],
      textColor: colorsRaw[5],
      buttonColor: colorsRaw[1],
      highlightColor: colorsRaw[2],
      tabColor: colorsRaw[1],
    };

    dispatch({
      type: GET_USER_PREFERENCE_STYLES,
      data: {
        background: {
          background: colors.backgroundColor,
        },
        body: {
          color: colors.textColor,
        },
        button: {
          background: colors.buttonColor,
        },
        highlightColor: {
          ':hover': {
            background: colors.highlightColor,
          },
        },
        tabs: {
          notSelected: {
            color: colors.tabColor,
          },
          selected: {
            borderBottom: `3px solid ${colors.tabColor}`,
            color: colors.tabColor,
          },
        },
      },
    });
  };
}
