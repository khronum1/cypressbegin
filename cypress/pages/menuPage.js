class menuPage {

    selectorsList(){ 
    const selectors = {
        sectionTitleTopbar: "[href='/web/index.php/pim/viewMyDetails']",
        wrongCredentialAlert: '.oxd-alert-content',
        myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',


    }

 return selectors
}


accessMyInfo() {
    cy.get(this.selectorsList().myInfoButton).click()
}

}

export default menuPage