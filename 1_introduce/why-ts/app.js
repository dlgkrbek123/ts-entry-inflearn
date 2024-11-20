// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 *
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then((res) => {
  // res.address.
});

function startApp() {
  fetchUser()
    .then(function (response) {
      response.data;

      user = response.data;
      console.log(user);

      username.innerHTML = user.name;
      email.innerHTML = user.email;
      address.innerHTML = user.address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
