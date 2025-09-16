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

class Hero extends HTMLElement {
  
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
    this.color = this.getAttribute('color')
    this.message = this.getAttribute('message')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      h1{
        color: blue;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        margin: 0;
      }
    </style>

    <div class="title">
      <h1>${this.title}</h1>
    </div>
    `

    this.shadow.querySelector('.title').addEventListener('click', () => {
      this.alertMessage()
    })
  }

  alertMessage () {
    alert(this.message)
  }
}

customElements.define('hero-component', Hero);
