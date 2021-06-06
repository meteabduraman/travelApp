import { html, fixture, expect } from '@open-wc/testing';

import '../../../src/components/form/FormButton.js';

describe('FormButton', () => {
  it('renders a lion-button component', async () => {
    const element = await fixture(html`<form-button>Test Button</form-button>`);
    const lionBtn = element.shadowRoot.querySelector('lion-button');
    expect(lionBtn).to.exist;
  });

  it('passes contents to lion-button', async () => {
    const element = await fixture(html`<form-button>Test Button</form-button>`);
    const lionBtn = element.shadowRoot.querySelector('lion-button');
    expect(lionBtn.textContent).to.equal('Test Button');
  });

  it('passes name and type props to lion-button', async () => {
    const element = await fixture(
      html`<form-button name="btnName" type="btnType">Test Button</form-button>`
    );
    const lionBtn = element.shadowRoot.querySelector('lion-button');
    expect(lionBtn).to.have.attribute('name', 'btnName');
    expect(lionBtn).to.have.attribute('type', 'btnType');
  });

  it('renders blue styling when no props are added', async () => {
    const element = await fixture(html`<form-button>Test Button</form-button>`);
    const lionBtn = element.shadowRoot.querySelector('lion-button');
    // expect(lionBtn).to.have.style('backgroundColor', 'rgb(25, 102, 252)');
    expect(lionBtn).to.have.style('color', 'rgb(255, 255, 255)');
    expect(lionBtn).to.have.style(
      'boxShadow',
      'rgba(127, 127, 127, 0.64) 0px 2px 14px -2px'
    );
  });

  it('renders light styling when prop white is added', async () => {
    const element = await fixture(
      html`<form-button white>Test Button</form-button>`
    );
    const lionBtn = element.shadowRoot.querySelector('lion-button');
    // expect(lionBtn).to.have.style('backgroundColor', 'rgb(255, 255, 255)');
    // expect(lionBtn).to.have.style('color', 'rgb(25, 102, 252)');
    expect(lionBtn).to.have.style(
      'boxShadow',
      'rgba(127, 127, 127, 0.64) 0px 2px 14px -2px'
    );
  });

  it('renders outline styling when prop outline is added', async () => {
    const element = await fixture(
      html`<form-button outline>Test Button</form-button>`
    );
    const lionBtn = element.shadowRoot.querySelector('lion-button');
    // expect(lionBtn).to.have.style('border', '3px solid rgb(25, 102, 252)');
    expect(lionBtn).to.have.style('backgroundColor', 'rgba(0, 0, 0, 0)');
    expect(lionBtn).to.have.style(
      'boxShadow',
      'rgba(127, 127, 127, 0.64) 0px 2px 14px -2px'
    );
  });

  it('passes a11y audit', async () => {
    const element = await fixture(
      html`<form-button name="btn" type="submit">Test Button</form-button>`
    );
    await expect(element).shadowDom.to.be.accessible();
  });
});
