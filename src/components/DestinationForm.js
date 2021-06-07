import { LitElement, html, css } from 'lit-element';
import './form/FormButton.js';

export class DestinationForm extends LitElement {
  static get properties() {
    return {
      countries: { type: Object },
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

      #destination-form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: var(--nav-height);
        padding: 40px;
        background-color: white;
        border: var(--lightgrey-border);
        border-radius: 40px;
      }

      .form-field {
        display: flex;
        flex-direction: column;
      }

      .form-field input:focus-visible,
      .form-field select:focus-visible {
        outline: none;
        border: 3px solid var(--dark-blue);
        transition: var(--transition);
      }

      .form-field input,
      .form-field select {
        height: var(--form-field-height);
        font-family: var(--font);
        border: var(--lightgrey-border);
        border-radius: var(--emphasized-nav-button-border-rad);
        padding-left: 10px;
        padding-right: 10px;
        transition: var(--transition);
      }

      .form-field select {
        width: 100%;
      }

      .form-field input[type='number'] {
        width: 50px;
      }

      .form-field label {
        color: var(--dark-blue);
        margin-bottom: 10px;
      }

      @media screen and (max-width: 480px) {
        #destination-form {
          flex-direction: column;
          padding: 20px;
        }

        #destination-form .form-field {
          margin-bottom: 15px;
        }
      }

      @media screen and (min-width: 481px) and (max-width: 768px) {
        #destination-form {
          flex-direction: column;
          padding: 20px 0px;
          width: 60%;
        }

        #destination-form .form-field {
          margin-bottom: 15px;
          width: 50%;
        }
      }

      @media screen and (min-width: 769px) and (max-width: 1024px) {
        #destination-form {
          width: 680px;
          margin-top: calc(var(--nav-height) * 2);
          justify-content: space-evenly;
        }
      }

      @media screen and (min-width: 1025px) {
        #destination-form {
          width: 850px;
          margin-top: calc(var(--nav-height) * 3);
        }
      }
    `;
  }

  render() {
    return html`
      <form action="" method="POST" id="destination-form">
        <div class="form-field">
          <label for="form-destination">Destination</label>
          <select id="form-destination">
            ${this.countries.map(
              ([key, value]) => html`<option value=${key}>${value}</option>`
            )}
          </select>
        </div>
        <div class="form-field">
          <label for="form-members">Members</label>
          <input type="number" id="form-members" placeholder="4" min="1" />
        </div>
        <div class="form-field">
          <label for="form-checkin">Check-in date</label>
          <input type="date" id="form-checkin" />
        </div>
        <div class="form-field">
          <label for="form-checkout">Check-out date</label>
          <input type="date" id="form-checkout" />
        </div>
        <form-button name="submitBtn" type="submit">Book now</form-button>
      </form>
    `;
  }
}

customElements.define('destination-form', DestinationForm);
