import riot from 'riot'
import './map.js'
import './callsTable.js'

riot.tag('content',

  `
<div class="my_content">
  <map data="{options.data}" show={options.data.show_map}>
  </map>
  <calls-table calls="{options.data.calls}" hide={options.data.show_map}>
  </calls-table>
</div>`,

  function constructor (options) {
    this.options = options
  })
