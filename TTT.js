// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('My First Test', () => {
  it('Add short story at TTT', () => {
    cy.visit('https://write.terriblytinytales.com/')
    cy.wait(5000)
    cy.xpath('//*[@id="__next"]/div[1]/div/div[3]/div[1]/img').click()
    cy.wait(5000)
    cy.xpath('//*[@id="__next"]/div[2]/div[2]/div[2]/div[1]/div/div[3]/div[1]/div/img').click()
    cy.wait(5000)
    cy.xpath('//*[@id="__next"]/div[2]/button[2]/p').click()
    cy.wait(5000)
    cy.xpath('//div/div[2]/button/div/img[2]').click()
    cy.xpath('//*[@id="__next"]/div[3]/div/div[2]/div[1]/input').type('cypress')
    cy.xpath('//*[@id="__next"]/div[3]/div/div[2]/div[2]/textarea').type('hi, this is my first cypress project. lets see if it works ')
    cy.xpath('//*[@id="__next"]/div[2]/div/button[2]/p').click()
    cy.wait(2000)
    cy.xpath('//*[@id="__next"]/div[3]/div/div[3]/div/input').should('have.value', 'hi, this is my first cypress project. lets see if it works ')

  })
})
