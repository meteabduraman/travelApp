import { LionOption } from '@lion/listbox';
import { css } from '@lion/core';

export class AddDestinationOption extends LionOption {
  static get styles() {
    return [...super.styles, css``];
  }
}

customElements.define('add-destination-option', AddDestinationOption);
