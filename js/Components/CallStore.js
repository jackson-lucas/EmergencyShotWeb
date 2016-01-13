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
    this.timer = null
    this.hoursAgo = null
    this.data.imageApiPath = 'localhost:3000/getImage/'
    this.data.callSelected = {}
    this.data.calls = []
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
        // TODO:30 REFACTOR app architecture use Publish/Subscribe Pattern
        break
      case ACTION.ON_CALL_SELECTED:
        this.data.callSelected = data.call_selected
        riot.update()
        // riot.mount('app', { 'data': this.data })
        break
      default:

    }
  }

  onSelectFilter (filter, lastCall) {
    let apiHandler = new ApiHandler()

    if (this.timer) {
      window.clearInterval(this.timer)
    }

    this.timer = window.setInterval(function () {
      apiHandler.getEmergencyCalls(filter, lastCall)
    }, 5000)
  }

  routeChanged (mode) {
    // TODO:20 FIX when app start with table on change to map. the map is not loaded.
    if (this.listener) {
      riot.update()
    } else {
      let tag = riot.mount('app', { 'data': this.data })
      this.setListener(tag[0])
    }
    // DONE:50 INVESTIGATE should mount just on first and then update?
  }
}
