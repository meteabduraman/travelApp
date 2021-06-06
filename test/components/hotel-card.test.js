import { html, expect, fixture } from '@open-wc/testing';

import '../../src/components/HotelCard.js';

describe('HotelCard', () => {
  const hotelMailNeighbourhood = {
    address: {
      neighbourhood: 'Harbiye',
      number: 6,
      postalCode: '34367',
      street: 'Askerocağı',
    },
    amenities: ['pool', 'spa', 'business center', 'fitness center'],
    contact: {
      email: 'ritz@istanbul.com',
      phone: '+902123344444',
    },
    coordinates: {
      lat: '41.0405',
      long: '28.9917',
    },
    name: 'The Ritz-Carlton',
    pricePerNight: {
      currency: 'USD',
      high: 880,
      low: 496,
    },
    stars: 5,
  };

  const hotelMail = {
    address: {
      neighbourhood: '',
      number: 6,
      postalCode: '34367',
      street: 'Askerocağı',
    },
    amenities: ['pool', 'spa', 'business center', 'fitness center'],
    contact: {
      email: 'ritz@istanbul.com',
      phone: '+902123344444',
    },
    coordinates: {
      lat: '41.0405',
      long: '28.9917',
    },
    name: 'The Ritz-Carlton',
    pricePerNight: {
      currency: 'USD',
      high: 880,
      low: 496,
    },
    stars: 5,
  };

  const hotel = {
    address: {
      neighbourhood: '',
      number: 6,
      postalCode: '34367',
      street: 'Askerocağı',
    },
    amenities: ['pool', 'spa', 'business center', 'fitness center'],
    contact: {
      email: '',
      phone: '+902123344444',
    },
    coordinates: {
      lat: '41.0405',
      long: '28.9917',
    },
    name: 'The Ritz-Carlton',
    pricePerNight: {
      currency: 'USD',
      high: 880,
      low: 496,
    },
    stars: 5,
  };

  it('renders an article element with 4 children', async () => {
    const element = await fixture(
      html`<hotel-card .hotel=${hotel} .index=${1}></hotel-card>`
    );
    const elementMail = await fixture(
      html`<hotel-card .hotel=${hotelMail} .index=${1}></hotel-card>`
    );
    const elementMailNeighbourhood = await fixture(
      html`<hotel-card
        .hotel=${hotelMailNeighbourhood}
        .index=${1}
      ></hotel-card>`
    );
    const articleElement = element.shadowRoot.querySelector('article');
    const articleMElement = elementMail.shadowRoot.querySelector('article');
    const articleMNElement = elementMailNeighbourhood.shadowRoot.querySelector(
      'article'
    );
    expect(articleElement).to.exist;
    expect(articleElement.children).to.have.lengthOf(4);
    expect(articleMElement).to.exist;
    expect(articleMElement.children).to.have.lengthOf(4);
    expect(articleMNElement).to.exist;
    expect(articleMNElement.children).to.have.lengthOf(4);
  });

  it('adds the neighbourhood to the h3 element next to the name when hotel obj has neighbourhood attribute', async () => {
    const element = await fixture(
      html`<hotel-card
        .hotel=${hotelMailNeighbourhood}
        .index=${1}
      ></hotel-card>`
    );
    const h3Element = element.shadowRoot.querySelector('h3');
    expect(h3Element.textContent.trim()).to.equal('The Ritz-Carlton, Harbiye');
  });

  it('does not add neighbourhood when hotel obj does not have neighbourhood attribute', async () => {
    const element = await fixture(
      html`<hotel-card .hotel=${hotel} .index=${1}></hotel-card>`
    );
    const h3Element = element.shadowRoot.querySelector('h3');
    expect(h3Element).to.have.text('The Ritz-Carlton');
  });

  it('renders an a element in div.contact with href=mailto: when hotel obj has email attribute', async () => {
    const element = await fixture(
      html`<hotel-card .hotel=${hotelMail} .index=${1}></hotel-card>`
    );
    const divContact = element.shadowRoot.querySelector('div.contact');
    expect(divContact).to.exist;
    expect(divContact.children[0].nodeName).to.equal('A');
    expect(divContact.children[0]).to.have.attribute(
      'href',
      'mailto:ritz@istanbul.com'
    );
  });

  it('passes a11y audit', async () => {
    const element = await fixture(
      html`<hotel-card .hotel=${hotel} .index=${1}></hotel-card>`
    );
    const elementMail = await fixture(
      html`<hotel-card .hotel=${hotelMail} .index=${1}></hotel-card>`
    );
    const elementMailNeighbourhood = await fixture(
      html`<hotel-card
        .hotel=${hotelMailNeighbourhood}
        .index=${1}
      ></hotel-card>`
    );
    await expect(element).shadowDom.to.be.accessible();
    await expect(elementMail).shadowDom.to.be.accessible();
    await expect(elementMailNeighbourhood).shadowDom.to.be.accessible();
  });
});
