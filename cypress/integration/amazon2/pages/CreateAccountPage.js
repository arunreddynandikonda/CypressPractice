class CreateAccountPage {

    getName() {
        return cy.get('#ap_customer_name')
    }

    getPhoneNumber() {
        return cy.get('#ap_phone_number')
    }

    getPassword() {
        return cy.get('#ap_password')
    }

    getContinueButton() {
        return cy.get('#continue')
    }

}

export default CreateAccountPage