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
      cardBackgroundColor: colorsRaw[3],
      cardLinkColor: colorsRaw[5],
      cardTextColor: colorsRaw[2],
      hoverColor: colorsRaw[4],
      textColor: colorsRaw[5],
      buttonColor: colorsRaw[3],
      highlightColor: colorsRaw[2],
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
          color: colors.cardTextColor,
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
