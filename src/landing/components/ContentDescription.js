import { LitElement, html, css } from 'lit-element';

export class ContentDescription extends LitElement {
  static get properties() {
    return {};
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

      .outline-btn {
        width: var(--emphasized-nav-button-width);
        text-align: center;
        color: var(--light-blue);
        background-color: white;
        border-radius: var(--emphasized-nav-button-border-rad);
        box-shadow: 0px 2px 14px -2px rgba(127, 127, 127, 0.64);
        transition: var(--transition);
      }

      .content-description {
        display: flex;
        align-items: center;
        margin-top: var(--nav-height);
      }

      .content-description figure {
        filter: sepia(100%) hue-rotate(180deg);
      }

      .content-description-text {
        display: flex;
        flex-direction: column;
        color: var(--dark-blue);
        margin-left: 50px;
      }

      .content-description-text h2 {
        font-size: xx-large;
      }

      .outline-btn {
        border: var(--lightblue-border);
        background-color: white;
        color: var(--light-blue);
        text-align: center;
        padding-top: 15px;
        padding-bottom: 15px;
        margin-top: 25px;
        transition: var(--transition);
      }

      .outline-btn:hover {
        transform: scale(0.9);
        transition: var(--transition);
      }

      .outline-btn:active {
        border: 6px solid var(--light-blue);
        transition: var(--transition);
      }

      @media screen and (max-width: 480px) {
        .content-description {
          flex-direction: column;
        }

        .content-description-text {
          margin-left: 15px;
          margin-right: 15px;
          align-items: center;
          text-align: center;
        }

        .content-description-text a {
          margin-top: 0;
        }

        .content-description-text p {
          display: none;
        }
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        .content-description {
          flex-direction: column;
        }

        .content-description figure,
        .content-description figure img {
          width: 100%;
          height: auto;
        }

        .content-description-text {
          margin-left: 15px;
          margin-right: 15px;
          align-items: center;
          text-align: center;
        }
      }

      @media screen and (min-width: 769px) and (max-width: 1024px) {
        .content-description figure {
          margin-left: -60px;
        }

        .content-description-text {
          margin-right: 30px;
        }
      }

      @media screen and (min-width: 1025px) {
        .content-description {
          margin-top: calc(var(--nav-height) * 2);
        }
      }
    `;
  }

  render() {
    return html`
      <section class="content-description">
        <figure>
          <img
            src="../../../assets/images/jeff-ackley-EiLq3Tmn5ho-unsplash.jpg"
            alt="Photo of an old woman in a rural area"
            height="500px"
          />
          <figcaption>
            Photo by
            <a
              href="https://unsplash.com/@ackley5?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Jeff Ackley</a
            >
            on
            <a
              href="https://unsplash.com/s/photos/travel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              >Unsplash</a
            >
          </figcaption>
        </figure>
        <div class="content-description-text">
          <h2>Discover amazing people</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quasi ipsum dolores velit aut est sint error nemo repellendus
            perspiciatis doloribus eum nobis nihil soluta eaque, asperiores
            alias veritatis ducimus.
          </p>
          <a href="#" class="outline-btn">Explore More</a>
        </div>
      </section>
    `;
  }
}

customElements.define('content-description', ContentDescription);
