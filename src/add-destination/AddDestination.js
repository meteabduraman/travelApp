import { LitElement, html, css } from '@lion/core';
import { Required, Pattern } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { ComboboxValidator } from './validators/ComboboxValidator.js';
import './components/AddDestinationCombobox.js';
import './components/AddDestinationForm.js';
import './components/AddDestinationInput.js';
import './components/AddDestinationOption.js';
import './components/AddDestinationRadio.js';
import './components/AddDestinationRadioGroup.js';
import './components/AddDestinationButton.js';
import '../nav/Nav.js';

export class AddDestination extends LitElement {
  static get properties() {
    return {
      _countries: { type: Object },
      _cityData: { type: Object },
    };
  }

  static get styles() {
    return css`
      h2 {
        display: block;
        width: max-content;
        margin-left: auto;
        margin-right: auto;
        color: #2e4381;
        font-size: 30px;
      }

      p {
        display: block;
        max-width: 500px;
        margin: 0px auto 25px auto;
        text-align: center;
        color: #2e4381;
      }

      add-destination-form {
        display: flex;
        justify-content: center;
      }

      add-destination-form form {
        width: 40vw;
      }

      add-destination-button {
        display: block;
        width: max-content;
        margin-left: auto;
        margin-right: auto;
      }

      [type='error'] ~ .form-control {
        border-color: #b02e0c;
      }

      [type='error'] {
        color: #b02e0c;
        font-size: small;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('https://devschool-2020.firebaseio.com/mete/places.json')
      .then(res => res.json())
      .then(countries => {
        this._countries = Object.entries(countries).map(([key, value]) => [
          key,
          value.name,
        ]);
      })
      .catch(err => console.error(err));
  }

  render() {
    loadDefaultFeedbackMessages();
    return html`
      <nav-component></nav-component>
      <h2>Share a new place</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi
        ipsum dolores velit aut est sint error nemo repellendus perspiciatis
        doloribus eum nobis nihil soluta eaque, asperiores alias veritatis
        ducimus.
      </p>
      <add-destination-form>
        <form @submit=${this._handleFormSubmit}>
          <add-destination-combobox
            label="Country"
            name="country"
            .validators=${[
              new Required(),
              new ComboboxValidator(this._countries),
            ]}
          >
            ${this._countries.map(
              ([, value]) =>
                html`<add-destination-option .choiceValue=${value}
                  >${value}</add-destination-option
                >`
            )}
          </add-destination-combobox>
          <add-destination-input
            label="City name"
            name="name"
            .validators=${[new Required()]}
          ></add-destination-input>
          <add-destination-radio-group
            label="City type"
            name="type"
            .validators=${[new Required()]}
          >
            <add-destination-radio
              label="capital"
              .choiceValue=${`capital`}
            ></add-destination-radio>
            <add-destination-radio
              label="city"
              .choiceValue=${`city`}
            ></add-destination-radio>
            <add-destination-radio
              label="resort"
              .choiceValue=${`resort`}
            ></add-destination-radio>
          </add-destination-radio-group>
          <add-destination-input
            label="Picture address"
            name="pic"
            .validators=${[
              new Required(),
              new Pattern(/(https?:\/\/)/, { type: 'error' }),
            ]}
          ></add-destination-input>
          <add-destination-input
            type="number"
            label="Number of hotels"
            name="hotels"
            .validators=${[new Required()]}
          ></add-destination-input>
          <add-destination-button name="submitBtn" type="submit"
            >Submit</add-destination-button
          >
        </form>
      </add-destination-form>
    `;
  }

  _handleFormSubmit(e) {
    e.preventDefault();

    const selectedCountry = this.shadowRoot.querySelector(
      'add-destination-combobox input'
    ).value;
    const selectedCountryId = this._countries.find(
      ([, value]) => value === selectedCountry
    )[0];

    const cityData = Object.fromEntries(new FormData(e.target));
    cityData.pic = { link: cityData.pic, source: 'Unsplash', credits: '' };
    cityData.hotels = { number: parseInt(cityData.hotels, 10) };

    this._cityData = cityData;

    if (!e.target.parentElement.showsFeedbackFor.includes('error'))
      this._postCity(selectedCountryId);
  }

  async _postCity(countryId) {
    console.log('posted');
    fetch(
      `https://devschool-2020.firebaseio.com/mete/places/${countryId}/cities.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this._cityData),
      }
    )
      .then(res => res.json())
      .then(cityId => console.log(cityId))
      .catch(err => console.log(err));
  }
}

customElements.define('add-destination', AddDestination);
