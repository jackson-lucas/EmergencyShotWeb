import riot from 'riot';

riot.tag('dropdown',

`<div id="drop" class="ui floating labeled icon dropdown button">
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

  this.on('mount', function() {
    $('.ui.dropdown').dropdown();

    $('#drop').on('click', function () {
      console.log($('.ui.dropdown').dropdown('get value'));
    });
  }.bind(this));
});