import ACTION from './Action.js';

/*
A Store is supposed to trigger only one view. If a second view is necessary,
 then a common parent of both views should be the view to be triggered.
 (It is implemented this way relaying on Virtual DOM provide by RiotJS)
*/
class Store {
  constructor() {

  }

  setView(view) {
    this.view = view;
  }

  trigger(action, data) {

    // Riot way to trigger
    this.view.update();
  }
}