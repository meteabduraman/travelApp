import { html, expect, fixture } from '@open-wc/testing';

import '../../src/components/CityCard.js';

describe('CityCard', () => {
  let element;
  const city = {
    name: 'Cairo',
    hotels: {},
    pic: {
      credits: '@esh3rwy',
      link:
        'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      source: 'Unsplash',
    },
    type: 'capital',
  };
  beforeEach(async () => {
    element = await fixture(html`<city-card .city=${city}></city-card>`);
  });

  it('renders an a element with correct href', () => {
    const aElement = element.shadowRoot.querySelector('a');
    expect(aElement).to.have.attribute('href', 'places/cairo');
  });

  it('renders an a element containing a h4 and badge-component', () => {
    const aElement = element.shadowRoot.querySelector('a');
    expect(aElement).to.have.descendants('h4, badge-component');
  });

  it('renders a h4 element with the name of the city', () => {
    const h4Element = element.shadowRoot.querySelector('h4');
    expect(h4Element.textContent).to.equal('Cairo');
  });

  it('passes a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
