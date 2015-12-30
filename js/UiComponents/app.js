import riot from 'riot';

import './sidebar.js';
import './content.js';


// DONE:80 create component sidebar
// DONE:90 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:70 create component map
// DONE:60 create a initial page with sidebar and map
// DONE:50 add leaflet plugin to project and make it work
// DONE:30 create router /#!/map for map
// DONE:20 create router /#!/table for table
// DONE:10 nest sidebar call to execute before each router(map, table)
riot.tag('app',

`<sidebar></sidebar>
<content data="{options.data}"></content>`,

function constructor(options) {
  this.options = options;
  console.log("app initializing");
  console.log(options);
});
