import './app.scss'
import Popup from './Popup'

class App {
  constructor() {
  }

  init() {
    this.renderButton({
      name: '弹出框',
      handler: this.renderPopup
    })
  }

  renderButton(option) {
    let button = document.createElement('button')
    let name = document.createTextNode(option.name)
    button.classList.add('btn')
    button.appendChild(name)
    document.body.appendChild(button)
    button.addEventListener('click', option.handler, false)
  }

  renderPopup(e) {
    e.preventDefault()
    let popup = new Popup({
      skin: 'yellow'
    })
    popup.init()
  }
}

let app = new App()
app.init()
