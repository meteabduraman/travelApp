import { LitElement, html, css } from 'lit-element';

export class Hero extends LitElement {
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
      .emphasized-btn {
        width: var(--emphasized-nav-button-width);
        text-align: center;
        color: var(--light-blue);
        background-color: white;
        border-radius: var(--emphasized-nav-button-border-rad);
        box-shadow: 0px 2px 14px -2px rgba(127, 127, 127, 0.64);
        transition: var(--transition);
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

      .emphasized-btn {
        border: none;
        background-color: var(--light-blue);
        color: white;
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
        transition: var(--transition);
      }

      .emphasized-btn:hover {
        transform: scale(0.9);
        transition: var(--transition);
      }

      .emphasized-btn:active {
        background-color: white;
        color: var(--light-blue);
        transition: var(--transition);
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
        <a href="#" class="emphasized-btn">Start Tour</a>
      </section>
    `;
  }
}

customElements.define('hero-component', Hero);
