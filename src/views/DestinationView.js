import { LitElement, html, css } from 'lit-element';

export class DestinationView extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  render() {
    return html` <h1>Destination View</h1> `;
  }
}

customElements.define('destination-view', DestinationView);
