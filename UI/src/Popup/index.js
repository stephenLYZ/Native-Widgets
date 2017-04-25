import './popup.scss'

class Popup {
  constructor(options) {
    this.options = Object.assign({}, Popup.DEFAULT, options)
    this.container = this.options.container
    this.title = this.options.title
    this.content = this.options.content
    this.open = this.options.open
    this.close = this.options.close
    this.isFork = this.options.isFork
    this.isDrag = this.options.isDrag
    this.isMask = this.options.isMask
    this.width = this.options.width
    this.height = this.options.height
    this.skin = this.options.skin
  }

  init() {
    this.containerBox = document.querySelector(`.${this.container}`)
    this.mask =  document.querySelector('.mask')
    let styleValue = `width: ${this.width}px; height: ${this.height}px;`
    if(!this.containerBox) {
      this.containerBox = document.createElement('div')
      this.containerBox.classList.add(this.container)
      this.containerBox.classList.add(this.skin)
      this.containerBox.classList.add('box')
      this.containerBox.setAttribute('style', styleValue)
      document.body.appendChild(this.containerBox)
      this.render()
      this.renderFork()
      this.renderMask()
      this.bindEvents()
    }
    this.containerBox.classList.toggle('show')
    if(this.mask) this.mask.classList.toggle('show')
  }

  renderMask() {
    if(this.isMask) {
      this.mask = document.createElement('div')
      this.mask.classList.add('mask')
      document.body.appendChild(this.mask)
    }
  }

  renderFork() {
    if(this.isFork) {
      this.header = document.querySelector('.header')
      this.fork = document.createElement('span')
      this.fork.classList.add('fork')
      this.header.appendChild(this.fork)
    }
  }

  render() {
    let tpl = `<div class="header"> ${this.title} </div>` +
              `<div class="content"> ${this.content} </div>` +
              `<div class="footer">` +
              `<button class="open btn">${this.open.name}` +
              `<button class="close btn">${this.close.name}` +
              `</div>`
    this.containerBox.innerHTML = tpl
  }


  bindEvents() {
    this.openNode = document.querySelector('.open')
    this.closeNode = document.querySelector('.close')

    this.openNode.addEventListener('click', this.open.handler, false)
    this.closeNode.addEventListener('click', this.close.handler, false)

    if(this.fork) {
      this.fork.addEventListener('click', () => {
        this.toggle()
      }, false)
    }
    
    if(this.mask) {
      this.mask.addEventListener('click', () => {
        this.toggle()
      }, false)
    }
  }

  toggle() {
    this.containerBox.classList.toggle('show')
    if(this.mask) this.mask.classList.toggle('show')
  }
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
  height: 200,
  skin: 'blue'
}

export default Popup
