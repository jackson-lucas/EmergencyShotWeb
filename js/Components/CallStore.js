import riot from 'riot'
import Store from './Store.js'
import ACTION from './ACTION.js'
import ApiHandler from './ApiHandler.js'
import '../UiComponents/app.js'

export default class CallStore extends Store {

  constructor () {
    super()

    this.apiHandler = new ApiHandler()
    this.data = {}
    this.timer = null
    this.hoursAgo = null
    this.data.imageApiPath = 'http://localhost:3000/getImage/'
    this.data.callSelected = {}
    this.data.calls = []
    // Underscore must be used when passing parameters to UI(RiotJS limitation).
    this.data.show_map = true
    this.data.defaultZoom = 12
    this.data.defaultPosition = [-3.043528, -59.99]
  }

  on (action, data) {
    switch (action) {
      case ACTION.ON_ROUTE_CHANGE:
        this.data.show_map = data.show_map
        this.routeChanged(this.data.show_map)
        break

      case ACTION.ON_SELECT_FILTER:
        console.log('filter selected')
        if (this.data.calls.length && this.hoursAgo === data.value) {
          this.onSelectFilter(data.value,
            this.data.calls[this.data.calls.length - 1])
        } else {
          this.hoursAgo = data.value
          this.onSelectFilter(data.value, null)
        }

        break
      case ACTION.REGISTER_LISTENER:
        this.addListener(data.listener)
        break
      case ACTION.ON_DATA_UPDATE:
        this.data.calls = this.data.calls.concat(data.calls)
        riot.update()
        break
      case ACTION.ON_DATA_RECEIVED:
        this.data.calls = data.calls
        riot.update()

        // TODO:50 REFACTOR app architecture use Publish/Subscribe Pattern
        break
      case ACTION.ON_CALL_SELECTED:
        this.data.callSelected = data.call_selected
        riot.update()
        break
      default:

    }
  }

  onSelectFilter (filter, lastCall) {
    this.apiHandler.getEmergencyCalls(filter, lastCall)
  }

  routeChanged (mode) {
    // TODO:40 FIX when app start with table on change to map. the map is not loaded.
    if (this.listener) {
      riot.update()
    } else {
      let tag = riot.mount('app', { 'data': this.data })
      this.setListener(tag[0])
    }
  }
}
