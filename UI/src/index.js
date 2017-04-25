import './app.scss'
import Popup from './Popup'
import Typehead from './Typehead'

class App {
  constructor() {
  }

  init() {
    this.renderButton({
      name: '弹出框',
      handler: this.renderPopup
    })
    this.renderButton({
      name: 'Typehead',
      handler: this.renderTypehead
    })
    this.renderShowbox()
  }

  renderButton(option) {
    let button = document.createElement('button')
    let name = document.createTextNode(option.name)
    button.classList.add('btn')
    button.appendChild(name)
    document.body.appendChild(button)
    button.addEventListener('click', option.handler, false)
  }

  renderShowbox() {
    let box = document.createElement('div')
    box.classList.add('box')
    document.body.appendChild(box)
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

  renderTypehead(e) {
    e.preventDefault()
  }
}

let app = new App()
app.init()
