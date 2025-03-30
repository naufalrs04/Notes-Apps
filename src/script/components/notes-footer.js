class NotesFooter extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          footer {
            text-align: center;
            padding: 1rem;
            background-color: #006A71;
            color: white;
            font-size: 0.9rem;
            font-family: sans-serif;
            margin-top: 2rem;
          }
  
          @media (max-width: 600px) {
            footer {
              font-size: 0.8rem;
              padding: 0.75rem;
            }
          }
        </style>
        <footer>
          &copy; ${new Date().getFullYear()} Notes App | Made with ❤️ by Naufal Rizki
        </footer>
      `;
    }
  }
  
  customElements.define("notes-footer", NotesFooter);
  