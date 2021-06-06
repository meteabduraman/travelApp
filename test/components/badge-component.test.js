import { html, fixture, expect } from '@open-wc/testing';

import '../../src/components/BadgeComponent.js';

describe('BadgeComponent', () => {
  it('renders a p element', async () => {
    const element = await fixture(html`<badge-component></badge-component>`);
    expect(element.shadowRoot.querySelector('p')).to.exist;
  });

  it('passes contents to p element', async () => {
    const element = await fixture(
      html`<badge-component>Test Badge</badge-component>`
    );
    const pElement = element.shadowRoot.querySelector('p');
    expect(pElement.textContent).to.equal('Test Badge');
  });

  it('adds outline class to p element when outline prop is added', async () => {
    const element = await fixture(
      html`<badge-component outline></badge-component>`
    );
    const pElement = element.shadowRoot.querySelector('p');
    expect(pElement).to.have.class('outline');
  });

  it('passes a11y audit', async () => {
    const element = await fixture(
      html`<badge-component>Test Badge</badge-component>`
    );
    await expect(element).shadowDom.to.be.accessible();
  });
});
