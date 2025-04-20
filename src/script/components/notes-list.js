import Swal from "sweetalert2";

class NotesList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.notes = [];
  }

  connectedCallback() {
    this.loadNotesByFilter();
    window.addEventListener("note-added", () => this.loadNotesByFilter());

    const observer = new MutationObserver(() => this.loadNotesByFilter());
    observer.observe(this, { attributes: true, attributeFilter: ["filter"] });
  }

  async loadNotesByFilter() {
    const filter = this.getAttribute("filter");

    this.renderLoadingIndicator(true);

    if (filter === "archived") {
      await this.fetchNotesArchived();
    } else {
      await this.fetchNotes();
    }

    this.render();

    setTimeout(() => {
      this.renderLoadingIndicator(false);
    }, 1000);
  }

  async fetchNotes() {
    this.renderLoadingIndicator(true);
    try {
      const response = await fetch("https://notes-api.dicoding.dev/v2/notes");
      const result = await response.json();
      if (result.status === "success") {
        this.notes = result.data;
      } else {
        this.notes = [];
      }
    } catch {
      this.notes = [];
      this.showResponseMessage("Terjadi kesalahan saat memuat catatan.");
    } finally {
      this.renderLoadingIndicator(false);
    }
  }

  async fetchNotesArchived() {
    try {
      const response = await fetch(
        "https://notes-api.dicoding.dev/v2/notes/archived",
      );
      const result = await response.json();
      if (result.status === "success") {
        this.notes = result.data;
      } else {
        this.notes = [];
      }
    } catch {
      this.notes = [];
      this.showResponseMessage("Terjadi kesalahan saat memuat catatan arsip.");
    }
  }

  async toggleArchive(id) {
    const note = this.notes.find((n) => n.id === id);
    if (!note) return;

    const endpoint = note.archived
      ? `https://notes-api.dicoding.dev/v2/notes/${id}/unarchive`
      : `https://notes-api.dicoding.dev/v2/notes/${id}/archive`;

    try {
      const response = await fetch(endpoint, { method: "POST" });
      const result = await response.json();
      if (result.status === "success") {
        this.loadNotesByFilter();
      } else {
        this.showResponseMessage(
          "Terjadi kesalahan saat mengubah status arsip.",
        );
      }
    } catch {
      this.showResponseMessage("Terjadi kesalahan saat mengubah status arsip.");
    }
  }

  async deleteNote(id) {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Catatan ini akan dihapus secara permanen.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(
          `https://notes-api.dicoding.dev/v2/notes/${id}`,
          {
            method: "DELETE",
          },
        );
        const result = await response.json();
        if (result.status === "success") {
          this.loadNotesByFilter();
          Swal.fire("Dihapus!", "Catatan telah dihapus.", "success");
        } else {
          this.showResponseMessage("Terjadi kesalahan saat menghapus catatan.");
        }
      } catch {
        this.showResponseMessage("Terjadi kesalahan saat menghapus catatan.");
      }
    } else {
      Swal.fire("Dibatalkan", "Penghapusan catatan dibatalkan.", "info");
    }
  }

  showResponseMessage(message = "Periksa koneksi internet Anda.") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  }

  renderLoadingIndicator(isLoading) {
    const loadingIndicator =
      this.shadowRoot.querySelector(".loading-indicator");

    if (isLoading) {
      if (!loadingIndicator) {
        const indicator = document.createElement("div");
        indicator.classList.add("loading-indicator");
        this.shadowRoot.appendChild(indicator);
      }
    } else {
      if (loadingIndicator) {
        loadingIndicator.remove();
      }
    }
  }

  render() {
    const filter = this.getAttribute("filter");
    let filteredNotes = this.notes;

    if (filter === "active") {
      filteredNotes = this.notes.filter((note) => !note.archived);
    } else if (filter === "archived") {
      filteredNotes = this.notes.filter((note) => note.archived);
    }

    if (!filteredNotes.length) {
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
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s forwards;
          transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        .loading-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border: 5px solid #f3f3f3;
          border-top: 5px solid #f1c40f;
          border-radius: 50%;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;

    const noteItems = filteredNotes
      .map(
        (note) => `        
        <div class="note-item">
          <div class="note-title">${note.title}</div>
          <div class="note-body">${note.body}</div>
          <span class="note-date">${new Date(
            note.createdAt,
          ).toLocaleDateString()}</span>
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
      `,
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
        const id = e.target.getAttribute("data-id");
        this.toggleArchive(id);
      });
    });

    this.shadowRoot.querySelectorAll(".delete-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        this.deleteNote(id);
      });
    });
  }
}

customElements.define("notes-list", NotesList);
