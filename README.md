<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

## Netlify deployment link -> [travel-app](https://musing-kowalevski-0dee24.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/04ef8b90-a29a-4bf8-85ed-b2c5bd3adde4/deploy-status)](https://app.netlify.com/sites/musing-kowalevski-0dee24/deploys)

## Travel App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

Welcome to TravelApp starter kit ! You will implement features for the app while learning about frontend development.

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

## Interacting with the **Destinations API**

The Destinations API provides the data for Travela.
It can be accessed [here](https://devschool-2020.firebaseio.com/mete.json).

### Structure

```js
places: {
  countryId: {
    name,
    type,
    cities: {
      cityId: {
        name,
        type,
        pic: {
          link,
          credits,
          source
        },
        hotels: {
          hotelId: {
            address: {
              neighbourhood,
              number,
              postalCode,
              street
            },
            amenities,
            contact: {
              email,
              phone
            },
            coordinates: {
              lat,
              long
            },
            name,
            pricePerNight: {
              currency,
              high,
              low
            },
            stars
          },
          ...,
          number
        }
      },
      ...,
      number
    }
  }
  ...
}
```

### 📥 GET all destinations

To get all the data provided by the API, using the `fetch` API:

```js
fetch('https://devschool-2020.firebaseio.com/mete/places.json')
  .then(res => {
    /* do things with res.json() */
  })
  .catch(err => {
    /* do things with err */
  });
```

`res.json()` will contain an object with each country as a property

```js
{ -MZxxVypQ-lVIJaQNkNu: { name: "Egypt 🇮🇶", ... } }
```

### 📥 GET specific details about a destination

As per the structure, attributes can be passed in the fetching URL to obtain specific data.

For example, let's get the `address` object of The Ritz-Carlton in Istanbul, Turkey.

First, store the IDs in variables for better readability:

```js
const idOfTurkey = '-MZxxlz1ZrEgyDDfS3gM';
const idOfIstanbul = '-MZxyH-Xc_Mktczo4R-Z';
const idOfTheRitz = '-MZy-LP92G-roYgAfa09';
```

Then:

```js
fetch(
  `https://devschool-2020.firebaseio.com/mete/places/${idOfTurkey}/cities/${idOfIstanbul}/hotels/${idOfTheRitz}/address.json`
)
  .then(res => {
    console.log(res.json());
  })
  .catch(err => {
    console.log(err);
  });
```

The API will respond with:

```json
{
  "neighbourhood": "Harbiye",
  "number": 6,
  "postalCode": "34367",
  "street": "Askerocağı"
}
```

_In some instances, the `number` in an `address` object may be `-1` and string properties may be `""` due to the fact that they were not provided._

### 📤 POST new destinations

Applying the same logic as previously, with the help of `fetch` it is possible to add new destinations (countries and cities) and new hotels to existing ones.

Let's say we would like to add a newly featured hotel, situated in an already supported location: Luxor, Egypt.

```js
const idOfEgypt = '-MZxxVypQ-lVIJaQNkNu';
const idOfLuxor = '-MZw5frJpSBrPshWPIFy';
```

First, we define our object following the API structure:

```js
const newHotel = {
  name: 'Sofitel Winter Palace',
  pricePerNight: {
    currency: 'USD',
    low: 56,
    high: 88,
  },
  stars: 5,
  address: {
    neighbourhood: 'Luxor Temple',
    number: 17,
    postalCode: '11432',
    street: 'Kornish Al Nile',
  },
  amenities: ['pool', 'spa', 'fitness center'],
  contact: {
    email: 'hello@sofitelluxor.com',
    phone: '+20952380422',
  },
  coordinates: {
    lat: '25.6965',
    long: '32.6373',
  },
};
```

Then, using the `method: 'POST'`, send it to the API:

```js
fetch(
  `https://devschool-2020.firebaseio.com/mete/places/${idOfEgypt}/cities/${idOfLuxor}/hotels.json`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newHotel),
  }
)
  .then(res => {
    console.log(res.json());
  })
  .catch(err => {
    console.log(err);
  });
```

If the `POST` is successful, the API will respond with an object comprised of a single property, with the key `name` and the value - the added object's ID:

```json
{ "name": "-MZyeKzuYpjDF4bAi77U" }
```

### 📤 PUT updated data

The `PUT` method comes in handy when updating already existing data. Applied to Travela, one of the most volatile information stored is represented by the `pricePerNight` property, being subject to frequent changes.

Let's use the API to update the `pricePerNight` object of the newly added hotel just above.

```js
const idOfEgypt = '-MZxxVypQ-lVIJaQNkNu';
const idOfLuxor = '-MZw5frJpSBrPshWPIFy';
const idOfSofitel = '-MZyeKzuYpjDF4bAi77U';
```

Create the new object:

```js
const newPricePerNight = {
  currency: 'USD',
  high: 100,
  low: 60,
};
```

Using the `fetch` API:

```js
fetch(
  `https://devschool-2020.firebaseio.com/mete/places/${idOfEgypt}/cities/${idOfLuxor}/hotels/${idOfSofitel}/pricePerNight.json`,
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPricePerNight),
  }
)
  .then(res => {
    console.log(res.json());
  })
  .catch(err => {
    console.log(err);
  });
```

If successful, the `res.json()` will log the following:

```js
{ currency: "USD", high: 100, low: 60 }
```

### ❌ Delete destinations/hotels

Suddenly, the Medellín local government body introduces a state of emergency and tourism is the most affected. Entrance in the city is strictly prohibited when it comes to touristic purposes.

```js
const idOfColombia = '-MZyFI1DEIo7uTOuAggc';
const idOfMedellín = '-MZyKqghxtGkjqaCbWrf';
```

In order to delete the destination:

```js
fetch(
  `https://devschool-2020.firebaseio.com/mete/places/${idOfColombia}/cities/${ifOfMedellín}.json`,
  { method: 'DELETE' }
)
  .then(res => {
    console.log(res.json());
  })
  .catch(err => {
    console.log(err);
  });
```

If successful, the API will return `null`.
