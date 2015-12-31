import riot from 'riot';

// WARNING leaflet from npm is not working. Workaround is use global direct in html file.
// DONE:90 [LOW] Get leaflet link in html file and download file then import by the file.

riot.tag('map',

`<div id="map"></div>`,

function constructor(options) {
  this.options = options;

  // DOING:0 convention a way to update the markers properly (this.on('update'))
  this.on('mount', function() {
    this.map = L.map('map').setView(this.options.data.defaultPosition,
       this.options.data.defaultZoom);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    this.markers = L.markerClusterGroup();
    let calls = this.options.data.calls;
    for(let index = 0; index < calls.length; index++) {
      let call = calls[index];
      this.markers.addLayer(L.marker([call.lat, call.lon]));
    }
    this.map.addLayer(this.markers);
  }.bind(this));

  this.on('update', function(data) {
    console.log('updating map');
    console.log(this.options.data);
    this.options.data = data;

    this.markers.clearLayers();

    let calls = data.calls;
    for(let index = 0; index < calls.length; index++) {
      let call = calls[index];
      this.markers.addLayer(L.marker([call.lat, call.lon]));
    }

    
  }.bind(this));
});