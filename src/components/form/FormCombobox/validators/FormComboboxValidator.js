import { Validator } from '@lion/form-core';

export class ComboboxValidator extends Validator {
  execute(modelValue, list) {
    var hasFeedback = false;
    const found = list.find(([, value]) => value === modelValue);
    if (found === null) hasFeedback = true;
    return hasFeedback;
  }

  static get validatorName() {
    return 'IsInList';
  }

  static getMessage() {
    return `Please select a value from the list`;
  }
}
