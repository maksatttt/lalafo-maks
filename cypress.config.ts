const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://lalafo.kg', // URL тестируемого сайта
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'reports', // Папка для отчетов
        overwrite: false,
        html: true,
        json: false,
    },
});