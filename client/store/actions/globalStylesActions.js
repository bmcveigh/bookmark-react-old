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
      cardBackgroundColor: colorsRaw[2],
      cardLinkColor: colorsRaw[3],
      cardTextColor: colorsRaw[3],
      hoverColor: colorsRaw[4],
      textColor: colorsRaw[5],
      buttonColor: colorsRaw[7],
      buttonTextColor: '#FFFFFF',
      highlightColor: colorsRaw[6],
      tabColor: colorsRaw[5],
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
          color: colors.buttonTextColor,
        },
        card: {
          background: colors.cardBackgroundColor,
          color: colors.cardTextColor,
        },
        cardLink: {
          color: '#007bff',
          textDecoration: 'underline',
          ':hover': {
            background: 'transparent',
          },
        },
        menuSidebar: {
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
