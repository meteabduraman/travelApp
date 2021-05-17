import { LionRadio } from '@lion/radio-group';
import { css } from '@lion/core';

export class AddDestinationRadio extends LionRadio {
  static get styles() {
    return [...super.styles, css``];
  }
}

customElements.define('add-destination-radio', AddDestinationRadio);
