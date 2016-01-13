import riot from 'riot'

// WARNING leaflet from npm is not working. Workaround is use global direct in html file.
// DONE:250 [LOW] Get leaflet link in html file and download file then import by the file.

riot.tag('map',

  `<div id="map"></div>`,

  function constructor (options) {
    this.options = options
    console.log('map options')
    console.log(options)

    console.log(options.data)
    // TODO:0 ENHANCEMENT marker on click show modal
    // DONE:150 convention a way to update the markers properly (this.on('update'))
    this.on('mount', function () {
      console.log('map mount')
      console.log(this.options)

      console.log(this.options.data)

      this.map = window.L.map('map').setView(this.options.data.defaultPosition,
        this.options.data.defaultZoom)

      window.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)

      this.markers = window.L.markerClusterGroup()
      let calls = this.options.data.calls
      for (let index = 0; index < calls.length; index++) {
        let call = calls[index]
        this.markers.addLayer(window.L.marker([call.lat, call.lon]))
      }
      this.map.addLayer(this.markers)
    }.bind(this))

    this.on('update', function () {
      console.log('map update')
      console.log(this.options)

      console.log(this.options.data)

      let calls = this.options.data.calls
      for (let index = 0; index < calls.length; index++) {
        let call = calls[index]
        this.markers.addLayer(window.L.marker([call.lat, call.lon]))
      }
      // TODO FIX update calls from server w/ setInterval(Solution: Promise?) is blocking UI
      // TODO FIX provide a better way to update server w/o have duplicated calls
      // this.markers.refreshClusters()
      this.map._onResize()
    }.bind(this))
  })
