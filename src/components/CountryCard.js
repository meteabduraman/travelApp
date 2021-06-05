import { LitElement, html, css } from 'lit-element';
import './CityCard.js';
import './BadgeComponent.js';

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

      div,
      ul {
        display: flex;
        overflow-x: auto;
        align-items: center;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li:hover {
        background-color: #eeeeee;
      }

      h3 {
        color: #2e4381;
        font-size: 30px;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <li>
        <div style="margin-left: 15px; margin-bottom: 5px;">
          <h3>${this.country.name}</h3>
          <badge-component outline
            >${this.country.cities.number} destinations</badge-component
          >
        </div>
        <ul>
          ${Object.entries(this.country.cities)
            .filter(([key]) => key !== 'number')
            .map(([, value]) => html`<city-card .city=${value}></city-card>`)}
        </ul>
      </li>
    `;
  }
}

customElements.define('country-card', CountryCard);
