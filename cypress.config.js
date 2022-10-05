const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
    },

    video : false,
    defaultCommandTimeout : 5000,
    pageLoadTimeout : 10000,
    ignoreTestFiles : ["*.js", "*.md"],
    
    // Load test file
    specPattern: "**/*.feature"

  },
});
