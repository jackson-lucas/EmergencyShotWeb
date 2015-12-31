import riot from 'riot';
import Store from './Store.js';
import ACTION from './Action.js';

import '../UiComponents/app.js';

export default class CallStore extends Store {

  // TODO:10 set default position to Manaus and give proper default zoom to see the whole city.
  constructor() {
    super();
    this.data = {};
    this.data.calls = [{lat:51.505, lon:-0.09}, {lat:51.505, lon:-0.19}, {lat:51.505, lon:-0.29}, {lat:51.515, lon:-0.09}];
    // Underscore must be used when passing parameters to UI(RiotJS limitation).
    this.data.show_map = true;
    this.data.defaultZoom = 13;
    this.data.defaultPosition = [51.505, -0.09];
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
      default:

    }
  }


  routeChanged(mode) {
    let tag = riot.mount('app', { 'data': this.data });

    this.setView(tag);
  }
}