class Header extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    
    // Un slot es un espacio para insertar HTML en el componente

    this.shadow.innerHTML =
    /*html*/`

    <style>
      header{
        align-items: center;
        display: flex;
        gap: 2rem;
      }
    </style>
  
    <header>
      <slot></slot>
    </header>
    `
  }
}

customElements.define('header-component', Header);