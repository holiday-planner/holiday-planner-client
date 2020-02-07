$( document ).ready(() => {
  console.log('ready')
})

$(document).ready(function(){
  checkLogin()
  pageNavigator()

})

function checkLogin () {
  if (localStorage.getItem('token')){
    pageMain()
    console.log('sudah login')
  } else {
    pageLanding()
    console.log('belum login')
  }
  console.log('checked')
}

function pageMain () {
  $("#loginPage").hide()
  $("#mainPage").show()
}

function pageLanding () {
  $("#loginPage").show()
  $("#mainPage").hide()
}

function pageNavigator () {
  // Navigator
  $("#btnHome").click(function(){
    pageMain()
  })
  $("#btnLogin").click(function(){
    pageLanding()
  })
  // end of navigator
}
