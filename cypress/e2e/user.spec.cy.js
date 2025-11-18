
import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()

const dashboardPage = new DashboardPage()

const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

const selectorsList = { 
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopbar: "[href='/web/index.php/pim/viewMyDetails']",
    wrongCredentialAlert: '.oxd-alert-content',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[placeholder='Last Name']", 
    genericField: '.oxd-input',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    nationalityButton: ".oxd-select-text--active",
    genericCombobox: ".oxd-select-text--arrow",
  
}

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
       
    
  
    cy.get(selectorsList.firstNameField).clear().type('First Name Test')
    cy.get(selectorsList.lastNameField).clear().type('Last Name Test')
    cy.get(selectorsList.genericField).eq(4).clear().type('employee id test')
    cy.get(selectorsList.genericField).eq(5).clear().type('other id test')
    cy.get(selectorsList.genericField).eq(6).clear().type('drivers license number test')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
  
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get('.oxd-select-dropdown > :nth-child(27)').click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(':nth-child(3) > span').click()
   

  })
  it('Login-Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
})
})