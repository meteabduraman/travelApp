import { LionRadioGroup } from '@lion/radio-group';
import { css } from '@lion/core';

export class AddDestinationRadioGroup extends LionRadioGroup {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          margin-top: 15px;
        }
      `,
    ];
  }
}

customElements.define('add-destination-radio-group', AddDestinationRadioGroup);
