import { html, expect, fixture } from '@open-wc/testing';

import '../../src/components/HeroComponent.js';

describe('HeroComponent', () => {
  const country = [1, 'Romania 🇷🇴'];
  const city = [
    1,
    {
      name: 'Constanta',
      type: 'city',
      hotels: {
        number: 100,
        ibis: { name: 'Ibis' },
        ramada: { name: 'Ramada' },
      },
    },
  ];
  const cityCapital = [
    2,
    {
      name: 'Bucharest',
      type: 'capital',
      hotels: {
        number: 100,
        ibis: { name: 'Ibis' },
        ramada: { name: 'Ramada' },
      },
    },
  ];

  it('renders a section with id=hero', async () => {
    const element = await fixture(html`<hero-component></hero-component>`);
    const elementCity = await fixture(
      html`<hero-component .city=${city} .country=${country}></hero-component>`
    );
    const sectionHero = element.shadowRoot.querySelector('section#hero');
    const sectionHeroCity = elementCity.shadowRoot.querySelector(
      'section#hero'
    );
    expect(sectionHero).to.exist;
    expect(sectionHeroCity).to.exist;
  });

  it('renders a h1 element and a form-button when no props are added', async () => {
    const element = await fixture(html`<hero-component></hero-component>`);
    const h1Element = element.shadowRoot.querySelector('h1');
    const formBtnElement = element.shadowRoot.querySelector('form-button');
    expect(h1Element).to.exist;
    expect(formBtnElement).to.exist;
  });

  it('renders a h1, h2, badge-component and ul when city and country props are added', async () => {
    const element = await fixture(
      html`<hero-component .city=${city} .country=${country}></hero-component>`
    );
    const h1Element = element.shadowRoot.querySelector('h1');
    const h2Element = element.shadowRoot.querySelector('h2');
    const badgeElement = element.shadowRoot.querySelector('badge-component');
    const ulElement = element.shadowRoot.querySelector('ul');
    expect(h1Element).to.exist;
    expect(h2Element).to.exist;
    expect(badgeElement).to.exist;
    expect(ulElement).to.exist;
  });

  it('renders Capital of <<country>> in h2 when added city is of type capital', async () => {
    const element = await fixture(
      html`<hero-component
        .city=${cityCapital}
        .country=${country}
      ></hero-component>`
    );
    const h2Element = element.shadowRoot.querySelector('h2');
    expect(h2Element).to.have.text('Capital of Romania 🇷🇴');
  });

  it('renders <<type>> in <<country>> in h2 when added city is not of type capital', async () => {
    const element = await fixture(
      html`<hero-component .city=${city} .country=${country}></hero-component>`
    );
    const h2Element = element.shadowRoot.querySelector('h2');
    expect(h2Element.textContent.trim()).to.equal('City in Romania 🇷🇴');
  });

  it('renders correct number of available hotels in badge component', async () => {
    const element = await fixture(
      html`<hero-component .city=${city} .country=${country}></hero-component>`
    );
    const badgeElement = element.shadowRoot.querySelector('badge-component');
    expect(badgeElement).to.have.text('100 available hotels');
  });

  it('renders 2 hotel-card elements as li in ul', async () => {
    const element = await fixture(
      html`<hero-component .city=${city} .country=${country}></hero-component>`
    );
    const ulElement = element.shadowRoot.querySelector('ul');
    expect(ulElement.children).to.have.lengthOf(2);
    expect(ulElement.children[0].children[0].tagName).to.equal('HOTEL-CARD');
    expect(ulElement.children[1].children[0].tagName).to.equal('HOTEL-CARD');
  });

  it('passes a11y audit', async () => {
    const element = await fixture(html`<hero-component></hero-component>`);
    const elementCity = await fixture(
      html`<hero-component .city=${city} .country=${country}></hero-component>`
    );
    const elementCityCapital = await fixture(
      html`<hero-component
        .city=${cityCapital}
        .country=${country}
      ></hero-component>`
    );
    await expect(element).to.be.accessible();
    await expect(elementCity).to.be.accessible();
    await expect(elementCityCapital).to.be.accessible();
  });
});
