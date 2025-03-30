import notesData from "../data/data.js";

class NotesInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    padding: 2rem;
                    border-radius: 8px;
                    background-color: #f1f2f6;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    font-family: sans-serif;
                }

                label {
                    display: flex;
                    flex-direction: column;
                    font-weight: 700;
                    color: #006A71;
                }

                input,
                textarea {
                    margin-top: 0.25rem;
                    padding: 1rem;
                    font-size: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-family: inherit;
                    resize: vertical;
                }

                input:focus, textarea:focus {
                    outline: none;
                    border-color: #006A71;
                    box-shadow: 0 0 10px rgba(0, 106, 113, 0.5);
                }

                .error-message {
                    color: red;
                    font-style: italic;
                    font-size: 0.8rem;
                    margin-top: 5px;
                    display: block;
                }

                .invalid {
                    border-color: red !important;
                    box-shadow: 0 0 5px rgba(255, 0, 0, 0.5) !important;
                }

                button {
                    display: flex;
                    margin-top: 1rem;
                    padding: 0.5rem 1.25rem;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                    border: none;
                    border-radius: 4px;
                    background-color: #006A71;
                    color: #fff;
                    cursor: pointer;
                }

                button:hover {
                    background-color: rgb(5, 140, 149);
                }
            </style>

            <form id="note-form">
                <label>
                    Judul
                    <input type="text" id="title" placeholder="Title" required autocomplete="off" minlength="3" />
                    <span class="error-message" id="title-error"></span>
                </label>

                <label>
                    Isi
                    <textarea id="body" required minlength="5" placeholder="Write your note's description"></textarea>
                    <span class="error-message" id="body-error"></span>
                </label>

                <button type="submit">Tambah Catatan</button>
            </form>
        `;
  }

  setupEventListeners() {
    const form = this.shadowRoot.querySelector("#note-form");
    const titleInput = this.shadowRoot.querySelector("#title");
    const bodyInput = this.shadowRoot.querySelector("#body");
    const titleError = this.shadowRoot.querySelector("#title-error");
    const bodyError = this.shadowRoot.querySelector("#body-error");

    function validateTitle() {
      if (titleInput.value.trim().length < 3) {
        titleError.textContent = "Judul harus minimal 3 karakter.";
        titleInput.classList.add("invalid");
        return false;
      } 
      else {
        titleError.textContent = "";
        titleInput.classList.remove("invalid");
        return true;
      }
    }

    function validateBody() {
      if (bodyInput.value.trim().length < 5) {
        bodyError.textContent = "Isi catatan harus minimal 5 karakter.";
        bodyInput.classList.add("invalid");
        return false;
      } 
      else {
        bodyError.textContent = "";
        bodyInput.classList.remove("invalid");
        return true;
      }
    }

    titleInput.addEventListener("input", validateTitle);
    bodyInput.addEventListener("input", validateBody);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const isTitleValid = validateTitle();
      const isBodyValid = validateBody();

      if (isTitleValid && isBodyValid) {
        const newNote = {
          id: +new Date(),
          title: titleInput.value.trim(),
          body: bodyInput.value.trim(),
          createdAt: new Date().toISOString(),
          archived: false,
        };

        notesData.push(newNote);

        window.dispatchEvent(
          new CustomEvent("note-added", { detail: newNote })
        );

        form.reset();
      }
    });
  }
}

customElements.define("notes-input", NotesInput);