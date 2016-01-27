import riot from 'riot'

riot.tag('image-button',

  `<div onclick="{this.showImage}" class="ui icon button" tabindex="0">
  <i class="photo icon"></i>
</div>`,

  function constructor (options) {
    this.options = options
  })
