import riot from 'riot';

riot.tag('sidebar',

`<nav>
  <ul class="right hide-on-med-and-down">
    <li><a href="#!">First Sidebar Link</a></li>
    <li><a href="#!">Second Sidebar Link</a></li>
  </ul>
  <ul id="slide-out" class="side-nav">
      <li><a href="#!">First Sidebar Link</a></li>
      <li><a href="#!">Second Sidebar Link</a></li>
    </ul>
    <a href="#" data-activates="slide-out" class="button-collapse show-on-large"><i class="mdi-navigation-menu"></i></a></i></a>
</nav>`,

function constructor(options) {
  this.options = options;
});