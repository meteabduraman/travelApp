import { LitElement, html, css } from 'lit-element';

export class Nav extends LitElement {
  static get properties() {
    return {};
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
        justify-content: space-between;
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

      #emphasized-nav-btn {
        width: var(--emphasized-nav-button-width);
        text-align: center;
        color: var(--light-blue);
        background-color: white;
        border-radius: var(--emphasized-nav-button-border-rad);
        box-shadow: 0px 2px 14px -2px rgba(127, 127, 127, 0.64);
        transition: var(--transition);
      }

      #emphasized-nav-btn:hover {
        transform: scale(0.9);
        transition: var(--transition);
      }

      #emphasized-nav-btn:active {
        background-color: var(--light-blue);
        color: white;
        transition: var(--transition);
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

      @media screen and (min-width: 769px) and (max-width: 1024px) {
        .nav-menu {
          width: 500px;
        }
      }

      @media screen and (min-width: 1025px) {
        nav {
          margin: var(--nav-top-margin) calc((100vw - 680px) / 2);
        }
      }
    `;
  }

  render() {
    return html`
      <nav>
        <a class="logo" href="#">Travela</a>
        <div class="nav-menu">
          <a href="#">Home</a>
          <a href="#">Tour</a>
          <a href="#">Hotel</a>
          <a href="/places">Places</a>
          <a href="/add-destination">Add Destination</a>
          <a id="emphasized-nav-btn" href="#">Book now</a>
        </div>
        <div class="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-component', Nav);
