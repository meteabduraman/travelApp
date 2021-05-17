import { LionInput } from '@lion/input';
import { css } from '@lion/core';

export class AddDestinationInput extends LionInput {
  static get styles() {
    return [...super.styles, css``];
  }
}

customElements.define('add-destination-input', AddDestinationInput);
