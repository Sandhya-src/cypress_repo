describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/v1/')
      cy.get('[id="user-name"]').type("standard_user")
      cy.get('[id="password"]').type("secret_sauce")
      cy.get('[id="login-button"]').click()
    })
  })