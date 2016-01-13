import ACTION from './ACTION.js'
import dispatcher from './dispatcher.js'

export default class ApiHandler {

  dispatch (action, data) {
    switch (action) {
      case ACTION.ON_FILTER_SELECTED:

        break
      default:

    }
  }

  dateToString (date) {
    date = date + ''
    if (date.length === 1) {
      date = '0' + date
    }

    return date
  }

  // API format (date: yyyyddmm; time:hhmmss)
  getDate (date = new Date(), hoursAgo) {
    console.log(date)
    let dateApi = {}

    if (hoursAgo) {
      console.log('Inside')
      date.setHours(date.getHours() - hoursAgo)
      console.log('HOUR AGO')
      console.log(date)
    }

    let day = this.dateToString(date.getDate())
    let month = this.dateToString(date.getMonth() + 1)
    let year = date.getFullYear()
    let minutes = this.dateToString(date.getMinutes())
    let hours = this.dateToString(date.getHours())
    // DONE:160 FIX Secons Pattern 2 seconds to 02 seconds
    let seconds = this.dateToString(date.getSeconds())

    dateApi.date = `${month}-${day}-${year}`
    dateApi.time = `${hours}:${minutes}:${seconds}`

    console.log(date)

    return {'api_format': dateApi, 'js_format': date}
  }

  getEmergencyCalls (hoursAgo, lastCall) {
    let start

    if (lastCall) {
      start = {
        api_format: {
          date: lastCall.date,
          time: lastCall.time
        }
      }
    } else {
      let end = this.getDate()
      start = this.getDate(end.js_format, hoursAgo)
    }

    console.log('emergency')
    console.log(hoursAgo)
    console.log(start)
    window.$.ajax({
      url: `http://127.0.0.1:3000/getCallsSince/${start.api_format.date}/${start.api_format.time}`,
      error: function (error) {
        console.log('ERROR!!!')
        console.log(error)
        dispatcher.dispatch(ACTION.ON_DATA_ERROR)
      },
      success: function (calls) {
        console.log('IT WORKED!!!')
        console.log(JSON.stringify(calls))
        // DONE:180 return calls to Store to store update calls
        if (calls) {
          dispatcher.dispatch(ACTION.ON_DATA_RECEIVED, {'calls': calls})
        }
      },
      type: 'GET'
    })
  }
}
