import { LitElement, html, css } from 'lit-element';

export class CityCard extends LitElement {
  static get properties() {
    return {
      city: { type: Object },
    };
  }

  static get styles() {
    return css`
      article {
        border-radius: 20px;
        box-shadow: 0px 2px 14px -2px rgba(127, 127, 127, 0.5);
        position: relative;
        width: 350px;
        height: 150px;
        font-family: 'Ilisarniq';
        background-size: auto;
        background-position: 50% 50%;
        padding: 10px 10px;
        margin-right: 15px;
        margin-bottom: 15px;
      }

      article::before {
        top: 0;
        left: 0;
        border-radius: 20px;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(
          320deg,
          rgba(25, 102, 252, 0) 39%,
          rgba(25, 102, 252, 1) 98%
        );
      }

      h4 {
        font-size: 40px;
        margin: 5px;
        position: relative;
        color: #fff;
      }

      p {
        display: block;
        padding: 2px 8px;
        width: max-content;
        border-radius: 50px;
        position: relative;
        color: #1966fc;
        background-color: #fff;
      }
    `;
  }

  render() {
    return html`
      <article>
        <h4>${this.city.name}</h4>
        <p>${this.city.hotels.number} hotels</p>

        <style>
          article {
            background-image: url(${this.city.pic.link});
          }
        </style>
      </article>
    `;
  }
}

customElements.define('city-card', CityCard);
