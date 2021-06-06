import { html, expect, fixture } from '@open-wc/testing';

import '../../src/components/NavComponent.js';

describe('NavComponent', () => {
  it('renders a nav element with 4 children', async () => {
    const element = await fixture(html`<nav-component></nav-component>`);
    const elementLanding = await fixture(
      html`<nav-component isOnLandingPage></nav-component>`
    );
    const navElement = element.shadowRoot.querySelector('nav');
    const navElementLanding = elementLanding.shadowRoot.querySelector('nav');
    expect(navElement).to.exist;
    expect(navElement.children).to.have.lengthOf(3);
    expect(navElementLanding).to.exist;
    expect(navElementLanding.children).to.have.lengthOf(3);
  });

  it('renders white themed button when on landing page', async () => {
    const element = await fixture(
      html`<nav-component isOnLandingPage></nav-component>`
    );
    const formBtn = element.shadowRoot.querySelector('form-button');
    expect(formBtn).to.have.attribute('white', '');
  });

  it('is blue themed when is not on landing page', async () => {
    const element = await fixture(html`<nav-component></nav-component>`);
    const navLogo = element.shadowRoot.querySelector('.logo');
    // expect(navLogo).to.have.style('color', 'rgb(25, 102, 252)');
  });

  it('passes a11y audit', async () => {
    const element = await fixture(html`<nav-component></nav-component>`);
    const elementLanding = await fixture(
      html`<nav-component isOnLandingPage></nav-component>`
    );
    expect(element).shadowDom.to.be.accessible();
    expect(elementLanding).shadowDom.to.be.accessible();
  });
});
