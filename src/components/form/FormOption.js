import { LionOption } from '@lion/listbox';

export class FormOption extends LionOption {
  static get styles() {
    return super.styles;
  }
}

customElements.define('form-option', FormOption);
