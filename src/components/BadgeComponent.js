import { LitElement, html, css } from 'lit-element';

export class BadgeComponent extends LitElement {
  static get properties() {
    return {
      outline: { type: Boolean },
      white: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      p {
        display: block;
        padding: 2px 8px;
        width: max-content;
        border-radius: 50px;
        position: relative;
        margin-left: 10px;
        border: none;
        color: var(--light-blue);
        background-color: white;
      }

      .outline {
        border: 1px solid #2e4381;
        color: #2e4381;
        background-color: transparent;
      }
    `;
  }

  render() {
    return html` ${this.outline
      ? html` <p class="outline">${this.textContent}</p> `
      : html`<p>${this.textContent}</p>`}`;
  }
}

customElements.define('badge-component', BadgeComponent);
