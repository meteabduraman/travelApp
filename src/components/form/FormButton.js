import { LitElement, html, css } from 'lit-element';
import '../../../node_modules/@lion/button/lion-button.js';

export class FormButton extends LitElement {
  static get properties() {
    return {
      outline: { type: Boolean },
      white: { type: Boolean },
      name: { type: String },
      type: { type: String },
    };
  }

  static get styles() {
    return css`
      lion-button {
        display: flex;
        justify-content: center;
        cursor: pointer;
        width: max-content;
        height: 50px;
        padding: 0 20px;
        color: white;
        background-color: var(--light-blue);
        border-radius: var(--emphasized-nav-button-border-rad);
        box-shadow: 0px 2px 14px -2px rgba(127, 127, 127, 0.64);
        transition: var(--transition);
      }

      lion-button:hover {
        background-color: var(--light-blue);
        transform: scale(0.9);
        transition: var(--transition);
      }

      lion-button:active {
        background-color: var(--light-blue);
        color: white;
        transition: var(--transition);
      }
    `;
  }

  render() {
    return html`
      <lion-button name=${this.name} type=${this.type}
        >${this.innerHTML}</lion-button
      >
      ${this.white
        ? html`
            <style>
              lion-button[name] {
                background-color: white;
                color: var(--light-blue);
              }

              lion-button[name]:hover {
                background-color: white;
              }

              lion-button[name]:active {
                background-color: var(--light-blue);
                color: white;
              }
            </style>
          `
        : html``}
      ${this.outline
        ? html`
            <style>
              lion-button[name] {
                background-color: transparent;
                color: var(--light-blue);
                border: var(--lightblue-border);
              }

              lion-button[name]:hover {
                background-color: transparent;
              }

              lion-button[name]:active {
                background-color: var(--light-blue);
                border: 6px solid var(--light-blue);
              }
            </style>
          `
        : html``}
    `;
  }
}

customElements.define('form-button', FormButton);
