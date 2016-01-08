import riot from 'riot';
import SINISTER from '../Components/SINISTER.js';
import ACTION from '../Components/ACTION.js';
import dispatcher from '../Components/dispatcher.js';
import './imageButton.js';
// DONE:10 create table dynamically

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
    <tr each="{call, index in options.calls}">
      <td>{call.sinistro}</td>
      <td>{call.data}</td>
      <td>{call.horario}</td>
      <td>{call.lon}</td>
      <td>
        <div onclick="{this.showModal.bind(this, call)}" class="ui icon button">
          <i class="photo icon"></i>
        </div>
      </td>
    </tr>
    </virtual>
  </tbody>
</table>`,

function constructor(options) {
  this.options = options;

  this.setSinistersName = function setSinistersName() {
    let calls = this.options.calls;

    for(let index = 0; index < calls.length; index++) {
      calls[index].sinistro = SINISTER[calls[index].id_sinistro - 1];
    }
  };

  this.showModal = function () {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(arguments);
    dispatcher.dispatch(ACTION.ON_CALL_SELECTED, {'call_selected': arguments[0]});
  };

  this.addImageClickListener = function () {
    console.log("click click clik");
    console.log(this.showModal);

    // TODO [HIGH] discover a way to pass each call parameter to imageModal
    for(let index = 0; index < this.options.calls.length; index++) {
      let id = 'ESWimage'+index;
      //$(id).click(this.showModal);
      let image = document.getElementById(id);

      image.addEventListener('click', this.showModal);
    }

  };

  this.on('mount', function () {
    console.log('mounting table');
    this.addImageClickListener();
    this.setSinistersName();
  }.bind(this));

  this.on('update', function () {
    this.setSinistersName();
  })
});