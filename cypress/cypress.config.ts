import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://lalafo.kg', // Укажите базовый URL вашего тестируемого сайта
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      // Настройка плагинов
    },
  },
});
