import { LitElement, html, css } from 'lit-element';
import './form/FormButton.js';

export class NavComponent extends LitElement {
  static get properties() {
    return {
      isOnLandingPage: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      a {
        text-decoration: none;
      }

      nav {
        height: var(--nav-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: var(--nav-lateral-margin);
        margin-right: var(--nav-lateral-margin);
        margin-top: var(--nav-top-margin);
      }

      .burger {
        display: none;
        flex-direction: column;
        position: absolute;
        right: 20px;
      }

      .burger span {
        display: block;
        width: 30px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background-color: white;
        border-radius: 3px;
      }

      .logo {
        font-size: larger;
        color: white;
        font-weight: bold;
      }

      .nav-menu {
        height: 100%;
        width: var(--nav-menu-width);
        display: flex;
        gap: 20px;
        list-style-type: none;
        align-items: center;
        justify-content: flex-end;
      }

      .nav-menu a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--dark-blue);
        transition: var(--transition);
      }

      .nav-menu a:hover {
        color: white;
        transition: var(--transition);
      }

      .nav-menu-and-btn {
        display: flex;
        justify-content: space-evenly;
        gap: 20px;
      }

      @media screen and (max-width: 480px) {
        nav {
          justify-content: center;
        }

        nav .logo {
          transform: scale(1.5);
        }

        .nav-menu {
          display: none;
        }

        .burger {
          display: flex;
        }
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        .nav-menu {
          width: 100px;
          margin-right: 20px;
        }

        .nav-menu a:not(#emphasized-nav-btn) {
          display: none;
        }

        .burger {
          display: flex;
        }
      }
    `;
  }

  render() {
    return html`
      <nav>
        <a class="logo" href="#">Travela</a>
        <div class="nav-menu-and-btn">
          <ul class="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Tour</a></li>
            <li><a href="#">Hotel</a></li>
            <li><a href="/places">Places</a></li>
            <li><a href="/add-destination">Add Destination</a></li>
          </ul>
          ${this.isOnLandingPage
            ? html` <form-button white>Book now</form-button> `
            : html` <form-button>Book now</form-button> `}
        </div>
        <div class="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      ${!this.isOnLandingPage
        ? html`
            <style>
              nav .logo {
                color: var(--light-blue);
              }

              nav .nav-menu a {
                color: var(--light-blue);
              }

              nav .nav-menu a:hover {
                color: var(--dark-blue);
              }

              nav .burger span {
                background-color: var(--light-blue);
              }
            </style>
          `
        : ''}
    `;
  }
}

customElements.define('nav-component', NavComponent);
