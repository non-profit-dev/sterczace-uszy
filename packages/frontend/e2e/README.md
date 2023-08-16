# E2E Tests

This package contains end-to-end tests for the website, powered by the [Cypress testing tool](https://www.cypress.io/).

## Table of Contents 📃

- [Getting Started](#getting-started-)
- [Overview](#overview-)

## Getting Started 🚀

Before running Cypress, ensure that your development server is up and running.

Start it by executing the following command:

```
yarn develop
```

Once your development server is running, open the Cypress interface by executing:

```
yarn cypress:open
```

This will launch the Cypress server, allowing you to interact with and execute your tests.

## Overview ✨

Each page within the application should have a corresponding test file located in the `cypress/e2e` directory. These tests help ensure the functionality and integrity of your application.

For each page, it's recommended to include at least one test case, verifying its successful loading and accessibility tests:

```js
describe("Page", () => {
  it("should successfully load", () => {
    cy.visit("/")
  })

  it(`should be accessible`, () => {
    cy.injectAxe()
    cy.checkA11y()
  })
})
```

Happy testing! 🕵🏻‍♀️
