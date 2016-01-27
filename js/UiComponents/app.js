import riot from 'riot'
import './sidebar.js'
import './content.js'
import './imageModal.js'

riot.tag('app',

  `<image-modal path="{options.data.imageApiPath}" call="{options.data.callSelected}"></image-modal>
<sidebar show_map="{options.data.show_map}"></sidebar>
<content data="{options.data}"></content>`,

  function constructor (options) {
    this.options = options
  })
