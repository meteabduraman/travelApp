import { LionForm } from '@lion/form';

export class FormWrapper extends LionForm {
  static get styles() {
    return super.styles;
  }
}

customElements.define('form-wrapper', FormWrapper);
