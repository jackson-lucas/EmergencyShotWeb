import ApiHandler from './Components/apiHandler.js';
import Leaflet from 'leaflet';
import $ from 'jquery';
import page from 'page';

// TODO router with nested routes
function initRoutes () {
  var testRoutes = {
    test : function (context, next) {
      alert("testing");
      if(next) {
        next();
      }


    },
    test2 : function (context, next) {
      alert("I am jon snow, I know nothing.");
    }
  };
  page.base('/#!');

  page('/', testRoutes.test);
  page('/test', testRoutes.test2);
  page('/two-args', testRoutes.test, testRoutes.test2);
  page();
}
initRoutes();

function index() {
  document.querySelector('p')
    .textContent = 'viewing index';
}

function about() {
  document.querySelector('p')
    .textContent = 'viewing about';
}

function contact(ctx) {
  document.querySelector('p')
    .textContent = 'viewing contact ' + (ctx.params.contactName || '');
}