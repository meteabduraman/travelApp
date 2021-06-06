import { html, expect, fixture } from '@open-wc/testing';

import '../../src/components/HeroImage.js';

describe('HeroImage', () => {
  const city = [
    1,
    {
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
  ];

  it('renders a figure element', async () => {
    const element = await fixture(html`<hero-image></hero-image>`);
    const elementCity = await fixture(
      html`<hero-image .city=${city}></hero-image>`
    );
    const figureElement = element.shadowRoot.querySelector('figure');
    const figureElementCity = elementCity.shadowRoot.querySelector('figure');
    expect(figureElement).to.exist;
    expect(figureElementCity).to.exist;
  });

  it('renders pic of Shpynx when no prop is added', async () => {
    const element = await fixture(html`<hero-image></hero-image>`);
    const imgElement = element.shadowRoot.querySelector('img');
    expect(imgElement).to.have.attribute(
      'alt',
      'Giza Sphynx and The Great Pyramid of Khafre'
    );
  });

  it('renders pic of city when city prop is added', async () => {
    const element = await fixture(
      html`<hero-image .city=${city}></hero-image>`
    );
    const imgElement = element.shadowRoot.querySelector('img');
    expect(imgElement).to.have.attribute('alt', 'Cairo');
  });

  it('correctly renders credits', async () => {
    const elementCity = await fixture(
      html`<hero-image .city=${city}></hero-image>`
    );
    const figCaptionCity = elementCity.shadowRoot.querySelector('figcaption');
    expect(figCaptionCity.children).to.have.lengthOf(2);
    expect(figCaptionCity.children[0]).to.have.text('@esh3rwy');
    expect(figCaptionCity.children[1]).to.have.text('Unsplash');
  });

  it('passes a11y audit', async () => {
    const element = await fixture(html`<hero-image></hero-image>`);
    const elementCity = await fixture(
      html`<hero-image .city=${city}></hero-image>`
    );
    await expect(element).shadowDom.to.be.accessible();
    await expect(elementCity).shadowDom.to.be.accessible();
  });
});
