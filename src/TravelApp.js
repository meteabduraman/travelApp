import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import { HomeView } from './views/HomeView.js';
import { AdminView } from './views/AdminView.js';
import { DestinationView } from './views/DestinationView.js';

export class TravelApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--travel-app-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'DevSchool app';
    this.routes = [
      {
        path: '/',
        component: 'home-view',
      },
      {
        path: '/destinations',
        component: 'destination-view',
      },
      {
        path: '/admin',
        component: 'admin-view',
      },
    ];
    this._route = this._route.bind(this);
    window.addEventListener('popstate', this._route);
  }

  firstUpdated() {
    this._route();
  }

  render() {
    return html`
      <header>
        <a href="/" @click=${this._handleClick}>Home</a>
        <a href="/destinations" @click=${this._handleClick}>Destinations</a>
        <a href="/admin" @click=${this._handleClick}>Admin</a>
      </header>
      <main id="app"></main>

      <!-- <p class="app-footer">
        Made using
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p> -->
    `;
  }

  _route() {
    let urlMatch = this.routes.find(route => route.path === location.pathname);
    if (!urlMatch) urlMatch = this.routes[0];

    const component = document.createElement(urlMatch.component);
    const main = this.shadowRoot.querySelector('#app');

    main.firstChild?.remove();
    main.appendChild(component);
  }

  _handleClick(e) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    this._route();
  }
}
