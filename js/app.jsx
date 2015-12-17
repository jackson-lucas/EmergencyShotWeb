import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './UiComponents/component.jsx';
import ApiHandler from './Components/apiHandler.js';

ReactDOM.render(<Hello/>, document.getElementById('app'));


var apiHandler = new ApiHandler();

var start = {
  time: '',
  date: ''
};

var end = {
  time: '',
  date: ''
};

apiHandler.getEmergencyCalls(start, end);