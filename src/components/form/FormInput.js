import { LionInput } from '@lion/input';
import { css } from '@lion/core';

export class FormInput extends LionInput {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          margin-top: 15px;
        }

        ::slotted(.form-control) {
          height: var(--form-field-height);
          font-family: var(--font);
          border: var(--lightgrey-border);
          border-radius: var(--emphasized-nav-button-border-rad);
          padding-left: 10px;
          padding-right: 10px;
          transition: var(--transition);
        }

        ::slotted(.form-control:focus-visible) {
          outline: none;
          border: 3px solid var(--dark-blue);
          transition: var(--transition);
        }
      `,
    ];
  }
}

customElements.define('form-input', FormInput);
