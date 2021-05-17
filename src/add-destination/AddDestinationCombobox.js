import { LionCombobox } from '@lion/combobox';
import { css } from '@lion/core';

export class AddDestinationCombobox extends LionCombobox {
  static get styles() {
    return [...super.styles, css``];
  }
}

customElements.define('add-destination-combobox', AddDestinationCombobox);
