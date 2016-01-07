import riot from 'riot';
//import './callsrow.js';

// TODO create table dynamically

riot.tag('calls-table',

`<table class="ui red table">
  <thead>
    <tr>
      <th>Tipo do Sinistro</th>
      <th>Data</th>
      <th>Hora</th>
      <th>Endereço</th>
      <th>Foto</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>{options.calls[0].data}</td>
    <td>{data}</td>
    <td>{horario}</td>
    <td>{lat}</td>
    <td>{lon}</td>
  </tr>
    <virtual each={options.calls}>
      <div>{data}</div>
    </virtual>
  </tbody>
</table>`,

// TODO try create table dinamically through .tag file. if not work jQuery on mount.
// TODO after work, try replicate problem and report on riot js github issues
function constructor(options) {
  this.options = options;
  this.options.calls = [
    {data:"11-27-2015",horario:"15:15:00",lat:"-3.116528",lon:"-60.021731",id_sinistro:"1"}, {data:"11-27-2015",horario:"15:15:00",lat:"-3.116528",lon:"-60.021731",id_sinistro:"1"}, {data:"11-27-2015",horario:"15:15:00",lat:"-3.116528",lon:"-60.021731",id_sinistro:"1"}];
  console.log(this.options);
  console.log("options.calls[0]");

  this.on('mount', function () {
    this.options.calls = [
      {data:"11-27-2015",horario:"15:15:00",lat:"-3.116528",lon:"-60.021731",id_sinistro:"1"}, {data:"11-27-2015",horario:"15:15:00",lat:"-3.116528",lon:"-60.021731",id_sinistro:"1"}, {data:"11-27-2015",horario:"15:15:00",lat:"-3.116528",lon:"-60.021731",id_sinistro:"1"}];
  })
});