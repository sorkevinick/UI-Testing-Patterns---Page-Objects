
const { profilePage } = require('../support/pages/profile.page')
const { email, senha } = require("../fixtures/data.json")


describe('Teste de Autenticação', () => {
  beforeEach(() => {
    cy.login(email, senha)
    profilePage.customerName().should('have.text', 'Silva Joao')
    
  });
  it('Deve fazer o checkout', () => {
    cy.get('[data-testid="home-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"] > [data-testid="productDetails"]').click()
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
    cy.get('[data-testid="completeCheckout"]').click()
  });
})
