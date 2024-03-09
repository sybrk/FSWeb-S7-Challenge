
describe("form-elements", () => {
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

     
      it("size input exists", () => {
        cy.get('#pizza-size').should("exist");
      })

      it("size input works", () => {
        cy.get('#pizza-size').select(1).should("have.value", "small")
      })
      
      it("sauce input exists", () => {
        cy.get('[type="radio"][name="sauce"]').should("exist");
      })
      
      it("sauce input works", () => {
        cy.get('[type="radio"][name="sauce"]').first().check();
      })

      it("topping input exists", () => {
        cy.get('[type="checkbox"][name="toppings"]').should("exist");
      })

      it("topping input works", () => {
        cy.get('[type="checkbox"][name="toppings"]').first().check()
      })

      /* it("topping input max limit", () => {
        for (let i = 0; i < 11; i++) {
          cy.get('[type="checkbox"][name="toppings"]')[i].check()
        }
      }) */

      it("substitute input exists", () => {
        cy.get('[type="checkbox"][name="substitute1"]').should("exist");
      })
      it("substitute input works", () => {
        cy.get('[type="checkbox"][name="substitute1"]').first().check()
      })
})

describe("form filling", () => {
  it("form filling", ()=>{
    cy.visit('http://localhost:3000/pizza');
    cy.get('#name-input').type("hello").should("have.value", "hello");
    cy.get('#pizza-size').select(1).should("have.value", "small");
    cy.get('[type="radio"][name="sauce"]').first().check();
    cy.get('[type="checkbox"][name="toppings"]').first().check()
    cy.get('[type="checkbox"][name="substitute1"]').first().check()
  })
})

describe("max limit", () => {
  it("topping max limit", ()=>{
    cy.visit('http://localhost:3000/pizza');
    
    cy.get('[type="checkbox"][name="toppings"]').check()
    
  })
})