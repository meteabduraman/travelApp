import { LitElement, html, css } from 'lit-element';
import './form/FormButton.js';
import './BadgeComponent.js';
import './HotelCard.js';

export class HeroComponent extends LitElement {
  static get properties() {
    return {
      city: { type: Object },
      country: { type: Array },
    };
  }

  static get styles() {
    return css`
      a {
        text-decoration: none;
      }

      figure {
        margin: 0;
      }

      button {
        cursor: pointer;
      }

      input {
        cursor: text;
      }

      main {
        margin: 0;
      }

      #hero {
        margin-top: var(--nav-height);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: white;
      }

      #hero h1 {
        font-size: xxx-large;
      }

      #hero ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      @media screen and (max-width: 480px) {
        #hero h1 {
          width: 80%;
        }
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        #hero h1 {
          width: 80%;
        }
      }

      @media screen and (min-width: 769px) and (max-width: 1024px) {
        #hero {
          margin-top: calc(var(--nav-height) * 2);
        }
      }

      @media screen and (min-width: 1025px) {
        #hero {
          margin-top: calc(var(--nav-height) * 3);
        }
      }
    `;
  }

  render() {
    return html`
      <section id="hero">
        ${this.city
          ? html`
              <h1>${this.city[1].name}</h1>
              ${this.city[1].type === 'capital'
                ? html` <h2>Capital of ${this.country[1]}</h2> `
                : html`
                    <h2>
                      ${this.city[1].type.charAt(0).toUpperCase() +
                      this.city[1].type.slice(1)}
                      in ${this.country[1]}
                    </h2>
                  `}
              <badge-component
                >${this.city[1].hotels.number} available hotels</badge-component
              >
              <ul>
                ${Object.entries(this.city[1].hotels).map(
                  ([, hotel], index) => html`<hotel-card
                    .hotel=${hotel}
                    .index=${index + 1}
                  ></hotel-card>`
                )}
              </ul>
            `
          : html`
              <h1>
                Discover The World <br />
                With Us
              </h1>
              <form-button>Start Tour</form-button>
            `}
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
