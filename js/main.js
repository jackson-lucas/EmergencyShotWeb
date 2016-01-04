import CallStore from './Components/CallStore.js';
import dispatcher from './Components/dispatcher.js';
import Router from './Components/Router.js';
import ApiHandler from './Components/ApiHandler.js';

let callStore = new CallStore();
dispatcher.addStore(callStore);

let router = new Router();

