import riot from 'riot';
import './UiComponents/sidebar.js';
import './UiComponents/map.js';
import './UiComponents/content.js';
import './UiComponents/table.js';


// DONE:40 create component sidebar
// DONE:50 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:30 create component map
// DONE:20 create a initial page with sidebar and map
// TODO:20 get api call and join with map
// DONE:10 add leaflet plugin to project and make it work
// DOING:0 create router /#!/map for map
// TODO:10 create router /#!/table for table
// TODO:30 nest sidebar call to execute before each router(map, table)
riot.tag('app',

`<sidebar title="{options.title}" pages="{options.pages}"></sidebar>
<content show_map="{options.show_map}"></content>`,

function constructor(options) {
  this.options = options;
  console.log(options);
});

riot.mount('app', { title: 'EmergencyShot', pages: ['Mapa', 'Tabela'], show_map: true });
