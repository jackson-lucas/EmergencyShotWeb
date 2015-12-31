// This is a singleton cause there must be only one Dispatcher for everyone.

let dispatcher = (function () {
  let stores = [];

  function addStore(store) {
    console.log("store added");
    stores.push(store);
  };

  function on(action, data) {
    console.log("called received");
    console.log(stores);
    for(let index = 0; index < stores.length; index++) {
      console.log(stores[index] + "received");
      stores[index].dispatch(action, data);
    }
  };

  function dispatch(action, data) {
    console.log("calling on");
    on(action, data);
  };

  return {
    'on': on,
    'addStore': addStore,
    'dispatch': dispatch
  }
})();

export default dispatcher;