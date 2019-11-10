describe('My First Test', function() {

  before(function() {
    // runs once before all tests in the block
    cy.fixture('example').then(function(data)
    {
      this.data=data
    })
  });

  it('clicking "type" shows the right headings', function() {

    cy.visit('https://example.cypress.io');
    cy.contains('type').click();

    cy.get('.action-email').type(this.data.name);
    // cy.get('.action-email').should('have.value', 'fake@email.com');


    cy.get('#password1').type(this.data.gender);

  });


})

