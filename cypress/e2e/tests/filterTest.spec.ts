import { homePage } from "../pages/homePage";
import { filterPage } from "../pages/filterPage";

describe('Lalafo Filter Tests', () => {
    beforeEach(() => {
        homePage.navigate(); // Переход на главную страницу перед каждым тестом
    });

    it('should filter listings by category and price range', () => {
        homePage.openFilterSection();
        filterPage.selectCategory('Транспорт'); // Выбор категории
        filterPage.setPriceRange(1000, 5000); // Установка диапазона цен
        filterPage.applyFilters();
        filterPage.verifyResults(); // Проверка результата
    });
});
