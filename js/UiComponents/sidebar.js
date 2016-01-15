import riot from 'riot'
import './dropdown.js'

riot.tag('sidebar',

  `<div class="ui visible sidebar inverted vertical menu">
<div class="item">
  <b>Bombeiros SOS</b>
</div>
<div class="item">
  <div class="ui top left attached label">Modo</div>
  <div class="menu">
    <a class="{ options.show_map ? 'active' : ''} item" href="#!/">Mapa</a>
    <a class="{ !options.show_map ? 'active' : ''} item" href="#!/table">Tabela</a>
  </div>
</div>
<div class="item">
  <div class="ui top left attached label">Filtrar Chamadas</div>
  <dropdown class="ui internally celled grid"></dropdown>
</div>
<div class="pusher">
  <div class="bottom aligned item">Copyright (C) 2015</div>
</div>`,

  // TODO:70 [LOW] change theme to a more proper way for emergency call system
  // TODO:0 Discover why on route change, app is not updated after a second dropdown choice
  // TODO:10 THINK eliminate filter and give a pattern?
  function constructor (options) {
    this.options = options
  }
)
