import { LitElement, html, css } from 'lit-element';

export class DestinationCard extends LitElement {
  static get properties() {
    return {
      destination: { type: Object },
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this._areCitiesShowing = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <article>
        ${this.destination.type === 'country'
          ? html`
              <h3>${this.destination.name}</h3>
              <p>${this.destination.cities.number} destinations</p>
              ${Object.entries(this.destination.cities).map(([key, value]) => {
                if (key !== 'number')
                  return html`<destination-card
                    .destination=${value}
                  ></destination-card>`;
              })}
            `
          : html`
              <h4>${this.destination.name}</h4>
              <p>${this.destination.hotels.number} hotels</p>
            `}
      </article>
    `;
  }
}
