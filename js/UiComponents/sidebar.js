import riot from 'riot';
import './dropdown.js';

riot.tag('sidebar',

`<div class="ui visible sidebar inverted vertical menu">
<div class="item">
  <b>EmergencyShot</b>
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

// DONE:10 filter must work returning results to map and alerting user about actual state
// TODO:50 [LOW] change theme to a more proper way for emergency call system
// DONE:70 change mode when clicked to. Also change active item when this happens.
function constructor(options) {
  this.options = options
  console.log(options);
});