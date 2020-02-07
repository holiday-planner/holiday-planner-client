function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.')
  })
  localStorage.clear()
  checkLogin()
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
      localStorage.token = data.token
      checkLogin()
    })
    .catch(err => {
      console.log(err.response)
    })
}

function onFailure(error) {
  console.log(error);
}

function renderButton() {
  console.log('masuk render button')
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 220,
    'height': 40,
    'longtitle': true,
    'theme': 'light',
    'onsuccess': onSignIn,
    'onfailure': onFailure
  });
}