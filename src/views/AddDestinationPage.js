import { LitElement, html, css } from '@lion/core';
import { Required, Pattern } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { ComboboxValidator } from '../components/form/FormCombobox/validators/FormComboboxValidator.js';
import '../components/form/FormCombobox/FormCombobox.js';
import '../components/form/FormWrapper.js';
import '../components/form/FormInput.js';
import '../components/form/FormOption.js';
import '../components/form/FromRadio.js';
import '../components/form/FormRadioGroup.js';
import '../components/form/FormButton.js';
import '../components/NavComponent.js';

export class AddDestinationPage extends LitElement {
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

      form-wrapper {
        display: flex;
        justify-content: center;
      }

      from-wrapper form {
        width: 40vw;
      }

      form-button {
        display: block;
        width: max-content;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
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
          value.cities.number,
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
      <form-wrapper>
        <form @submit=${this._handleFormSubmit}>
          <form-combobox
            label="Country"
            name="country"
            .validators=${[
              new Required(),
              new ComboboxValidator(this._countries),
            ]}
          >
            ${this._countries.map(
              ([, value]) =>
                html`<form-option .choiceValue=${value}>${value}</form-option>`
            )}
          </form-combobox>
          <form-input
            label="City name"
            name="name"
            .validators=${[new Required()]}
          ></form-input>
          <form-radio-group
            label="City type"
            name="type"
            .validators=${[new Required()]}
          >
            <form-radio label="capital" .choiceValue=${`capital`}></form-radio>
            <form-radio label="city" .choiceValue=${`city`}></form-radio>
            <form-radio label="resort" .choiceValue=${`resort`}></form-radio>
          </form-radio-group>
          <form-input
            label="Picture address"
            name="pic"
            .validators=${[
              new Required(),
              new Pattern(/(https?:\/\/)/, { type: 'error' }),
            ]}
          ></form-input>
          <form-input
            type="number"
            label="Number of hotels"
            name="hotels"
            .validators=${[new Required()]}
          ></form-input>
          <form-button name="submitBtn" type="submit">Submit</form-button>
        </form>
      </form-wrapper>
    `;
  }

  _handleFormSubmit(e) {
    e.preventDefault();

    const selectedCountry = this.shadowRoot.querySelector('form-combobox input')
      .value;
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
    const numberOfCities = this._countries.find(
      ([key, ,]) => key === countryId
    )[2];

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
      .then(() => {
        fetch(
          `https://devschool-2020.firebaseio.com/mete/places/${countryId}/cities.json`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ number: numberOfCities + 1 }),
          }
        )
          .then(res => res.json())
          .then(number => console.log(number))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
}

customElements.define('add-destination-page', AddDestinationPage);
