import { LitElement, html, css } from 'lit-element';

export class AdminView extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  render() {
    return html` <h1>Admin View</h1> `;
  }
}

customElements.define('admin-view', AdminView);
