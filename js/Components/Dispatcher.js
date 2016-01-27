// This is a singleton cause there must be only one Dispatcher for everyone.
let dispatcher = (function () {
  let stores = []

  function addStore (store) {
    stores.push(store)
  }

  function on (action, data) {
    for (let index = 0; index < stores.length; index++) {
      stores[index].dispatch(action, data)
    }
  }

  function dispatch (action, data) {
    on(action, data)
  }

  return {
    'on': on,
    'addStore': addStore,
    'dispatch': dispatch
  }
})()

export default dispatcher
