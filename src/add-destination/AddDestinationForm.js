import { LionForm } from '@lion/form';
import { css } from '@lion/core';

export class AddDestinationForm extends LionForm {
  static get styles() {
    return [...super.styles, css``];
  }
}

customElements.define('add-destination-form', AddDestinationForm);
