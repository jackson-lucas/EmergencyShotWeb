import riot from 'riot';
import Store from './Store.js';
import ACTION from './Action.js';
import ApiHandler from './ApiHandler.js';

import '../UiComponents/app.js';

export default class CallStore extends Store {

  // TODO:30 set default position to Manaus and give proper default zoom to see the whole city.
  constructor() {
    super();

    this.data = {};
    this.data.calls = [{lat:51.505, lon:-0.09}, {lat:51.505, lon:-0.19}, {lat:51.505, lon:-0.29}, {lat:51.515, lon:-0.09}];
    // Underscore must be used when passing parameters to UI(RiotJS limitation).
    this.data.show_map = true;
    this.data.defaultZoom = 13;
    this.data.defaultPosition = [51.505, -0.09];
    //this.data.defaultPosition = [-3.119028, -60.021731];
  }

  on(action, data) {
    console.log('ACTION FIRED ' + action);

    switch (action) {
      case ACTION.ON_ROUTE_CHANGE:
        console.log("data");
        console.log(data);
        this.data.show_map = data.show_map;
        this.routeChanged(this.data.show_map);
        break;

      case ACTION.ON_SELECT_FILTER:
        this.onSelectFilter(data.value);
        break;
      case ACTION.REGISTER_LISTENER:
        this.addListener(data.listener);
        break;
      case ACTION.ON_DATA_RECEIVED:
        console.log(data.calls);
        this.data.calls = data.calls;
        this.listener.update({ 'data': this.data });
        console.log(this.listener);
        // TODO TEST if listener is updated
        // TODO REFACTOR app architecture about event vs observe, listener vs view and apiHandlers
        break;
      default:

    }
  }

  onSelectFilter(filter) {
    let apiHandler = new ApiHandler();
    apiHandler.getEmergencyCalls(filter);
  }

  routeChanged(mode) {
    let tag = riot.mount('app', { 'data': this.data });
    // TODO:0 INVESTIGATE should mount just on first and then update?
    this.setListener(tag[0]);
  }
}