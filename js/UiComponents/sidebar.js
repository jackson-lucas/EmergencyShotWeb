import riot from 'riot';

riot.tag('sidebar',

`<div class="ui visible sidebar inverted vertical menu">
<div class="item">
  <b>{options.title}</b>
</div>
<div class="item">
  <div class="header">
    Modo
  </div>
  <div class="menu">
    <a class="active item" href="#">
    {options.pages[0]}
    </a>
    <a class="item" href="#">
    {options.pages[1]}
    </a>
  </div>
</div>
<div class="item">
  <div class="ui top right attached label">Filtrar Chamadas</div>
  <div id="drop" class="ui floating labeled icon dropdown button">
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
  </div>
</div>
<div class="pusher">
  <div class="bottom aligned item">Copyright (C) 2015</div>
</div>`,

// TODO:0 filter must work returning results to map and alerting user about actual state
function constructor(options) {
  this.options = options;



  this.on('mount', function() {
    $('.ui.dropdown').dropdown({'set selected': '1'});

    $('#drop').on('click', function () {
      console.log($('.ui.dropdown').dropdown('get value'));
    });
  }.bind(this));
});