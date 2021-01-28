describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    cy.get('[data-testid="email-status"]').should('have.attr', 'title', 'Campo obrigatório')
  })
})
