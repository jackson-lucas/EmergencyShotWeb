import Leaflet from 'leaflet';
import Riot from 'riot';
import app from './UiComponents/sidebar.js';


// DONE:0 create component sidebar
// DONE:10 CSS framework must have table, dialog, dropdown(select), sidebar
// TODO:10 create component map
// TODO:0 create a initial page with sidebar and map
// TODO:50 get api call and join with map
// TODO:20 add leaflet plugin to project and make it work
// TODO:30 create router /#!/map for map
// TODO:40 create router /#!/table for table
// TODO:60 nest sidebar call to execute before each router(map, table)
Riot.mount('sidebar', { title: 'EmergencyShot', pages: ['Mapa', 'Tabela'] });
