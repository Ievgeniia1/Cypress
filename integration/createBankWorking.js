import CreateBankAccount from "./pages/createBank";
const data = require("C:\\Ievgeniia_work\\cypress_try\\cypress\\fixtures\\create111.json");

describe('Test the app', function() {

    before(function() {
        cy.visit('https://beta-portal.hyperwallet.com/docs/api/v3/resources/bank-accounts/create');

        //Wait for dropdowns load
        cy.get('#react-select-2--value-item', {timeout: 10000}).should('exist');
        cy.get('#react-select-3--value-item', {timeout: 10000}).should('exist');
    });



    Object.keys(data).forEach(function(dataSet){
        it(`Test Case For: ${dataSet}`, function() {
            const createBankAccount = new CreateBankAccount();
            cy.log(data[dataSet].countryName);

            createBankAccount.getButton(data[dataSet].profileType).click();
            createBankAccount.getCountryDropdown().click();
            createBankAccount.selectFromDropdown(data[dataSet].countryName).click();
            createBankAccount.getCurrencyDropdown().click();
            createBankAccount.selectFromDropdown(data[dataSet].transferMethodCurrency).click();
            createBankAccount.getButton(data[dataSet].type).click().then(function (e) {
                // const dd = data[dataSet].transferMethodCountry+"/"+data[dataSet].transferMethodCurrency+"/"+data[dataSet].profileType+"/"+data[dataSet].type
                // console.log(dd)
            });
            // C:\Ievgeniia_work\cypress_try\cypress\fixtures\UK\USD\BANK_ACCOUNT\BUSINESS\javaRequest.txt

            //function (filename, selector)
            cy.readFile('cypress/fixtures/'+data[dataSet].transferMethodCountry+"/"+data[dataSet].transferMethodCurrency+"/"+data[dataSet].type+"/"+data[dataSet].profileType+'/javaRequest.txt').then(function (data) {
                cy.get('pre.language-java').should('have.text', data.trim());
            });


            // const dd = require("C:\\Ievgeniia_work\\cypress_try\\cypress\\fixtures\\"&data[dataSet].transferMethodCountry&"\\"&&data[dataSet].transferMethodCurrency&"USD\\BANK_ACCOUNT\\BUSINESS\\javaRequest.txt");
            // cy.log(dd)



            //this prints data to console to copy from there
            // cy.get('pre.language-java').then(function (data1) {
            //     console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
            //     console.log((data1).text().trim());
            // });

            // cy.readFile('cypress/fixtures/US/phpRequest.txt').then(function (data2) {
            //     cy.get('pre.language-php').should('have.text', data2.trim());
            // });
            //
            // cy.readFile('cypress/fixtures/US/nodeRequest.txt').then(function (data3) {
            //     cy.get('pre.language-javascript').should('have.text', data3.trim());
            // });

        })
    });
});
