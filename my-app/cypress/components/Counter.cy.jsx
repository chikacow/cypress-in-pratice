import Counter from "../../src/components/component-testing/Counter";

describe("Counter Component", () => {
  it("renders with initial count", () => {
    cy.mount(<Counter />);
    cy.contains("Count: 0").should("be.visible");
  });

  it("increments the count when button is clicked", () => {
    cy.mount(<Counter />);
    cy.contains("Increment").click();
    cy.contains("Count: 1").should("be.visible");
  });
});
