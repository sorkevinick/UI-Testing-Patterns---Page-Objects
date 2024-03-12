const { homePage }  = require("../support/pages/home.page");
const  singupPage  = require('../support/pages/singup.page');
const { primeiroNome, ultimoNome, telefone, email, senha, resenha } = require("../fixtures/data.json")
const { profilePage } = require("../support/pages/profile.page")
describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  });
  it('Deve fazer o cadastro com sucesso', () => {
    homePage.openMenu('Account')
    singupPage.singUp(primeiroNome, ultimoNome, telefone, email, senha, resenha)
    homePage.openMenu('Account')
    profilePage.customerName().should('contain', 'Silva Joao')
  })
})