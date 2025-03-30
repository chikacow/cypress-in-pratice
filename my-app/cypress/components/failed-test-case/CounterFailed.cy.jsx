import Counter from "../../../src/components/component-testing/fail-test-case/Counter";

describe("Counter Component (Failing Test)", () => {
  it("should not increment the count", () => {
    cy.mount(<Counter />);
    cy.contains("Count: 0").should("be.visible");
    cy.contains("Increment").click();
    cy.contains("Count: 0").should("be.visible"); // ❌ This will fail because the count changes to 1
  });

  it("should start with a count of 5", () => {
    cy.mount(<Counter />);
    cy.contains("Count: 5").should("be.visible"); // ❌ This will fail because it starts at 0
  });
});
