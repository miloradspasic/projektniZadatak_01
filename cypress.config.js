const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://www.phptravels.net/login",
    watchForFileChanges: true,
    defaultCommandTimeout: 10000,
    responseTimeout: 30000,
    specPattern: "**/*.feature",
  },
});
