import ApiHandler from './Components/apiHandler.js';
import Leaflet from 'leaflet';
import $ from 'jquery';
import page from 'page';

// TODO router with nested routes
page('/', function () {
  $('body').text('hello world!!!');
})
page('/user/:user', function () {

})
page('*', function () {
  $('body').text('not found');
})
page()