describe('empty spec', () => {
  it('Check Form Submission', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.text-2xl > a').click();
    cy.get('input').click();
    cy.get('input').type('test');
    cy.get('button').click();
    cy.get('form').submit();
    // check that alert opened
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Form submitted');
    });

  })
})