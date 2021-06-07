import { LitElement, html, css } from 'lit-element';
import './BadgeComponent.js';

export class HotelCard extends LitElement {
  static get properties() {
    return {
      hotel: { type: Object },
      index: { type: Number },
    };
  }

  static get styles() {
    return css`
      a {
        text-decoration: none;
      }

      article,
      div {
        display: flex;
        flex-wrap: wrap;
      }

      article {
        background-color: white;
        color: var(--dark-blue);
        border: 1px solid lightgray;
        border-radius: var(--emphasized-nav-button-border-rad);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px 15px 10px 15px;
        box-shadow: 0px 2px 14px -2px rgba(127, 127, 127, 0.5);
      }

      h3,
      p {
        margin: 0;
      }

      .header {
        align-items: center;
      }

      .header .index {
        margin-right: 20px;
        margin-left: 10px;
        color: white;
        border-radius: 50%;
        background-color: var(--dark-blue);
        padding: 10px 15px;
        text-align: center;
      }

      .name-address {
        flex-direction: column;
        align-items: flex-start;
      }

      .contact {
        width: 100%;
        justify-content: flex-end;
      }

      .contact a {
        border: 1px solid gray;
        border-radius: 12px;
        margin-left: 20px;
        padding: 3px 8px 3px 8px;
        transition: var(--transition);
      }

      .contact a:hover {
        background-color: #eeeeee;
        transition: var(--transition);
      }
    `;
  }

  render() {
    return html`
      <article>
        <div class="header">
          <p class="index">${this.index}</p>
          <div class="name-address">
            ${this.hotel.address.neighbourhood !== ''
              ? html`<h3>
                  ${this.hotel.name}, ${this.hotel.address.neighbourhood}
                </h3>`
              : html`<h3>${this.hotel.name}</h3>`}
            <p>
              ${this.hotel.address.street} street, ${this.hotel.address.number}
            </p>
          </div>
          <badge-component outline>${this.hotel.stars} stars</badge-component>
        </div>
        <p>
          Prices per night range from
          <strong
            >${this.hotel.pricePerNight.low}${this.hotel.pricePerNight
              .currency}</strong
          >
          to
          <strong
            >${this.hotel.pricePerNight.high}${this.hotel.pricePerNight
              .currency}</strong
          >
        </p>
        <div class="amenities">
          ${this.hotel.amenities.map(
            item => html`<badge-component outline>${item}</badge-component>`
          )}
        </div>
        <div class="contact">
          ${this.hotel.contact.email !== ''
            ? html`
                <a
                  href=${`mailto:${this.hotel.contact.email}`}
                  target="_blank"
                  title=${`Email ${this.hotel.name}`}
                >
                  Email 📧
                </a>
              `
            : html``}
          <a
            target="_blank"
            href=${`tel:${this.hotel.contact.phone}`}
            title=${`Call ${this.hotel.name}`}
          >
            Call 📞
          </a>
          <a
            href=${`https://www.google.com/maps/search/?api=1&query=${`${this.hotel.name.replace(
              ' ',
              '+'
            )}%2C+${this.hotel.address.street.replace(' ', '+')}`}`}
            target="_blank"
            title="Show on Google Maps"
            >Show on Google Maps 📍</a
          >
        </div>
      </article>
    `;
  }
}

customElements.define('hotel-card', HotelCard);
