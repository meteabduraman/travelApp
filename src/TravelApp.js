import { LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';
import './views/LandingPage.js';
import './views/PlacesPage.js';
import './views/CityPage.js';
import './views/AddDestinationPage.js';
import './components/FooterComponent.js';

export class TravelApp extends LitElement {
  firstUpdated() {
    const main = this.shadowRoot.querySelector('main');
    const router = new Router(main);
    router.setRoutes([
      { path: '/places', component: 'places-page' },
      { path: '/places/:cityName', component: 'city-page' },
      { path: '/add-destination', component: 'add-destination-page' },
      { path: '/', component: 'landing-page' },
      { path: '(.*)', component: 'landing-page' },
    ]);
  }

  render() {
    return html`
      <main></main>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('travel-app', TravelApp);
