const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true, // Ativa a gravação automática de vídeos
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
