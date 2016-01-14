import riot from 'riot'
// DONE:130 create table dynamically

riot.tag('image-modal',

  `<div id="modal" class="ui fullscreen modal">
  <i class="close icon"></i>
  <div class="header">
    {options.call.sinistro}
  </div>
  <div class="image content">
    <div class="ui big image">
      <img src="{options.path}{options.call.id}">
    </div>
    <div class="description">
      Data: {options.call.data}
      <div class="ui divider"></div>Horário: {options.call.horario}
      <div class="ui divider"></div>Endereço: {options.call.endereco}
    </div>
  </div>
</div>`,

  function constructor (options) {
    this.options = options
    console.log(options)
    console.log('DFDFSDFSDFSDFSDFSD')
  })
