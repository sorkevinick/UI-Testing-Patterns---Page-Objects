
const { profilePage } = require('../support/pages/profile.page')
const { email, senha } = require("../fixtures/data.json")
const { homePage }  = require("../support/pages/home.page");


describe('Teste de Autenticação', () => {

  before(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
});

beforeEach(() => {
    cy.visit('/')
    cy.login(email, senha)
  });

  it('categories should be visible', () => {
    cy.intercept('GET', '**/public/getCategories', {fixtures: 'categories.json'}).as('getCategories')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length.greaterThan', 1)
});

it('categories should be empty', () => {
    cy.intercept('GET', '**/public/getCategories', {fixtures: 'noCategories.json'}).as('getCategoriesEmpty')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length', 1)
});
})
