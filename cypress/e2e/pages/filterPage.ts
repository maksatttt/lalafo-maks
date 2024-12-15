class FilterPage {
    selectCategory(category: string) {
        cy.get('select[name="category"]').select(category); // Выбираем категорию
    }

    setPriceRange(min: number, max: number) {
        cy.get('input[name="price_min"]').type(min.toString());
        cy.get('input[name="price_max"]').type(max.toString());
    }

    applyFilters() {
        cy.get('button.apply-filters').click(); // Применяем фильтры
    }

    verifyResults() {
        cy.get('.listing-item').should('exist'); // Проверяем, что результаты найдены
    }
}

export const filterPage = new FilterPage();
