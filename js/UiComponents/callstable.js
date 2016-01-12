import riot from 'riot'
import SINISTER from '../Components/SINISTER.js'
import ACTION from '../Components/ACTION.js'
import dispatcher from '../Components/dispatcher.js'
import './imageButton.js'
// DONE:90 create table dynamically

riot.tag('calls-table',

  `
  <table class="ui red table">
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
    <tr each="{call in options.calls}">
      <td>{call.sinistro}</td>
      <td>{call.data}</td>
      <td>{call.horario}</td>
      <td>{call.endereco}</td>
      <td>
        <div onclick="{this.showModal.bind(this, call)}" class="ui icon button">
          <i class="photo icon"></i>
        </div>
      </td>
    </tr>
    </virtual>
  </tbody>
  </table>`,

  function constructor (options) {
    this.options = options

    this.setSinistersName = function setSinistersName () {
      let calls = this.options.calls

      for (let index = 0; index < calls.length; index++) {
        calls[index].sinistro = SINISTER[calls[index].id_sinistro - 1]
      }
    }

    this.showModal = function () {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!')
      console.log(arguments)
      dispatcher.dispatch(ACTION.ON_CALL_SELECTED, {'call_selected': arguments[0]})
      // DONE:10 FIX CRITICAL after each show, a new modal is created
      // DOING:0 change semantic ui component table to order the table properly
      // DONE:0 FIX MEDIUM on route change(map/table), riot should update and not mount.
      window.$('#modal')
        .modal('setting', 'transition', 'horizontal flip')
        .modal('show')
    }

    this.on('mount', function () {
      console.log('mounting table')
      this.setSinistersName()
    }.bind(this))

    this.on('update', function () {
      this.setSinistersName()
    })
  })
