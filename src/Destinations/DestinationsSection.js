import { LitElement, html, css } from 'lit-element';
import '../DestinationCard/index.js';

export class DestinationsSection extends LitElement {
  static get properties() {
    return {
      _destinations: { type: Object },
    };
  }

  static get styles() {
    return css``;
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('https://devschool-2020.firebaseio.com/mete/places.json')
      .then(res => res.json())
      .then(destinations => {
        this._destinations = destinations;
      })
      .catch(err => console.error(err));
  }

  render() {
    return html`
      <main>
        <h2>Places</h2>
        ${Object.entries(this._destinations).map(
          ([key, value]) =>
            html`<destination-card .destination=${value}></destination-card>`
        )}
      </main>
    `;
  }
}
