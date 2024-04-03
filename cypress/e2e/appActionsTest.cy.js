
const { profilePage } = require('../support/pages/profile.page')
const { email, senha } = require("../fixtures/data.json")


describe('Teste de Autenticação', () => {
  beforeEach(() => {
    cy.login(email, senha)
    profilePage.customerName().should('have.text', 'Silva Joao')

  });
  it('Deve realizar o processo de checkout', () => {
    cy.checkout()
  });
})
