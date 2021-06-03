import { LitElement, html, css } from 'lit-element';
import './form/FormButton.js';

export class HeroComponent extends LitElement {
  static get properties() {
    return {};
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
        <h1>
          Discover The World <br />
          With Us
        </h1>
        <form-button>Start Tour</form-button>
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
