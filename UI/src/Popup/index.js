import './popup.scss'

class Popup {
  constructor(options) {
    this.container = options.container
    this.title = options.title
    this.content = options.content
    this.open = options.open
    this.close = options.close
    this.isFork = options.isFork
    this.isDrag = options.isDrag
    this.isMask = options.isMask
    this.width = options.width
    this.height = options.height
  }

  init() {
    let container = document.createElement('div')
    container.classList.add(this.container)
    this.renderHeader(container)
    document.body.appendChild(container)
  }

  renderHeader(container) {
    let header = document.createElement('div')
    header.classList.add('header')
    header.innerHTML = this.title
    container.appendChild(header)
  }
}

Popup.DEFAULT = {
  container: 'popup',
  title: 'Popup UI Component',
  content: 'This a popup ui component, by stephenliu',
  open: function() { console.log('open popup!') },
  close: function() { console.log('close popup!') },
  isFork: true,
  isDrag: true,
  isMask: true,
  width: 400,
  height: 200
}

export default Popup
