import { html, expect, fixture } from '@open-wc/testing';

import '../../src/components/FooterComponent.js';

describe('FooterComponent', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<footer-component></footer-component>`);
  });

  it('renders a footer element', () => {
    const footerElement = element.shadowRoot.querySelector('footer');
    expect(footerElement).to.exist;
  });

  it('renders a div.mail with 2 children', () => {
    const divElement = element.shadowRoot.querySelector('.mail');
    expect(divElement).to.exist;
    expect(divElement.children).to.have.lengthOf(2);
  });

  it('renders an input of type email', () => {
    const inputElement = element.shadowRoot.querySelector('input');
    expect(inputElement).to.exist;
    expect(inputElement).to.have.attribute('type', 'email');
  });

  it('renders a button element of type submit', () => {
    const btnElement = element.shadowRoot.querySelector('button');
    expect(btnElement).to.exist;
    expect(btnElement).to.have.attribute('type', 'submit');
  });

  it('renders a div.footer-nav with 2 children', () => {
    const divElement = element.shadowRoot.querySelector('.footer-nav');
    expect(divElement).to.exist;
    expect(divElement.children).to.have.lengthOf(2);
  });

  it('renders an ul.links element with 5 lis, parents of a tags', () => {
    const ulElement = element.shadowRoot.querySelector('ul.links');
    expect(ulElement).to.exist;
    expect(ulElement.children).to.have.lengthOf(5);
    expect(ulElement.children[0].children).to.have.lengthOf(1);
    expect(ulElement.children[0].children[0].tagName).to.equal('A');
  });

  it('passes a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
