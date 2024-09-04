export const homePage = {
    openMenu(menu){
        return cy.get(`[href="/Tab/${menu}"]`).click();
    },
    openShoes(){
        return cy.get(':nth-child(1) > .r-1nteefp > .r-1awozwy').click()
    },
}