/*
A Store is supposed to trigger only one view. If a second view is necessary,
 then a common parent of both views should be the view to be triggered.
 (It is implemented this way relaying on Virtual DOM provide by RiotJS)
*/
/* The implementation let multiple stores be created, but one store for all
  project is the recommendation. If it gets too large, then divide the
  events handlers in subcomponents.
*/
// Comparing with MVC, Store is the Controller.

// TODO [REFACTOR] eliminate on() in Store and others components. All components just dispatch.

/*
 WARNING this implementation do not cover dynamic components that don't listen
 anymore. If this one day be necessary, it must be implemented. YAGNI principle.
 */
export default class Store {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  dispatch(action, data) {
    this.on(action, data);
  }

  on(action, data) {

  }
}