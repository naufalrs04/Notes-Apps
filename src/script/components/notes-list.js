import notesData from "../data/data.js";

class NotesList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    window.addEventListener("note-added", () => this.render());
  }

  toggleArchive(id) {
    const note = notesData.find((n) => n.id === id);
    if (note) {
      note.archived = !note.archived;
      this.render();
    }
  }

  deleteNote(id) {
    const index = notesData.findIndex((n) => n.id === id);
    if (index !== -1) {
      notesData.splice(index, 1);
      this.render();
    }
  }

  render() {
    if (!Array.isArray(notesData) || notesData.length === 0) {
      this.shadowRoot.innerHTML = `<p>Tidak ada data catatan ditemukan.</p>`;
      return;
    }

    let filteredNotes = notesData;

    // Ambil attribute filter
    const filter = this.getAttribute("filter");
  
    if (filter === "archived") {
      filteredNotes = notesData.filter((note) => note.archived);
    } else if (filter === "active") {
      filteredNotes = notesData.filter((note) => !note.archived);
    }
  
    if (!Array.isArray(filteredNotes) || filteredNotes.length === 0) {
      this.shadowRoot.innerHTML = `<p style="padding:1rem;">Tidak ada data catatan ditemukan.</p>`;
      return;
    }

    const styles = `
      <style>
        .note-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          padding: 1rem;
          font-family: sans-serif;
        }

        .note-item {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
        }

        .note-item:hover {
          box-shadow: 0 8px 16px rgba(0, 106, 113, 0.3);
          transform: scale(1.03);
          background-color: #f0fafa;
        }

        .note-title {
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #2d3436;
        }

        .note-body {
          font-size: 0.9rem;
          color: #636e72;
        }

        .note-date {
          font-size: 0.75rem;
          color: #b2bec3;
          margin-top: 0.5rem;
          display: block;
        }

        .note-status {
          font-size: 0.85rem;
          font-weight: bold;
          font-style: italic;
          margin-top: 0.5rem;
          padding: 5px 10px;
          border-radius: 5px;
          display: inline-block;
          color: white;
          background-color: #006A71;
        }

        .note-status.archived {
          background-color: #d63031;
        }

        .button-group {
          margin-top: 10px;
          display: flex;
          gap: 0.5rem;
        }

        .edit-button,
        .delete-button {
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 0.9rem;
        }

        .edit-button {
          background-color: #006A71;
          color: white;
        }

        .edit-button:hover {
          background-color: #028282;
        }

        .delete-button {
          background-color: #d63031;
          color: white;
        }

        .delete-button:hover {
          background-color: #e74c3c;
        }
      </style>
    `;

    const noteItems = filteredNotes
    .map(
      (note) => `
        <div class="note-item">
          <div class="note-title">${note.title}</div>
          <div class="note-body">${note.body}</div>
          <span class="note-date">${new Date(note.createdAt).toLocaleDateString()}</span>
          <span class="note-status ${note.archived ? "archived" : ""}">
            ${note.archived ? "Diarsipkan" : "Aktif"}
          </span>
          <div class="button-group">
            <button class="edit-button" data-id="${note.id}">
              ${note.archived ? "Keluarkan dari Arsip" : "Arsipkan"}
            </button>
            <button class="delete-button" data-id="${note.id}">Hapus</button>
          </div>
        </div>
      `
    )
    .join("");

  this.shadowRoot.innerHTML = `
    ${styles}
    <div class="note-list">
      ${noteItems}
    </div>
  `;

  this.shadowRoot.querySelectorAll(".edit-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      this.toggleArchive(id);
    });
  });

  this.shadowRoot.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      this.deleteNote(id);
    });
  });

    console.log(notesData);
  }
}

customElements.define("notes-list", NotesList);
