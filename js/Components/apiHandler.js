import ACTION from './Action.js';
import dispatcher from './dispatcher.js';

export default class ApiHandler {
  constructor() {
    //dispatcher.dispatch(ACTION.REGISTER_LISTENER, {'listener': this})
  }

  dispatch(action, data) {
    switch (action) {
      case ACTION.ON_FILTER_SELECTED:

        break;
      default:

    }
  }

  // API format (date: yyyyddmm; time:hhmmss)
  getDate(date, hoursAgo) {
    let dateApi = {};

    if(date) {
      date.setHours(hours - hoursAgo);
    } else {
      date = new Date();
    }

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let seconds = date.getSeconds();

    dateApi.date = `${year}${day}${month}`;
    dateApi.time = `${hours}${minutes}${seconds}`;

    return {'api_format': dateApi, 'js_format': date};
  }

  getEmergencyCalls (hoursAgo) {
    let end = this.getDate();
    let start = this.getDate(end.js_format, hoursAgo);

    $.ajax({
      url: `http://127.0.0.1:3000/getCalls/${start.api_format.date}/
        ${start.api_format.time}/${end.api_format.date}/${end.api_format.time}`,
      error: function(error) {
        console.log("ERROR!!!");
        console.log(error);
      },
      success: function(data) {
        console.log("IT WORKED!!!");
        console.log(JSON.stringify(data));
      },
      type: 'GET'
    });
  };
};