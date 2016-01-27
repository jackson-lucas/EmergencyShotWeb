import riot from 'riot'

// WARNING leaflet from npm is not working. Workaround is use global direct in html file.

riot.tag('map',

  `<div id="map"></div>`,

  function constructor (options) {
    this.options = options

    // TODO:30 ENHANCEMENT marker on click show modal
    this.on('mount', function () {
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
      this.map.removeLayer(this.markers)
      this.markers = window.L.markerClusterGroup()
      let calls = this.options.data.calls
      for (let index = 0; index < calls.length; index++) {
        let call = calls[index]
        this.markers.addLayer(window.L.marker([call.lat, call.lon]))
      }
      this.map.addLayer(this.markers)
      this.map._onResize()
    }.bind(this))
  })
