import callApi from '../../util/apiCaller';

// Export Constants
export const REGISTER_USER = 'REGISTER_USER';

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
