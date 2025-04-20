class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const loaderTemplate = document.createElement("template");
    loaderTemplate.innerHTML = `
        <style>
          :host {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
            text-align: center;
          }
  
          .loader {
            border: 5px solid #f3f3f3;
            border-top: 5px solid #f1c40f;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 2s linear infinite;
          }
  
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
        <div class="loader"></div>
      `;
    shadow.appendChild(loaderTemplate.content);
  }

  connectedCallback() {
    this.style.display = "block";
  }

  disconnectedCallback() {
    this.style.display = "none";
  }
}

customElements.define("loading-indicator", LoadingIndicator);
