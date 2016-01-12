import riot from 'riot'
import Store from './Store.js'
import ACTION from './ACTION.js'
import ApiHandler from './ApiHandler.js'
import '../UiComponents/app.js'

// DONE:100 change origin location to center of Manaus

export default class CallStore extends Store {

  // DONE:70 on click link of image, show image in modal(popup like)
  // DONE:60 create sinister's list
  // DONE:80 set default position to Manaus and give proper default zoom to see the whole city.
  constructor () {
    super()

    this.data = {}
    this.data.imageApiPath = 'localhost:8080/getImage/'
    this.data.callSelected = {}
    this.data.calls = [{ data: '11-27-2015', horario: '15:15:00',
        lat: '-3.116528',
        lon: '-60.031731',
        id_sinistro: '1'
      }, { data: '11-27-2015', horario: '16:00:00',
        lat: '-3.113528',
        lon: '-60.021731', id_sinistro: '2'}, { data: '11-27-2015',
        horario: '23:10:00', lat: '-3.110528', lon: '-60.001731',
        id_sinistro: '1'
      }]
    // Underscore must be used when passing parameters to UI(RiotJS limitation).
    this.data.show_map = true
    this.data.defaultZoom = 12
    this.data.defaultPosition = [-3.043528, -59.99]
  }

  on (action, data) {
    console.log('ACTION FIRED ' + action)

    switch (action) {
      case ACTION.ON_ROUTE_CHANGE:
        console.log('data')
        console.log(data)
        this.data.show_map = data.show_map
        this.routeChanged(this.data.show_map)
        break

      case ACTION.ON_SELECT_FILTER:
        this.onSelectFilter(data.value)
        break
      case ACTION.REGISTER_LISTENER:
        this.addListener(data.listener)
        break
      case ACTION.ON_DATA_RECEIVED:
        console.log(data.calls)
        this.data.calls = data.calls
        riot.update()

        // this.listener.update({ 'data': this.data })
        // This is a workaround. Correct way is by update but it's not working
        // DONE:30 INVESTIGATE Why update riot.update and app.update isn't working. The update should be directly on the elements that need be updated? maybe create our own update(dispatch).
        // riot.mount('app', { 'data': this.data })
        // console.log(this.listener)
        // DONE:130 TEST if listener is updated
        // TODO:20 REFACTOR app architecture use Publish/Subscribe Pattern
        break
      case ACTION.ON_CALL_SELECTED:
        this.data.callSelected = data.call_selected
        riot.update()
        // riot.mount('app', { 'data': this.data })
        break
      default:

    }
  }

  onSelectFilter (filter) {
    let apiHandler = new ApiHandler()
    apiHandler.getEmergencyCalls(filter)
  }

  routeChanged (mode) {
    // TODO:10 FIX when app start with table on change to map. the map is not loaded.
    if (this.listener) {
      riot.update()
    } else {
      let tag = riot.mount('app', { 'data': this.data })
      this.setListener(tag[0])
    }
    // DONE:50 INVESTIGATE should mount just on first and then update?
  }
}
