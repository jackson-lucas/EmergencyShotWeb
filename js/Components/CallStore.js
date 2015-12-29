import riot from 'riot';
import Store from './Store.js';
import ACTION from './Action.js';

import '../UiComponents/app.js';

export default class CallStore extends Store {

  constructor() {
    super();
    this.calls = [];
  }

  on(action, data) {
    console.log('ACTION FIRED ' + action);

    switch (action) {
      case ACTION.ON_ROUTE_CHANGE:
        this.routeChanged(data.show_map);
        break;
      default:

    }
  }

  // Underscore must be used when passing parameters to UI(RiotJS limitation).
  routeChanged(mode) {
    let tag = riot.mount('app',
      { 'calls': this.calls,
      'show_map': mode });

    this.setView(tag);
  }
}