import { LitElement, html, css } from 'lit-element';
import './BadgeComponent.js';

export class CityCard extends LitElement {
  static get properties() {
    return {
      city: { type: Object },
    };
  }

  static get styles() {
    return css`
      a {
        text-decoration: none;
      }

      a {
        display: block;
        border-radius: 20px;
        box-shadow: 0px 2px 14px -2px rgba(127, 127, 127, 0.5);
        position: relative;
        width: 350px;
        height: 150px;
        font-family: 'Ilisarniq';
        background-size: auto;
        background-position: 50% 50%;
        padding: 10px 10px;
        margin-right: 15px;
        margin-bottom: 15px;
        transition: var(--transition);
      }

      a::before {
        top: 0;
        left: 0;
        border-radius: 20px;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(
          320deg,
          rgba(25, 102, 252, 0) 39%,
          rgba(25, 102, 252, 1) 98%
        );
        transition: var(--transition);
      }

      a:hover,
      a:focus {
        transition: var(--transition);
        transform: scale(0.98);
      }

      a:hover::before,
      a:focus::before {
        background: linear-gradient(
          320deg,
          rgba(25, 102, 252, 0) 0%,
          rgba(25, 102, 252, 1) 100%
        );
      }

      h4 {
        font-size: 40px;
        margin: 5px;
        position: relative;
        color: #fff;
      }
    `;
  }

  render() {
    return html`
      <a
        href="places/${this.city.name.toLowerCase().replace(' ', '-')}"
        title=${this.city.name}
      >
        <h4>${this.city.name}</h4>
        <badge-component>${this.city.hotels.number} hotels</badge-component>
      </a>
      <style>
        a {
          background-image: url(${this.city.pic.link});
        }
      </style>
    `;
  }
}

customElements.define('city-card', CityCard);
