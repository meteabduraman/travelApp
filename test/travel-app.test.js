import { html, fixture, expect } from '@open-wc/testing';

import '../src/travel-app.js';

describe('TravelApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<travel-app></travel-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  it('has a custom title', () => {
    const newTitle = "What's new?";
    const result = element._getCustomTitle(newTitle);
    expect(result).to.not.be.empty;
    expect(result).to.be.equal(`Your new title is ${newTitle}`);
  });
});
