import riot from 'riot';

import './sidebar.js';
import './content.js';
import './imageModal.js';


// DONE:220 create component sidebar
// DONE:230 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:210 create component map
// DONE:200 create a initial page with sidebar and map
// DONE:190 add leaflet plugin to project and make it work
// DONE:170 create router /#!/map for map
// DONE:160 create router /#!/table for table
// DONE:150 nest sidebar call to execute before each router(map, table)
riot.tag('app',

`<image-modal call="{options.data.callSelected}"></image-modal>
<sidebar show_map="{options.data.show_map}"></sidebar>
<content data="{options.data}"></content>`,

function constructor(options) {
  this.options = options;
  console.log("app initializing");
  console.log(options);
  console.log(options.data);
});
