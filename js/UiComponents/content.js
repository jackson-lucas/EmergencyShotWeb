import riot from 'riot';
import './map.js';
import './table.js';

riot.tag('content',

`
<div class="my_content">
  <map data="{options.data}" show={options.data.show_map}></map>
  <table calls="{options.data.calls}" hide={options.data.show_map}></table>
</div>`,

function constructor(options) {
  this.options = options;
  console.log("content");
  console.log(options);
  console.log(options.data);
})