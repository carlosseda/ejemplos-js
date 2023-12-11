class Form extends HTMLElement {

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
      form {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      label {
        margin-bottom: 10px;
      }
      input {
        border: 1px solid #dddddd;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
      }  
    </style>
  
    <form>
      <label for="name">Nombre</label>
      <input type="text" id="name" name="name" placeholder="Nombre">
    </form>
    `
  }
}

customElements.define('form-component', Form);