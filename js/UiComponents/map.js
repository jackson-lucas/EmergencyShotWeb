import riot from 'riot';

// WARNING leaflet from npm is not working. Workaround is use global direct in html file.
// DONE:120 [LOW] Get leaflet link in html file and download file then import by the file.

riot.tag('map',

`<div id="map"></div>`,

function constructor(options) {
  this.options = options;
  console.log("map options");
  console.log(options);

  console.log(options.data);

  // DONE:20 convention a way to update the markers properly (this.on('update'))
  this.on('mount', function() {
    console.log("map mount");
    console.log(this.options);

    console.log(this.options.data);

    let map = L.map('map').setView(this.options.data.defaultPosition,
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
    map.addLayer(this.markers);
  }.bind(this));

  
});