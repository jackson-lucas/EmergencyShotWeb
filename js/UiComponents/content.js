import riot from 'riot';
import './map.js';
import './table.js';

riot.tag('content',

`
<div class="my_content">
  <map show={options.show_map}></map>
  <table hide={options.show_map}></table>
</div>`,

function constructor(options) {
  this.options = options;
  console.log(options);
})