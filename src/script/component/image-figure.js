class ImageFigure extends HTMLElement {
    constructor() {
      super();

      this.render();
    }

    render() {
      this.innerHTML = `
      <figure>
    <img src="notes-image.jpg" alt="Logo Note APP" />
    <figcaption>Buat jadwal anda pada Notes APP</figcaption>
    </figure>
  `;
    }
  }
   
  customElements.define('image-figure', ImageFigure);