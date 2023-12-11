class Table extends HTMLElement {

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
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      
      tr:nth-child(even) {
        background-color: #dddddd;
      }
    </style>
  
    <table>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>32</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>31</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>32</td>
      </tr>
    </table>
    `
  }
}

customElements.define('table-component', Table);