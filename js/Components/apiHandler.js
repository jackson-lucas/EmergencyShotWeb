import ACTION from './ACTION.js'
import dispatcher from './dispatcher.js'

export default class ApiHandler {

  dateToString (date) {
    date = date + ''
    if (date.length === 1) {
      date = '0' + date
    }

    return date
  }

  // API format (date: yyyyddmm; time:hhmmss)
  getDate (date = new Date(), hoursAgo) {
    let dateApi = {}

    if (hoursAgo) {
      date.setHours(date.getHours() - hoursAgo)
    }

    let day = this.dateToString(date.getDate())
    let month = this.dateToString(date.getMonth() + 1)
    let year = date.getFullYear()
    let minutes = this.dateToString(date.getMinutes())
    let hours = this.dateToString(date.getHours())
    let seconds = this.dateToString(date.getSeconds())

    dateApi.date = `${month}-${day}-${year}`
    dateApi.time = `${hours}:${minutes}:${seconds}`

    return {'api_format': dateApi, 'js_format': date}
  }

  getEmergencyCalls (hoursAgo, lastCall) {
    let start, action
    console.log('lastCall')
    console.log(lastCall)
    if (lastCall) {
      action = ACTION.ON_DATA_UPDATE
      start = {
        api_format: {
          date: lastCall.data,
          time: lastCall.horario
        }
      }
    } else {
      action = ACTION.ON_DATA_RECEIVED
      let end = this.getDate()
      start = this.getDate(end.js_format, hoursAgo)
    }

    let url = `http://127.0.0.1:3000/getCallsSince/${start.api_format.date}/${start.api_format.time}`
    let ajaxCall = function () {
      return window.$.ajax({
        url: url,
        type: 'GET'
      })
    }
    // TODO:10 after an ajax call when changing btw pages, 4-5 times after the does not change anymore. Don't seem to be relationated with Ajax, maybe state change?
    ajaxCall().done(function (calls) {
      console.log('calls')
      console.log(calls)
      if (calls.length && calls != 'ERROR') {
        dispatcher.dispatch(ACTION.ON_DATA_UPDATE, {'calls': calls})
      }
      window.setTimeout(this.nextUpdate, 20000)
    }.bind(this)).fail(function (error) {
      dispatcher.dispatch(ACTION.ON_DATA_ERROR)
      window.setTimeout(this.nextUpdate, 20000)
    }.bind(this))
  }

  nextUpdate () {
    dispatcher.dispatch(ACTION.ON_SELECT_FILTER, {'value': 6})
  }
}
