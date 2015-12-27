import riot from 'riot';

// WARNING leaflet from npm is not working. Workaround is use global direct in html file.
// TODO:0 [LOW] Get leaflet link in html file and download file then import by the file.

riot.tag('map',

`<div id="map"></div>`,

function constructor(options) {
  this.options = options;

  this.on('mount', function() {
    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }.bind(this));
});