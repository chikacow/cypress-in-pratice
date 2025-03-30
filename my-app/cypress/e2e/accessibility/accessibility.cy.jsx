describe("Accessibility Testing", () => {
    beforeEach(() => {
      cy.visit("/"); // Visit the homepage (change URL if needed)
      cy.injectAxe(); // Injects axe-core for accessibility testing
    });
  
    it("should have no accessibility violations", () => {
      cy.checkA11y(); // Runs accessibility checks on the entire page
    });
  
    it("should check accessibility of specific elements", () => {
      cy.get("nav").checkA11y(); // Checks accessibility of the navigation bar
      cy.get("main").checkA11y(); // Checks accessibility of the main content
    });
  
    it("should log detailed accessibility violations", () => {
      cy.checkA11y(null, {
        runOnly: ["wcag2a", "wcag2aa"], // Test only WCAG 2.0 A & AA rules
      });
    });
  });
  