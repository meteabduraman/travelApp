import { html, expect, fixture } from '@open-wc/testing';

import '../../src/components/DestinationForm.js';

describe('DestinationForm', () => {
  let element;
  const countries = [
    [1, 'Egypt 🇪🇬'],
    [2, 'Turkey 🇹🇷'],
    [3, 'Romania 🇷🇴'],
  ];

  beforeEach(async () => {
    element = await fixture(
      html`<destination-form .countries=${countries}></destination-form>`
    );
  });

  it('renders a form element with 5 children', () => {
    const formElement = element.shadowRoot.querySelector('form');
    expect(formElement).to.exist;
    expect(formElement.children).to.have.lengthOf(5);
  });

  it('renders a select element with 3 options', () => {
    const selectElement = element.shadowRoot.querySelector('select');
    expect(selectElement).to.exist;
    expect(selectElement.children).to.have.lengthOf(3);
    expect(selectElement.children[0].tagName).to.equal('OPTION');
    expect(selectElement.children[1].tagName).to.equal('OPTION');
    expect(selectElement.children[2].tagName).to.equal('OPTION');
  });

  it('correctly renders passed countries', () => {
    const options = element.shadowRoot.querySelectorAll('option');
    expect(options[0]).to.have.attribute('value', '1');
    expect(options[0]).to.have.text('Egypt 🇪🇬');
    expect(options[2]).to.have.attribute('value', '3');
    expect(options[2]).to.have.text('Romania 🇷🇴');
  });

  it('renders an input of type number', () => {
    const inputElements = element.shadowRoot.querySelectorAll(
      'input[type=number]'
    );
    expect(inputElements).to.have.lengthOf(1);
  });

  it('renders 2 inputs of type date', () => {
    const inputElements = element.shadowRoot.querySelectorAll(
      'input[type=date]'
    );
    expect(inputElements).to.have.lengthOf(2);
  });

  it('renders a form-button component of type submit', () => {
    const btnElement = element.shadowRoot.querySelector('form-button');
    expect(btnElement).to.exist;
    expect(btnElement).to.have.attribute('type', 'submit');
  });

  it('passes a11y audit', async () => {
    await expect(element).to.be.accessible();
  });
});
