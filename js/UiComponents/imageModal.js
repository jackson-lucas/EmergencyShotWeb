import riot from 'riot';

// DONE:10 create table dynamically

riot.tag('image-modal',

`<div class="ui active fullscreen modal">
  <i class="close icon"></i>
  <div class="header">
    {options.call.sinistro}
  </div>
  <div class="image content">
    <div class="ui big image">
      <img src="#">
    </div>
    <div class="description">
      {options.call.date}d
      <div class="ui divider"></div>{options.call.horario}d
      <div class="ui divider"></div>{options.call.endereco}d
    </div>
  </div>
</div>`,

function constructor(options) {
  this.options = options;
  console.log(options);
  console.log("DFDFSDFSDFSDFSDFSD");
});