import riot from 'riot';

riot.tag('tr',

`<td>{call.id_sinistro}</td>
<td>{data}</td>
<td>{horario}</td>
<td>{lat}</td>
<td>{lon}</td>
`,

function constructor(options) {
  this.options = options;
});