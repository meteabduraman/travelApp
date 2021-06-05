import { LitElement, html, css } from 'lit-element';

export class HeroImage extends LitElement {
  static get properties() {
    return {
      city: { type: Object },
    };
  }

  static get styles() {
    return css`
      a {
        text-decoration: none;
      }

      figure {
        margin: 0;
      }

      button {
        cursor: pointer;
      }

      input {
        cursor: text;
      }

      main {
        margin: 0;
      }

      .hero-img {
        width: 100%;
        z-index: -100;
        position: absolute;
        top: 0;
      }

      .hero-img img {
        width: 100%;
        height: auto;
      }

      figcaption {
        margin-top: -25px;
        margin-left: 5px;
        opacity: 50%;
        font-style: italic;
        font-size: small;
      }

      @media screen and (max-width: 480px) {
        .hero-img {
          height: 80%;
          width: auto;
          display: block;
        }

        .hero-img img {
          height: 100%;
          width: auto;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        .hero-img {
          height: 80%;
          width: auto;
          display: block;
        }

        .hero-img img {
          height: 100%;
          width: auto;
          margin-left: auto;
          margin-right: auto;
        }
      }
    `;
  }

  render() {
    return html` <figure class="hero-img">
      ${this.city
        ? html`<img src=${this.city[1].pic.link} alt=${this.city[1].name} />
            <figcaption>
              Photo by
              <a
                href=${`https://${this.city[1].pic.source.toLowerCase()}.com/${
                  this.city[1].pic.credits
                }`}
                >${this.city[1].pic.credits}</a
              >
              on
              <a href=${`https://${this.city[1].pic.source.toLowerCase()}.com`}
                >${this.city[1].pic.source}</a
              >
            </figcaption>`
        : html`<img
              src="../../../assets/images/spencer-davis-ONVA6s03hg8-unsplash.jpg"
              alt="Giza Sphynx and The Great Pyramid of Khafre"
            />
            <figcaption>
              Photo by
              <a href="https://unsplash.com/@spencerdavis">Spencer Davis</a>
              on
              <a href="https://unsplash.com">Unsplash</a>
            </figcaption>`}
    </figure>`;
  }
}

customElements.define('hero-image', HeroImage);
