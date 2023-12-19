class Table extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []

    document.addEventListener('changeUrl', this.handleChangeUrl.bind(this))
  }

  // Podemos definir los atributos que queremos observar, si cambian de valor, se ejecuta el attributeChangedCallback
  
  static get observedAttributes () {
    return ['url']
  }

  connectedCallback () {}

  // Se ejecuta cuando se modifica un atributo observado
  // name: nombre del atributo
  // oldValue: valor anterior
  // newValue: valor nuevo

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'url') {
      this.loadData().then( this.render() )
    }
  }

  handleChangeUrl (event) {
    this.setAttribute('url', event.detail.url)
  }

  async loadData () {

    if(this.getAttribute('url') == '/api/admin/faqs') {
      this.data = [
        {
          "id": 1,
          "name": "faq",
          "date": "2021-10-01"
        },
        {
          "id": 2,
          "name": "faq",
          "date": "2021-10-01"
        },
        {
          "id": 3,
          "name": "faq",
          "date": "2021-10-01"
        }
      ]
    }

    if(this.getAttribute('url') == '/api/admin/users') {
      this.data = [
        {
          "id": 1,
          "name": "user",
          "date": "2021-10-01"
        },
        {
          "id": 2,
          "name": "user",
          "date": "2021-10-01"
        },
        {
          "id": 3,
          "name": "user",
          "date": "2021-10-01"
        }
      ]
    }
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
      <style>
        .table {
          background-color: #dddddd;
        }
        
        .table-element {
          display: flex;
          flex-direction: column;
          list-style: none;
        }

        li {
          font-size: 1.5rem;
        }

        span:first-child {
          font-weight: bold;
        }

        span:first-child::after {
          content: ':';
        }
      </style>
    
      <section class="table"></section>
    `

    const tableContainer = this.shadow.querySelector('.table')

    this.data.forEach(element => {

      const tableElementContainer = document.createElement('ul')
      tableElementContainer.classList.add('table-element')

      Object.entries(element).forEach(([key, value]) => {
          
        const tableElement = document.createElement('li')
        const tableElementKey = document.createElement('span')
        const tableElementValue = document.createElement('span')

        tableElementKey.textContent = key
        tableElementValue.textContent = value

        tableElement.appendChild(tableElementKey)
        tableElement.appendChild(tableElementValue)

        tableElementContainer.appendChild(tableElement)
      });

      tableContainer.appendChild(tableElementContainer)
    })
  }
}

customElements.define('table-component', Table);