import riot from 'riot';

import './sidebar.js';
import './content.js';


// DONE:130 create component sidebar
// DONE:140 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:120 create component map
// DONE:110 create a initial page with sidebar and map
// DONE:100 add leaflet plugin to project and make it work
// DONE:80 create router /#!/map for map
// DONE:70 create router /#!/table for table
// DONE:60 nest sidebar call to execute before each router(map, table)
riot.tag('app',

`<sidebar show_map="{options.data.show_map}"></sidebar>
<content data="{options.data}"></content>`,

function constructor(options) {
  this.options = options;
  console.log("app initializing");
  console.log(options);
});
