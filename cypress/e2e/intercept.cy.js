const { homePage } = require("../support/pages/home.page");
const { email, senha } = require("../fixtures/data.json");

describe('Teste de Autenticação', () => {

    beforeEach(() => {
        cy.login(email, senha)
    })

    it('shoes should be visible', () => {
        cy.intercept('GET', '**/public/getCategories', { fixture: 'shoes.json' }).as('getShoes')
        homePage.openShoes().should('have.length.greaterThan', 0)
    })

    it('shoes should be empty', () => {
        cy.intercept('GET', '**/public/getCategories', { fixture: 'noShoes.json' }).as('getShoesEmpty')
        homePage.openShoes().should('have.length', 1)
    })

    it('categories should be empty with error', () => {
        cy.intercept('GET', '**/public/getCategories', { statusCode: 500 }).as('getShoesError')
        homePage.openShoes().should('have.length', 1)
    })
})  