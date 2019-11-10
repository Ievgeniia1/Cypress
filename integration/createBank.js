describe('Crete Bank Account', function() {

  before(function() {
    // runs once before all tests in the block
    cy.fixture('createbankdata').then(function(data)
    {
      this.data=data
    })

      cy.visit('https://beta-portal.hyperwallet.com/docs/api/v3/resources/bank-accounts/create');

      //Wait for dropdowns load
      cy.get('#react-select-2--value-item', {timeout: 10000}).should('exist');
      cy.get('#react-select-3--value-item', {timeout: 10000}).should('exist');


  });

  it('Create Bank for US-USD', function() {



    cy.get('#Business',{timeout: 10000}).click();

    cy.get('#react-select-2--value > .Select-value').click();
    cy.get('.Select-option').contains(this.data.countryName).click();

    cy.get('#react-select-3--value > .Select-value').click();
    cy.get('.Select-option').contains(this.data.transferMethodCurrency).click();

    cy.get(`#${this.data.type}`,{timeout: 10000}).click();
    cy.wait(5000);
    cy.readFile('cypress/fixtures/javaRequest.txt').then(function (data) {
      console.log(data);
        cy.get('pre.language-java').should('have.text', data.trim());
      });

  });

});





