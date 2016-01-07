import riot from 'riot';
import Store from './Store.js';
import ACTION from './Action.js';
import ApiHandler from './ApiHandler.js';

import '../UiComponents/app.js';

export default class CallStore extends Store {

  // TODO:40 set default position to Manaus and give proper default zoom to see the whole city.
  constructor() {
    super();

    this.data = {};
    this.data.calls = [
      {data:"11-27-2015",horario:"15:15:00",lat:"-3.116528",lon:"-60.031731",id_sinistro:"1"}, {data:"11-27-2015",horario:"16:00:00",lat:"-3.113528",lon:"-60.021731",id_sinistro:"2"}, {data:"11-27-2015",horario:"23:10:00",lat:"-3.110528",lon:"-60.001731",id_sinistro:"1"}];
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
        //riot.update();

        //this.listener.update({ 'data': this.data });
        // This is a workaround. Correct way is by update but it's not working
        // TODO:0 INVESTIGATE Why update riot.update and app.update isn't working. The update should be directly on the elements that need be updated? maybe create our own update(dispatch).
        riot.mount('app', { 'data': this.data });
        console.log(this.listener);
        // DONE:0 TEST if listener is updated
        // TODO:20 REFACTOR app architecture about event vs observe, listener vs view and apiHandlers
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
    // TODO:10 INVESTIGATE should mount just on first and then update?
    this.setListener(tag[0]);
  }
}