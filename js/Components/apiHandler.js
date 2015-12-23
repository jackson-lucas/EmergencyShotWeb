import $ from 'jquery';

export default class ApiHandler {
  getEmergencyCalls (start, end) {
    $.ajax({
      url: `http://127.0.0.1:3000/getCalls/${start.date}/${start.time}/${end.date}/${end.time}`,
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