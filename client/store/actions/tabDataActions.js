// Export Constants
export const GET_TAB_DATA = 'GET_TAB_DATA';

export function getTabData() {
  return (dispatch) => {
    return dispatch({
      type: GET_TAB_DATA,
      data: {
        userProfile: [
          {
            href: '/user/profile',
            label: 'My Profile',
            isSelected: true,
          },
          {
            href: '/user/profile/appearance',
            label: 'Customize Appearance',
            isSelected: false,
          },
        ],
      },
    });
  };
}
