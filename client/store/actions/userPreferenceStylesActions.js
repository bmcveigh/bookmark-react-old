export const GET_USER_PREFERENCE_STYLES = 'GET_USER_PREFERENCE_STYLES';

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
      spaceHeaderBackgroundColor: colorsRaw[1],
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
          background: '#ffffff',
          color: colors.cardTextColor,
        },
        cardHeading: {
          background: colors.buttonColor,
          color: colors.buttonTextColor,
        },
        cardLink: {
          color: '#007bff',
          textDecoration: 'underline',
          ':hover': {
            background: colors.highlightColor === colors.cardBackgroundColor ? colors.backgroundColor : colors.highlightColor,
            color: colors.highlightColor === colors.cardBackgroundColor ? colors.cardBackgroundColor : colors.backgroundColor,
          },
        },
        menuSidebar: {
          background: colors.cardBackgroundColor,
        },
        menuSidebarItem: {
          color: colors.cardTextColor,
          ':hover': {
            background: colors.highlightColor === colors.cardBackgroundColor ? colors.backgroundColor : colors.highlightColor,
            color: colors.highlightColor === colors.cardBackgroundColor ? colors.cardBackgroundColor : colors.backgroundColor,
          },
        },
        spaceHeader: {
          background: colors.spaceHeaderBackgroundColor,
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
