class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  show() {
    this.classList.add('show');
  }

  hide() {
    this.classList.remove('show');
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          opacity: 0;
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 9999;
          justify-content: center;
          align-items: center;
          transition: opacity 0.3s ease;
        }

        :host(.show) {
          opacity: 1;
          pointer-events: auto;
        }

        .loader {
          width: 60px;
          height: 60px;
          border: 6px solid #e0e0e0;
          border-top: 6px solid #1abc9c;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loader-text {
          margin-top: 90px;
          position: absolute;
          color: white;
          font-size: 1rem;
          font-weight: bold;
          font-family: sans-serif;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>

      <div class="loader"></div>
      <div class="loader-text">Memuat...</div>
    `;
  }
}

if (!customElements.get('loading-indicator')) {
  customElements.define('loading-indicator', LoadingIndicator);
}
