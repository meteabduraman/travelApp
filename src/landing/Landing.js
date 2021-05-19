import { LitElement, html, css } from 'lit-element';
import './components/HeroImage.js';
import './components/Hero.js';
import './components/DestinationForm.js';
import './components/ContentDescription.js';

export class Landing extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css``;
  }

  render() {
    return html`
      <hero-image></hero-image>
      <hero-component></hero-component>
      <destination-form></destination-form>
      <content-description></content-description>
    `;
  }
}

customElements.define('landing-page', Landing);
