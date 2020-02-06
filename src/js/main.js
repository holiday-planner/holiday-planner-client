$( document ).ready(() => {
  console.log('ready')
})

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token;
  console.log('masuk k onSignIn') 
  axios({
    method: 'post',
    url: 'http://localhost:3000/auth/googleSign',
    data: {
      id_token
    }
  })
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => {
      console.log(err.response)
    })
}