import { LitElement, html, css } from '@lion/core';
import './AddDestinationCombobox.js';
import './AddDestinationForm.js';
import './AddDestinationInput.js';
import './AddDestinationOption.js';
import './AddDestinationRadio.js';
import './AddDestinationRadioGroup.js';
import './AddDestinationButton.js';

export class AddDestination extends LitElement {
  static get properties() {
    return {
      _countries: { type: Object },
      _cityData: { type: Object },
    };
  }

  static get styles() {
    return css``;
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
    return html`
      <add-destination-form>
        <form @submit=${this._handleFormSubmit}>
          <add-destination-combobox label="Country" name="country">
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
          ></add-destination-input>
          <add-destination-radio-group label="City type" name="type">
            <add-destination-radio
              label="capital"
              .choiceValue=${'capital'}
            ></add-destination-radio>
            <add-destination-radio
              label="city"
              .choiceValue=${'city'}
            ></add-destination-radio>
            <add-destination-radio
              label="resort"
              .choiceValue=${'resort'}
            ></add-destination-radio>
          </add-destination-radio-group>
          <add-destination-input
            label="Picture address"
            name="pic"
          ></add-destination-input>
          <add-destination-input
            type="number"
            label="Number of hotels"
            name="hotels"
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

    this._postCity(selectedCountryId);
  }

  async _postCity(countryId) {
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
