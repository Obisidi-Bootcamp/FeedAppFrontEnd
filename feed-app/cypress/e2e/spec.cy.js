describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("App Running Test", () => {
  it("passes", () => {
    //Visit login page
    cy.visit("http://localhost:3000/login");
    //Ensure the page is working
    cy.location("pathname").should("include", "/login");

    //Visit signup page
    cy.visit("http://localhost:3000/signup");

    //Ensure the page is working
    cy.location("pathname").should("include", "/signup");
  });
});

describe("Login Test", () => {
  it("passes", () => {
    //Visit login page
    cy.visit("http://localhost:3000/login");

    // Enter username and password in form inputs
    cy.get("input[name=username]").type("jDoe3286");
    cy.get("input[name=password]").type("1960").type("{enter}"); // '{enter}' submits the form

    // Ensure login is successful.
    //If it is successfull the app will navigate to home "/".
    cy.location("pathname").should("not.include", "/login");
  });
});