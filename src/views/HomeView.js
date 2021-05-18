import { LitElement, html, css } from 'lit-element';

export class HomeView extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  render() {
    return html` <h1>Home View</h1> `;
  }
}

customElements.define('home-view', HomeView);
