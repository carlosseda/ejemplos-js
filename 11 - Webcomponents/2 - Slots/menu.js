// Un componente es una clase que extiende de HTMLElement,
// una clase es una plantilla para crear objetos, en este caso el objeto es un componente.

// Las ventajas de los componentes son:
// - Reutilizables 
// - Encapsulados
// - Independientes 

// Para crear un componente se debe usar la clase customElements y el método define
// customElements.define('nombre-del-componente', ClaseDelComponente)
// El nombre del componente debe tener un guión medio para que no se confunda con los elementos HTML
// El nombre del componente debe estar en minúsculas

// Para crear un componente se debe usar la clase HTMLElement

class Menu extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      ul{
        display: flex;
        gap: 1rem;
        list-style:none;
      }
    </style>

    <nav>
      <ul>
        <li>Inicio</li>
        <li>Contacto</li>
        <li>Tienda</li>
      </ul>
    </nav>
    `
  }
}

customElements.define('menu-component', Menu);
