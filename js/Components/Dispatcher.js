import ACTION from './Action.js';

// This is a singleton cause there must be only one Dispatcher for everyone.
class Dispatcher {
  constructor() {
    this.stores = [];
  }

  addStore(store) {
    this.stores.push(store);
  }

  trigger(action, data) {
    for(let index = 0; index < this.stores.length; index++) {
      this.stores[index].trigger(action, data);
    }
  }
}

let dispatcher = new Dispatcher();

export dispatcher;