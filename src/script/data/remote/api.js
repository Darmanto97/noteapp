const BASE_URL = 'https://notes-api.dicoding.dev';

class NoteApi {
    static showNotes() {
        return fetch(`${BASE_URL}/v2/notes`)
        .then((response) => {
            if (response.status >= 200 && response.status <300) {
                return response.json();
            } else {
                return Promise.reject(new Error(`Something went wrong`));
            }
        })
    }

    static createNotes(data) {
        fetch(`${BASE_URL}/v2/notes`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.status >= 200 && response.status <300) {
                return response.json();
            } else {
                return Promise.reject(new Error(`Something went wrong`));
            }
        })
    }

    static async updateNote(id) {
      try {
        const response = await fetch(`${BASE_URL}/v2/notes/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedNote),
        });
        return response.json();
      } catch (error) {
        console.error('Error updating note:', error);
      }
    }
    
      static async deleteNote(id) {
        try {
          const response = await fetch(`${BASE_URL}/v2/notes/${id}`, {
            method: 'DELETE',
          });
          return response.json();
        } catch (error) {
          console.error('Error deleting note:', error);
        }
      }
}

export default NoteApi;