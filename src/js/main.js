function checkLogin() {
  if (localStorage.token) {
    pageMain()
    console.log('sudah login')
  } else {
    pageLanding()
    console.log('belum login')
  }
  console.log('checked')
}

function pageMain() {
  $("#loginPage").hide()
  $("#navBar").show()
  $("#mainPage").show()
}

function pageLanding() {
  $("#loginPage").show()
  $("#navBar").hide()
  $("#mainPage").hide()
}

$(document).ready(function () {
  checkLogin()
})
