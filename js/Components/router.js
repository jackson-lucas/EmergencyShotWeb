import page from 'page';
import riot from 'riot';

export default class Router {
  constructor() {
    page.base('/#!');

    page('/', this.map);
    page('/table', this.table);
    page();
  }

  map() {
    riot.mount('app', { title: 'EmergencyShot', pages: ['Mapa', 'Tabela'], show_map: true });
  }

  table() {
    riot.mount('app', { title: 'EmergencyShot', pages: ['Mapa', 'Tabela'], show_map: false });
  }
}