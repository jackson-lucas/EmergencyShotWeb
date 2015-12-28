import riot from 'riot';

// WARNING leaflet from npm is not working. Workaround is use global direct in html file.
// DONE:30 [LOW] Get leaflet link in html file and download file then import by the file.

riot.tag('map',

`<div id="map"></div>`,

function constructor(options) {
  this.options = options;

  this.on('mount', function() {
    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var markers = L.markerClusterGroup();
    markers.addLayer(L.marker([51.5, -0.09]));
    markers.addLayer(L.marker([51.5, -0.19]));
    markers.addLayer(L.marker([51.5, -0.29]));
    markers.addLayer(L.marker([51.6, -0.39]));
    markers.addLayer(L.marker([51.5, -0.49]));
    map.addLayer(markers);
  }.bind(this));
});