import { LionCombobox } from '@lion/combobox';
import { css } from '@lion/core';

export class FormCombobox extends LionCombobox {
  static get styles() {
    return [
      ...super.styles,
      css`
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

customElements.define('form-combobox', FormCombobox);
