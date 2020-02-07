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

function getEvent(date) {
  axios({
    method: 'post',
    url: 'http://localhost:3000/events/',
    data: { date: date }
  })
    .then(({ data }) => {
      let table = '';
      let counter = 0;
      console.log(data)
      data.events.forEach(el => {
        counter += 1;
        table += `<tr>`
        table += `<th>${counter}</th>`
        table += `<th><img id="img-table${counter}" src="${el.images[0].url}"></th>`
        table += `<th>${el.dates.start.localDate}</th>`
        table += `<th>${el.name}</th>`
        // getWeather('2020-02-10', 'Jakarta', (weather) => {
        //   if(weather) {
        //     console.log(weather)
        //     table += `<th id="weather_col1">${weather}</th>`
        //   } else {
        //     table += `<th id="weather_col1">No data</th>`
        //   }
        // });
        table += '</tr>'
      });

      $('#event-table').html(table)

    })
    .catch(err => {
      $('#event-null').html(`<h2 style="text-align:center;">Not found</h2>`)
    })
}

function getWeather(date, address) {
  axios({
    method: 'post',
    url: 'http://localhost:3000/weather/',
    data: {
      date, address
    }
  })
    .then(({ data }) => {
      console.log(data)
      // callback(data)
      $('#weather').append(data)
    })
    .catch(err => {
      console.log(err)
    })
}

function pageLanding() {
  $("#loginPage").show()
  $("#navBar").hide()
  $("#mainPage").hide()
}
function pageMain() {
  $("#loginPage").hide()
  $("#navBar").show()
  $("#mainPage").show()
  $('#eventPage').hide()
}

function getAll(date) {
  getEvent(date)
  getWeather(date, 'New York')
  $('#eventPage').show()
  $("#holidayPage").hide()
}


$(document).ready(() => {
  checkLogin()
  getEvent('2020-02-12')
  getWeather('2020-02-10', 'Jakarta')
  console.log('ready')
})

