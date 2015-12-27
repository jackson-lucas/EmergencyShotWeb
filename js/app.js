import Riot from 'riot';
import './UiComponents/sidebar.js';
import './UiComponents/map.js';


// DONE:10 create component sidebar
// DONE:20 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:0 create component map
// DOING:0 create a initial page with sidebar and map
// TODO:30 get api call and join with map
// TODO:0 add leaflet plugin to project and make it work
// TODO:10 create router /#!/map for map
// TODO:20 create router /#!/table for table
// TODO:40 nest sidebar call to execute before each router(map, table)
Riot.mount('sidebar', { title: 'EmergencyShot', pages: ['Mapa', 'Tabela'] });
Riot.mount('map');
