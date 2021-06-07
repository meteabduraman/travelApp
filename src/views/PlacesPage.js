import { LitElement, html, css } from 'lit-element';
import '../components/CountryCard.js';
import '../components/NavComponent.js';

export class PlacesPage extends LitElement {
  static get properties() {
    return {
      _countries: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: 'Ilisarniq';
      }

      h2 {
        display: block;
        width: max-content;
        margin-left: auto;
        margin-right: auto;
        color: #2e4381;
        font-size: 30px;
      }

      p {
        display: block;
        max-width: 500px;
        margin: 0px auto 25px auto;
        text-align: center;
        color: #2e4381;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li:hover {
        background-color: #eeeeee;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('https://devschool-2020.firebaseio.com/mete/places.json')
      .then(res => res.json())
      .then(countries => {
        this._countries = countries;
      })
      .catch(err => console.error(err));
  }

  render() {
    return html`
      <nav-component></nav-component>
      <h2>Our destinations</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi
        ipsum dolores velit aut est sint error nemo repellendus perspiciatis
        doloribus eum nobis nihil soluta eaque, asperiores alias veritatis
        ducimus.
      </p>
      <ul>
        ${Object.entries(this._countries).map(
          ([, value]) =>
            html` <li><country-card .country=${value}></country-card></li> `
        )}
      </ul>
    `;
  }
}

customElements.define('places-page', PlacesPage);
