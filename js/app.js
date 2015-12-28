import riot from 'riot';
import Router from './Components/router.js';

import './UiComponents/sidebar.js';
import './UiComponents/content.js';


// DONE:70 create component sidebar
// DONE:80 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:60 create component map
// DONE:50 create a initial page with sidebar and map
// DONE:40 add leaflet plugin to project and make it work
// DONE:20 create router /#!/map for map
// DONE:10 create router /#!/table for table
// DONE:0 nest sidebar call to execute before each router(map, table)
riot.tag('app',

`<sidebar title="{options.title}" pages="{options.pages}"></sidebar>
<content show_map="{options.show_map}"></content>`,

function constructor(options) {
  this.options = options;
  console.log(options);
});

var router = new Router();
