import { LionButton } from '@lion/button';
import { css } from '@lion/core';

export class AddDestinationButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          cursor: pointer;
          background-color: var(--light-blue);
          color: white;
          padding-left: 15px;
          padding-right: 15px;
          border: none;
          border-radius: var(--emphasized-nav-button-border-rad);
          box-shadow: 0px 2px 14px -2px rgba(127, 127, 127, 0.64);
          transition: var(--transition);
          margin-top: 15px;
        }

        :host(:hover) {
          background-color: var(--light-blue);
          transform: scale(0.9);
          transition: var(--transition);
        }
      `,
    ];
  }
}

customElements.define('add-destination-button', AddDestinationButton);
