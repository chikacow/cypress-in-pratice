describe("Login Page", () => {
    beforeEach(() => {
      cy.visit("/login"); // Ensure the correct route
    });
  
    it("should display the login form", () => {
      cy.contains("Login").should("be.visible");
      cy.get("input[placeholder='Username']").should("be.visible");
      cy.get("input[placeholder='Password']").should("be.visible");
      cy.get("button").contains("Login").should("be.visible");
    });
  
    it("should allow the user to log in with valid credentials", () => {
      cy.get("input[placeholder='Username']").type("admin");
      cy.get("input[placeholder='Password']").type("password");
      cy.get("button").contains("Login").click();
      
      cy.url().should("include", "/dashboard"); // Assuming login redirects to dashboard
    });
  
    it("should show an error message for invalid login", () => {
      cy.get("input[placeholder='Username']").type("wrongUser");
      cy.get("input[placeholder='Password']").type("wrongPass");
      cy.get("button").contains("Login").click();
      
      cy.contains("Invalid credentials").should("be.visible"); // Ensure the error message appears
    });
  });
  