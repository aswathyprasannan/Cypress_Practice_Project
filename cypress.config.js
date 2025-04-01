const { defineConfig } = require("cypress");
// Specify the test reporter to be used
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",// Directory where reports will be saved
    overwrite: true, // Overwrite existing reports instead of appending
    html: true, //HTML report will be generated
    json: false,// Do not generate JSON report (set to true if needed)
    charts: true, // Enable charts in the report for visual insights
    embeddedScreenshots: true, // Link screenshots inside the report instead of copying
    inlineAssets: true,         // Prevent duplication of assets
    noVideo: true,              //  Prevent videos from being included in the report
  },
  e2e: {
    experimentalStudio: true,
    video: true, // Cypress will save videos normally
    videosFolder: "cypress/reports/videos", // Videos will ONLY be stored here
    screenshotsFolder: "cypress/reports/screenshots", // Screenshots will ONLY be stored here

      // Setup function for event listeners and plugins
    setupNodeEvents(on, config) {
        // Load the Mochawesome reporter plugin for better reporting
      require("cypress-mochawesome-reporter/plugin")(on);


    },
  },
});
