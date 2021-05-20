const playwright = require('playwright');
// const iPhone11 = playwright.devices['iPhone 11 Pro'];

const url = 'https://musing-kowalevski-0dee24.netlify.app/';

// selector for nav Places anchor
const placesNavItemSelector =
  'body > nav-component >> nav > div.nav-menu > a:nth-child(4)';

// selector for parent of City Cards
const cityCardsSelector =
  'body > main > places-page >> country-card:nth-child(3) >> div:nth-child(2)';

(async () => {
  // selected chromium and firefox browsers to test
  for (const browserType of ['chromium', 'firefox']) {
    // opening browser with headless: false in order to see the browser window
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(url);

    // click on Places anchor
    await page.click(placesNavItemSelector);

    // takes a screenshot of page
    await page.screenshot({ path: `example-${browserType}.png` });
    await browser.close();
    // const cityCardParentElement = await page.$(cityCardsSelector);
    // console.log(cityCardParentElement);
    // await cityCardParentElement.focus();
  }
})();
