window.customElements.define("example-component", class ExampleComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        const h1 = document.createElement("h1");
        h1.innerText = "Example Component v1.0.1";
        h1.style.color = this.getAttribute("color");
        this.shadowRoot.appendChild(h1);
    }
})