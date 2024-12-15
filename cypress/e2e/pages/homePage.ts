class HomePage {
    navigate() {
        cy.visit('/'); // Переход на главную страницу
    }

    openFilterSection() {
        cy.get('button[aria-label="Filters"]').click(); // Открываем секцию фильтров (замените селектор на актуальный)
    }
}

export const homePage = new HomePage();
