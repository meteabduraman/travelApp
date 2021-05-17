import { LionButton } from '@lion/button';
import { css } from '@lion/core';

export class AddDestinationButton extends LionButton {
  static get style() {
    return [...super.styles, css``];
  }
}

customElements.define('add-destination-button', AddDestinationButton);
