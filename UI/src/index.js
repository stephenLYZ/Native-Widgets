import './app.scss'
import Popup from './Popup'
import Autocomplete from './Autocomplete'

class App {
  constructor() {
  }

  init() {
    this.renderButton({
      name: 'popup',
      handler: this.renderPopup
    })
    this.renderButton({
      name: 'autocomplete',
      handler: this.renderAutocomplete
    })
    this.renderButton({
      name: 'refresh',
      handler: this.renderRefresh
    })
  }

  renderButton(option) {
    let button = document.createElement('button')
    let name = document.createTextNode(option.name)
    button.classList.add('btn')
    button.classList.add(`btn-${option.name}`)
    button.appendChild(name)
    document.body.appendChild(button)
    button.addEventListener('click', option.handler.bind(this), false)
  }

  renderPopup(e) {
    e.preventDefault()
    let popup = new Popup({
      skin: 'blue',
      close: {
        name: '关闭',
        handler: function() {
          popup.toggle()
        }
      }
    })
    popup.init()
  }

  renderAutocomplete(e) {
    e.preventDefault()
    let button = document.querySelector('.btn-autocomplete')
    button.classList.toggle('on')
    if (!this.input) {
      this.input = document.createElement('input')
      this.input.classList.add('autocomplete')
      button.parentNode.insertBefore(this.input, null)
    }       
    this.enable(this.input, button.classList.contains('on'))
    let autocomplete = new Autocomplete({

    })
    autocomplete.init()
  }

  renderRefresh(e) {
    e.preventDefault()
    let button = document.querySelector('.btn-refresh')
    button.classList.toggle('on')
    if (!this.container) {
      
    }
    
  }

  enable(el, enabled = true) {
    el.classList.toggle('show', enabled)
  }



}

let app = new App()
app.init()
