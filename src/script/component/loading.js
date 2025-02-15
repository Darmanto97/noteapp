document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('note-form');
    const loader = document.getElementById('loader');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      loader.style.display = 'block'; // menampilkang loading

      
      setTimeout(() => {
        loader.style.display = 'none'; 
        
        alert('Menambahkan');
      }, 3000); // Simulate a 3-second delay
    });
});