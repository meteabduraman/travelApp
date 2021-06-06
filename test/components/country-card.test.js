import { html, expect, fixture } from '@open-wc/testing';

import '../../src/components/CountryCard.js';

describe('Country Card', () => {
  let element;
  const country = {
    name: 'Egypt 🇪🇬',
    type: 'country',
    cities: {
      cairo: {
        name: 'Cairo',
        hotels: {},
        pic: {
          credits: '@esh3rwy',
          link:
            'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          source: 'Unsplash',
        },
        type: 'capital',
      },
      alexandria: {
        name: 'Alexandria',
        hotels: {},
        pic: {
          credits: '@esh3rwy',
          link:
            'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          source: 'Unsplash',
        },
        type: 'city',
      },
      number: 2,
    },
  };

  beforeEach(async () => {
    element = await fixture(
      html`<country-card .country=${country}></country-card>`
    );
  });

  it('renders a div and ul element', () => {
    const divElement = element.shadowRoot.querySelector('div');
    const ulElement = element.shadowRoot.querySelector('ul');
    expect(divElement).to.exist;
    expect(ulElement).to.exist;
  });

  it('renders country name in a h3 element', () => {
    const divElement = element.shadowRoot.querySelector('div');
    const h3Element = divElement.children[0];
    expect(h3Element).to.exist;
    expect(h3Element.tagName).to.equal('H3');
    expect(h3Element.textContent).to.equal('Egypt 🇪🇬');
  });

  it('renders country number of destinations in a badge-component', () => {
    const divElement = element.shadowRoot.querySelector('div');
    const badgeElement = divElement.children[1];
    expect(badgeElement).to.exist;
    expect(badgeElement.tagName).to.equal('BADGE-COMPONENT');
    expect(badgeElement.textContent).to.equal('2 destinations');
  });

  it('renders an ul element containing 2 city-card elements', () => {
    const ulElement = element.shadowRoot.querySelector('ul');
    expect(ulElement).to.exist;
    expect(ulElement.children).to.have.lengthOf(2);
    expect(ulElement.children[0].children[0].tagName).to.equal('CITY-CARD');
    expect(ulElement.children[1].children[0].tagName).to.equal('CITY-CARD');
  });

  it('passes a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
