class Title extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.title = this.getAttribute('title')
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            h1 {
                font-size: 2rem;
                font-weight: 600;
                color: #fff;
            }
        </style>
        `;

        const title = document.createElement('h1');
        title.textContent = this.title;

        this.shadow.appendChild(title);
    }
}

customElements.define('title-component', Title);