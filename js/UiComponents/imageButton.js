import riot from 'riot';
import dispatcher from '../Components/dispatcher.js';
import ACTION from '../Components/ACTION.js';

// DONE:40 create table dynamically

riot.tag('image-button',

`<div onclick="{this.showImage}" class="ui icon button" tabindex="0">
  <i class="photo icon"></i>
</div>`,

function constructor(options) {
  this.options = options;


});