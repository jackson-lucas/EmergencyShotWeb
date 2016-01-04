import riot from 'riot';

import './sidebar.js';
import './content.js';


// DONE:160 create component sidebar
// DONE:170 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:150 create component map
// DONE:140 create a initial page with sidebar and map
// DONE:130 add leaflet plugin to project and make it work
// DONE:110 create router /#!/map for map
// DONE:100 create router /#!/table for table
// DONE:90 nest sidebar call to execute before each router(map, table)
riot.tag('app',

`<sidebar show_map="{options.data.show_map}"></sidebar>
<content data="{options.data}"></content>`,

function constructor(options) {
  this.options = options;
  console.log("app initializing");
  console.log(options);
  console.log(options.data);
});
