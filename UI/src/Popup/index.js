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
    let container = document.querySelector(`.${this.container}`)
    if(!container) {
      let container = document.createElement('div')
      container.classList.add(this.container)
      document.body.appendChild(container)
      this.render(container)
    }
    container.style.width = this.width
  }

  renderMask() {
    if(isMask) {
      let mask = document.createElement('div')
      mask.classList.add('mask')
      document.body.appendChild(mask)
    }
  }


  render(container) {
    let tpl = `<div class="header"> ${this.title} </div>` +
              `<div class="content"> ${this.content} </div>` +
              `<div class="footer">` +
              `<button id="open" class="btn">${this.open.name}` +
              `<button id="close" class="btn">${this.close.name}` +
              `</div>`
    container.innerHTML = tpl
  }

  bindEvents() {

  }

  show() {}
  hide() {}
}

Popup.DEFAULT = {
  container: 'popup',
  title: 'Popup UI Component',
  content: 'This a popup ui component, by stephenliu',
  open: {
    name: '确定',
    handler: function() { console.log('open popup!') }
  },
  close: {
    name: '取消',
    handler: function() { console.log('close popup!') }
  },
  isFork: true,
  isDrag: true,
  isMask: true,
  width: 400,
  height: 200
}

export default Popup
