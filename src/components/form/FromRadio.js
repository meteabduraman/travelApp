import { LionRadio } from '@lion/radio-group';

export class FormRadio extends LionRadio {
  static get styles() {
    return super.styles;
  }
}

customElements.define('form-radio', FormRadio);
