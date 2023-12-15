class Menu extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.data = [
      {
        "title": "Faqs",
        "url": "/api/admin/faqs"
      },
      {
        "title": "Usuarios",
        "url": "/api/admin/users"
      }
    ]
  }

  connectedCallback () {
    this.render()
  }

  render () {
    
    this.shadow.innerHTML =
    /*html*/`
    <style>

      .menu {
        background-color: #dddddd;
      }

      .menu ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        list-style: none;
      }

      li{
        cursor: pointer;
        font-size: 1.5rem;
      }
    </style>
  
    <section class="menu">
      <ul>
        ${this.data.map(item => `<li data-url="${item.url}">${item.title}</li>`).join('')}
      </ul>
    </section>
    `

    this.shadow.querySelector('.menu').addEventListener('click', (event) => {

      if(event.target.closest('li')) {

        const menuItem = event.target.closest('li')

        document.dispatchEvent(new CustomEvent('changeUrl', { 
          detail: { 
            url: menuItem.dataset.url 
          } 
        }))
      }
    })
  }
}

customElements.define('menu-component', Menu);