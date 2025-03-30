describe("Wikipedia Homepage", () => {
    beforeEach(() => {
      cy.visit("https://www.wikipedia.org/"); // Visit Wikipedia
    });
  
    it("should display the Wikipedia logo", () => {
      cy.get(".central-textlogo").should("be.visible"); // Check if logo is visible
    });
  
    it("should have a search input field", () => {
      cy.get("input[name='search']").should("exist"); // Check for search input
    });
  
    it("should allow searching for 'Cypress'", () => {
      cy.get("input[name='search']").type("Cypress{enter}"); // Type and press enter
      /*
      cy.url().should("include", "Cypress"); // Check if redirected correctly
      cy.contains("Cypress").should("exist"); // Verify search results

      */
      cy.origin("https://en.wikipedia.org", () => {
        cy.url().should("include", "Cypress"); // Check the new URL
        cy.contains("Cypress").should("exist"); // Verify search results
      });
    });
  
    it("should have a link to English Wikipedia", () => {
      cy.get("#js-link-box-en").should("contain", "English"); // Verify English link
    });
  
    it("should navigate to English Wikipedia when clicked", () => {
      cy.get("#js-link-box-en").click(); // Click English link
      //cy.url().should("include", "en.wikipedia.org"); // Confirm navigation
      cy.origin("https://en.wikipedia.org", () => {  //handle cross-origin navigation
        cy.url().should("include", "n.wikipedia.org"); // Check the new URL
        
      });
    });
  });
  