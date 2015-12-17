import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './UiComponents/component.jsx';
import ApiHandler from './Components/apiHandler.js';

ReactDOM.render(<Hello/>, document.getElementById('app'));


var apiHandler = new ApiHandler();

var start = {
  time: '1400',
  date: '20151127'
};

var end = {
  time: '1530',
  date: '20151127'
};

apiHandler.getEmergencyCalls(start, end);