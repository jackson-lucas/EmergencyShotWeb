import riot from 'riot'
import './sidebar.js'
import './content.js'
import './imageModal.js'

// DONE:300 create component sidebar
// DONE:310 CSS framework must have table, dialog, dropdown(select), sidebar
// DONE:290 create component map
// DONE:280 create a initial page with sidebar and map
// DONE:270 add leaflet plugin to project and make it work
// DONE:250 create router /#!/map for map
// DONE:240 create router /#!/table for table
// DONE:230 nest sidebar call to execute before each router(map, table)
riot.tag('app',

  `<image-modal path="{options.data.imageApiPath}" call="{options.data.callSelected}"></image-modal>
<sidebar show_map="{options.data.show_map}"></sidebar>
<content data="{options.data}"></content>`,

  function constructor (options) {
    this.options = options
    console.log('app initializing')
    console.log(options)
    console.log(options.data)
  })
