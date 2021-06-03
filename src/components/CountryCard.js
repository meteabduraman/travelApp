import { LitElement, html, css } from 'lit-element';
import './CityCard.js';

export class CountryCard extends LitElement {
  static get properties() {
    return {
      country: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: 'Ilisarniq';
        margin-bottom: 50px;
      }

      h3 {
        color: #2e4381;
        font-size: 30px;
        margin: 0;
      }

      p {
        display: block;
        padding: 2px 8px;
        width: max-content;
        border-radius: 50px;
        position: relative;
        border: 1px solid #2e4381;
        color: #2e4381;
        margin-left: 10px;
      }

      div {
        display: flex;
        overflow-x: auto;
        align-items: center;
      }
    `;
  }

  render() {
    return html`
      <div style="margin-left: 15px; margin-bottom: 5px;">
        <h3>${this.country.name}</h3>
        <p>${this.country.cities.number} destinations</p>
      </div>
      <div>
        ${Object.entries(this.country.cities)
          .filter(([key]) => key !== 'number')
          .map(([, value]) => html`<city-card .city=${value}></city-card>`)}
      </div>
    `;
  }
}

customElements.define('country-card', CountryCard);
