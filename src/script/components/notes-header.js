class NotesHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background-color: #006A71;
                    color: white;
                    padding: 1rem 2rem;
                    text-align: center;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                h1 {
                    margin: 0;
                    font-size: 2rem;
                }
            </style>
            <header>
                <h1>Notes App</h1>
            </header>
        `;
    }

}

customElements.define('notes-header', NotesHeader);
export default NotesHeader;