import './autocomplete.scss'

class Autocomplete {
  constructor(options) {
  	this.options = Object.assign({}, Popup.DEFAULT, options)
  	this.container = document.querySelector(this.options.container)
  	this.delay = this.options.delay
  	this.source = this.options.source
  }

  init() {

  }
}

Autocomplete.keys = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  UP: 38,
  DOWN: 40,
  DELETE: 46
}

Autocomplete.DEFAULT = {
  container: null,
  delay: 0,
  source: null
}

export default Autocomplete