describe('Form Tests', () => {
  it('Check Form Submission', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.text-2xl > a').click();
    cy.get('input').click();
    cy.get('input').type('test');
    cy.get('button').click();
    cy.get('form').submit();
    cy.get('h1').should('have.text', 'Form Submitted break');


  





  })
})