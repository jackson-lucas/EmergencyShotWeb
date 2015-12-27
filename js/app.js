import riot from 'riot';
import './UiComponents/sidebar.js';
import './UiComponents/map.js';


// DONE:20 create component sidebar
// DONE:30 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:10 create component map
// DONE:0 create a initial page with sidebar and map
// TODO:30 get api call and join with map
// DOING:0 add leaflet plugin to project and make it work
// TODO:10 create router /#!/map for map
// TODO:20 create router /#!/table for table
// TODO:40 nest sidebar call to execute before each router(map, table)
riot.tag('app',

`<sidebar title="{options.title}" pages="{options.pages}"></sidebar>
<map></map>`,

function constructor(options) {
  this.options = options;
});

riot.mount('app', { title: 'EmergencyShot', pages: ['Mapa', 'Tabela'] });
