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
export default class Store {
  constructor() {
    this.view = null;
  }

  setView(view) {
    this.view = view;
  }

  dispatch(action, data) {
    this.on(action, data);
  }

  on(action, data) {


    if(this.view) {
      // Riot way to trigger view update
      this.view.update();
    }
  }
}