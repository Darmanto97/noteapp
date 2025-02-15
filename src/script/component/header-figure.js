class HeaderFigure extends HTMLElement{
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
        <header>
        <h1>Notes App</h1>
        </header>
        `;
    }
}

customElements.define('header-figure', HeaderFigure);