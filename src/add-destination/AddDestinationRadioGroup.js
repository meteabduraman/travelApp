import { LionRadioGroup } from '@lion/radio-group';
import { css } from '@lion/core';

export class AddDestinationRadioGroup extends LionRadioGroup {
  static get styles() {
    return [...super.styles, css``];
  }
}

customElements.define('add-destination-radio-group', AddDestinationRadioGroup);
