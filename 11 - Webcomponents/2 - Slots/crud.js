class Crud extends HTMLElement {

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
      .crud{
        display: flex;
        flex-direction: row;
        gap: 3rem;
        justify-content: space-between;
      }
      .table-section{
        width: 60%;
      }
      .form-section{
        width: 40%;
      }
    </style>
  
    <div class="crud">
      <div class="table-section">
        <slot name="table"></slot>
      </div>
      <div class="form-section">
        <slot name="form"></slot>
      </div>
    </div>
    `
  }
}

customElements.define('crud-component', Crud);