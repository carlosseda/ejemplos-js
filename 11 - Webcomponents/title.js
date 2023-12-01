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

class Title extends HTMLElement {

  // El constructor es el primer método que se ejecuta cuando se crea un objeto
  constructor () {
    // El método super() es para llamar al constructor de la clase padre
    super()
    // El método attachShadow es para crear un shadowRoot, un shadowRoot es un DOM independiente
    // esto quiere decir que el shadowRoot no se puede acceder desde el DOM principal, lo cual 
    // es bueno para encapsular el componente. Significa que el CSS y el JS del componente no
    // afecta al DOM principal, lo que pase en el shadowRoot se queda en el shadowRoot. 
    this.shadow = this.attachShadow({ mode: 'open' })
    // El método getAttribute es para obtener el valor de un atributo del componente
    // un componente puede tener atributos, los atributos son como propiedades del componente
    // los atributos se definen en el HTML del componente
    this.title = this.getAttribute('title')
  }

  // El método connectedCallback se ejecuta cuando el componente se renderiza en el DOM
  connectedCallback () {
    this.render()
  }

  // El método render es para renderizar el componente en el DOM
  render () {
    // El shadowRoot tiene el método innerHTML para insertar HTML en el shadowRoot
    this.shadow.innerHTML =
    `
    <style>
      h1{
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        margin: 0;
      }
    </style>

    <div class="title">
      <h1>${this.title}</h1>
    </div>
    `

    // Para usar el método querySelector ahora se debe usar el shadowRoot
    this.shadow.querySelector('.title').addEventListener('click', () => {
      this.alertMessage()
    })
  }

  alertMessage () {
    alert('Hello World')
  }
}

customElements.define('title-component', Title);