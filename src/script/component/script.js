import NoteApi from "../data/remote/api.js";

class NoteItem extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="note">
          <h2>${this.getAttribute('title')}</h2>
          <p>${this.getAttribute('body')}</p>
          <button class="edit-note">Edit</button>
          <button class="delete-note">Hapus</button>
        </div>
      `;
      this.querySelector('.edit-note').addEventListener('click', () => this.editNote());
    this.querySelector('.delete-note').addEventListener('click', () => this.deleteNote());
  }

   editNote() {
    const title = prompt('Edit title:', this.getAttribute('title'));
    const body = prompt('Edit body:', this.getAttribute('body'));
    if (title && body) {
      this.setAttribute('title', title);
      this.setAttribute('body', body);
      NoteApi.updateNote(this.getAttribute('id'), { title, body });
      this.connectedCallback();
    }
  }

  deleteNote() {
    if (confirm('Are you sure you want to delete this note?')) {
      NoteApi.deleteNote(this.getAttribute('id'));
      this.remove();
    }

    }
  }
  
  customElements.define('note-item', NoteItem);
  
  document.addEventListener('DOMContentLoaded', async() => {
    const notesData = await NoteApi.showNotes()
    console.log(notesData);
    const notesList = document.getElementById('notes-list');
    notesData.data.forEach(note => {
      const noteItem = document.createElement('note-item');
      noteItem.setAttribute('id', note.id);
      noteItem.setAttribute('title', note.title);
      noteItem.setAttribute('body', note.body);
      console.log(noteItem);
      notesList.appendChild(noteItem);
  })
  
  const noteForm = document.getElementById('note-form');
    noteForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const title = document.getElementById('note-title').value;
      const body = document.getElementById('note-body').value;
      const newNote = {
        id: `notes-${Date.now()}`,
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      }

    await NoteApi.createNotes({title, body });
      noteForm.reset();
      const notesData = await NoteApi.showNotes()
      console.log(notesData);
      const notesList = document.getElementById('notes-list');
      notesData.data.forEach(note => {
      const noteItem = document.createElement('note-item');
      noteItem.setAttribute('id', Note.id)
      noteItem.setAttribute('title', Note.title);
      noteItem.setAttribute('body', Note.body);
      console.log(noteItem);
      notesList.appendChild(noteItem);
   })
  })
});