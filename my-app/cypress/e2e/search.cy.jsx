describe("Product Search", () => {
    beforeEach(() => {
      cy.visit("/products"); // Visit the product page
    });
  
    it("should display the product list", () => {
      cy.contains("Laptop").should("be.visible");
      cy.contains("Phone").should("be.visible");
    });
  
    it("should filter the product list based on search input", () => {
      cy.get("input").type("phone");
      cy.contains("Phone").should("be.visible");
      cy.contains("Laptop").should("not.exist");
    });
  });
  