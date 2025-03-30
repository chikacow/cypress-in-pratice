describe("Contact Form", () => {
    beforeEach(() => {
      cy.visit("/contact"); // Visit the contact form page
    });
  
    it("should display the form", () => {
      cy.get("input[placeholder='Your Name']").should("be.visible");
      cy.get("input[placeholder='Your Email']").should("be.visible");
    });
  
    it("should submit the form and show success message", () => {
      cy.get("input[placeholder='Your Name']").type("John Doe");
      cy.get("input[placeholder='Your Email']").type("john@example.com");
      cy.get("button").contains("Submit").click();
  
      cy.contains("Form submitted successfully!").should("be.visible");
    });
  });
  