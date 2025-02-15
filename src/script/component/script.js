import NoteApi from "../data/remote/api.js";

class NoteItem extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="note">
          <h2>${this.getAttribute('title')}</h2>
          <p>${this.getAttribute('body')}</p>
        </div>
      `;
    }
  }
  
  customElements.define('note-item', NoteItem);
  
  document.addEventListener('DOMContentLoaded', async() => {
    const notesData = await NoteApi.showNotes()
    console.log(notesData);
    const notesList = document.getElementById('notes-list');
    notesData.data.forEach(note => {
      const noteItem = document.createElement('note-item');
      noteItem.setAttribute('title', note.title);
      noteItem.setAttribute('body', note.body);
      console.log(noteItem);
      notesList.appendChild(noteItem);
    });
  
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
      };
      await NoteApi.createNotes({title, body });
      const NoteItem = await NoteApi.showNotes();
      noteItem.setAttribute('title', newNote.title);
      noteItem.setAttribute('body', newNote.body);
      notesList.appendChild(noteItem);
      noteForm.reset();
    });
  });