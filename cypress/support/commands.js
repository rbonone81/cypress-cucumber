Cypress.Commands.add('dashboardValidation', () => { 
    cy.url('https://www.saucedemo.com/v1/inventory.html')
    cy.get('.app_logo').should('be.visible')
    cy.get('#shopping_cart_container').should('be.visible')
    cy.get('.inventory_list').should('be.visible')
    cy.get('.product_label').should('have.text', 'Products')
 })
