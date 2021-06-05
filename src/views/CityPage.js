import { LitElement, html, css } from 'lit-element';
import '../components/NavComponent.js';
import '../components/HeroImage.js';
import '../components/HeroComponent.js';

export class CityPage extends LitElement {
  static get properties() {
    return {
      cityName: { type: String },
      _country: { type: Object },
      _city: { type: Object },
    };
  }

  static get styles() {
    return css``;
  }

  onBeforeEnter(location) {
    if (location?.params?.cityName)
      this.cityName = location.params.cityName.replace('-', ' ');
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('https://devschool-2020.firebaseio.com/mete/places.json')
      .then(res => res.json())
      .then(countries => {
        this._country = Object.entries(countries).find(([, country]) =>
          Object.entries(country.cities)
            .slice(0, -1)
            .some(([key, city]) => {
              if (city.name.toLowerCase() === this.cityName) {
                this._city = [key, city];
                return true;
              }
              return false;
            })
        );
      })
      .catch(err => console.error(err));
  }

  render() {
    return html`
      <nav-component></nav-component>
      <hero-image .city=${this._city}></hero-image>
      <hero-component
        .city=${this._city}
        .country=${[this._country[0], this._country[1].name]}
      ></hero-component>
    `;
  }
}

customElements.define('city-page', CityPage);
