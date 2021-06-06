import { html, expect, fixture } from '@open-wc/testing';

import '../../src/components/ContentDescription.js';

describe('ContentDescription', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<content-description></content-description>`);
  });

  it('renders a section element', () => {
    const sectionElement = element.shadowRoot.querySelector('section');
    const sectionChildren = sectionElement.children;
    expect(sectionChildren).to.have.lengthOf(2);
    expect(sectionElement).to.exist;
  });

  it('renders a figure element correctly', () => {
    const sectionChildren = element.shadowRoot.querySelector('section')
      .children;
    expect(sectionChildren[0].children).to.have.lengthOf(2);
    expect(sectionChildren[0].children[0].tagName).to.equal('IMG');
    expect(sectionChildren[0].children[1].tagName).to.equal('FIGCAPTION');
  });

  it('renders figcaption with credits', () => {
    const figcaptionElement = element.shadowRoot.querySelector('figcaption');
    expect(figcaptionElement.children).to.have.lengthOf(2);
    expect(figcaptionElement.children[0].tagName).to.equal('A');
    expect(figcaptionElement.children[1].tagName).to.equal('A');
  });

  it('renders content description text', () => {
    const textElement = element.shadowRoot.querySelector(
      '.content-description-text'
    );
    expect(textElement).to.exist;
    expect(textElement.children).to.have.lengthOf(3);
    expect(textElement.children[0].tagName).to.equal('H2');
    expect(textElement.children[1].tagName).to.equal('P');
    expect(textElement.children[2].tagName).to.equal('FORM-BUTTON');
    expect(textElement.children[2]).to.have.attribute('outline', '');
  });

  it('passes a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
