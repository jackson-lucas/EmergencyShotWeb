import riot from 'riot';
import dispatcher from '../Components/dispatcher.js';
import ACTION from '../Components/Action.js';

riot.tag('dropdown',

`<div onclick="{onSelectFilter}" class="ui floating labeled icon dropdown button">
  <i class="filter icon"></i>
  <span class="text">Filtrar por horas</span>
  <div class="menu">
    <div class="header">
      Chamadas de até
    </div>
    <div class="divider"></div>
    <div class="item">
      <span class="description">hora atrás</span>
      <span class="text">1</span>
    </div>
    <div class="item">
      <span class="description">horas atrás</span>
      <span class="text">2</span>
    </div>
    <div class="item">
      <span class="description">horas atrás</span>
      <span class="text">3</span>
    </div>
    <div class="item">
      <span class="description">horas atrás</span>
      <span class="text">4</span>
    </div>
    <div class="item">
      <span class="description">horas atrás</span>
      <span class="text">5</span>
    </div>
    <div class="item">
      <span class="description">horas atrás</span>
      <span class="text">6</span>
    </div>

  </div>
</div>`,

function constructor(options) {
  this.options = options;
  this.value = '';

  this.onSelectFilter = function onSelectFilter() {
    let selected = $('.selected > .text');
    let newValue = selected.first().text();

    if(newValue && newValue != this.value) {

      this.value = newValue;

      dispatcher.dispatch(ACTION.ON_SELECT_FILTER, {'value': this.value});
      console.log("Dispatched: " + ACTION.ON_SELECT_FILTER);
    }
  }

  this.on('mount', function() {

    $('.ui.dropdown').dropdown();

    // TODO:0 [FIX] onclick event must be on RiotJS way. jQuery's way do not avoid collision.
    // DONE:0 dispatch ON_SELECT_FILTER with the time to be queried.


  }.bind(this));
});