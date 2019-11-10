class CreateBankAccount {

    getButton(value){
        return cy.get(`#${value}`)
    }

    getCountryDropdown(){
        return cy.get('#react-select-2--value > .Select-value')
    }

    getCurrencyDropdown() {
        return cy.get('#react-select-3--value > .Select-value')
    }

    selectFromDropdown(value){
        return cy.get('.Select-option').contains(value)
    }



}
export default CreateBankAccount;
