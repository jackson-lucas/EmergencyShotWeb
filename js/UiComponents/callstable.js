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
    <virtual>
    <tr each="{options.calls}">
      <td>{id_sinistro}</td>
      <td>{data}</td>
      <td>{horario}</td>
      <td>{lon}</td>
      <td>{lat}</td>
    </tr>
    </virtual>
  </tbody>
</table>`,

// TODO try create table dinamically through .tag file. if not work jQuery on mount.
// TODO after work, try replicate problem and report on riot js github issues
function constructor(options) {
  this.options = options;

  console.log(this.options);
  console.log("options.calls[0]");
});