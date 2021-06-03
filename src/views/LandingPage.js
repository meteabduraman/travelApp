import { LitElement, html } from 'lit-element';
import '../components/HeroImage.js';
import '../components/HeroComponent.js';
import '../components/DestinationForm.js';
import '../components/ContentDescription.js';
import '../components/NavComponent.js';

export class LandingPage extends LitElement {
  static get properties() {
    return {
      countries: { type: Object },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('https://devschool-2020.firebaseio.com/mete/places.json')
      .then(res => res.json())
      .then(countries => {
        this.countries = Object.entries(countries).map(([key, value]) => [
          key,
          value.name,
        ]);
      })
      .catch(err => console.error(err));
  }

  render() {
    return html`
      <nav-component isOnLandingPage></nav-component>
      <hero-image></hero-image>
      <hero-component></hero-component>
      <destination-form .countries=${this.countries}></destination-form>
      <content-description></content-description>
    `;
  }
}

customElements.define('landing-page', LandingPage);
