import riot from 'riot';

import './sidebar.js';
import './content.js';


// DONE:90 create component sidebar
// DONE:100 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:80 create component map
// DONE:70 create a initial page with sidebar and map
// DONE:60 add leaflet plugin to project and make it work
// DONE:40 create router /#!/map for map
// DONE:30 create router /#!/table for table
// DONE:20 nest sidebar call to execute before each router(map, table)
riot.tag('app',

`<sidebar show_map="{options.data.show_map}"></sidebar>
<content data="{options.data}"></content>`,

function constructor(options) {
  this.options = options;
  console.log("app initializing");
  console.log(options);
});
