import CallStore from './Components/CallStore.js';
import dispatcher from './Components/dispatcher.js';
import Router from './Components/Router.js';


  let callStore;
  dispatcher.addStore(callStore = new CallStore());

  let router = new Router();

