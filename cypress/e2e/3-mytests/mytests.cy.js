
describe("form-exists", () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://localhost:3000/pizza')
      })
      // form exists
      it("form exists", () => {
        cy.get('#pizza-form').should("exist");
      })

      // name input exists
      it("name input exists", () => {
        cy.get('#name-input').should("exist");
      })
      //name input works
      it("name input works", () => {
        cy.get('#name-input').type("hello").should("have.value", "hello")
      })


})