describe('Add default locations frkom default_locations.json fixture', function() {
    context('Add Locations', function () {
        beforeEach(function () {
            cy.visit('https://example.cypress.io');
            cy.contains('type').click();
        });

        it('Simple test', function() {
            cy.fixture('dd.json').as('default_data')
            cy.get('@default_data')
                .each( function ( testData ) {
                    // var fields =  Object.keys( testData );
                    cy.get('.action-email').type(testData.store);
                    cy.get('#password1').type(testData.address);
                    cy.get('.action-email').should('have.value',(testData.store));
                    cy.get('#password1').should('have.value',(testData.address));
                });
        });
    });
});
