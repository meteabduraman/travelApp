import { LitElement, html, css } from 'lit-element';

export class FooterComponent extends LitElement {
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

      footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        background-color: var(--light-blue);
        margin-top: 50px;
        text-align: center;
        padding-top: 20px;
        overflow: hidden;
      }

      footer h2 {
        font-size: xx-large;
      }

      footer input {
        height: var(--form-field-height);
        width: 280px;
        padding-left: 10px;
        padding-right: 10px;
        border: 2px solid white;
        border-radius: 50px;
        font-family: var(--font);
      }

      footer button {
        height: var(--form-field-height);
        width: 100px;
        border-radius: 50px;
        border: none;
        position: relative;
        background-color: var(--light-blue);
        color: white;
        margin-left: -103px;
        font-family: var(--font);
        transition: var(--transition);
      }

      footer button:hover {
        background-color: var(--dark-blue);
      }

      footer button:active {
        transform: scale(0.9);
      }

      .mail {
        display: flex;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 30px;
      }

      .footer-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        max-width: 900px;
      }

      .links {
        display: flex;
        list-style-type: none;
        width: 50%;
        justify-content: space-between;
      }

      .footer-nav a {
        color: white;
        transition: var(--transition);
      }

      .footer-nav a:hover {
        background-color: white;
        color: var(--light-blue);
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 50px;
      }

      .footer-nav a:active {
        background-color: var(--dark-blue);
      }

      @media screen and (max-width: 480px) {
        footer {
          margin-top: var(--nav-height);
        }

        footer > p {
          display: none;
        }

        .mail {
          margin-top: 0;
          flex-direction: column;
        }

        .mail input {
          text-align: center;
          width: 98%;
        }

        .mail button {
          margin-left: 0;
          margin-top: 15px;
          background-color: white;
          color: var(--light-blue);
        }

        .mail button:hover {
          background-color: white;
        }

        .footer-nav {
          justify-content: center;
        }

        .footer-nav .links {
          display: none;
        }
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        footer {
          margin-top: var(--nav-height);
        }

        .mail {
          flex-direction: column;
        }

        .mail input {
          text-align: center;
        }

        .mail button {
          margin-left: 0;
          margin-top: 15px;
          background-color: white;
          color: var(--light-blue);
        }

        .mail button:hover {
          background-color: white;
        }

        .footer-nav {
          justify-content: center;
        }

        .footer-nav .links {
          display: none;
        }
      }
    `;
  }

  render() {
    return html`
      <footer>
        <h2>Get In Touch</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Magni inventore a dicta consectetur illo, sit corporis eligendi
          aliquid optio illum.
        </p>
        <div class="mail">
          <input
            type="email"
            id="footer-email"
            placeholder="Enter your email address"
          />
          <button type="submit">Subscribe</button>
        </div>

        <hr style="width: 100%" />

        <div class="footer-nav">
          <p>© ING DevSchool 2021. All Rights Reserved.</p>
          <ul class="links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Tour</a></li>
            <li><a href="#">Hotel</a></li>
            <li><a href="/places">Places</a></li>
            <li><a href="/add-destination">Add Destination</a></li>
          </ul>
        </div>
      </footer>
    `;
  }
}
customElements.define('footer-component', FooterComponent);
