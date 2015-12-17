import $ from 'jquery';

export default class ApiHandler {
  getEmergencyCalls (start, end) {
    $.ajax({
      url: `http://127.0.0.1:3000/getCalls/${start.date}/${start.time}/${end.date}/${end.time}/`,
      data: {
        format: 'json'
      },
      error: function(error) {
        console.log("ERROR!!!");
      },
      dataType: 'jsonp',
      success: function(data) {
        console.log("IT WORKED!!!");
        console.log(data);
      },
      type: 'GET'
    });
  };
};