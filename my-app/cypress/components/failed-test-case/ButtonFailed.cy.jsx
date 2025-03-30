import Button from "../../../src/components/component-testing/fail-test-case/Button";

describe("Button Component (Failing Test)", () => {
  it("should not be visible", () => {
    cy.mount(<Button label="Click Me" />);
    cy.contains("Click Me").should("not.exist"); // ❌ This will fail because the button does exist
  });

  it("should have incorrect text", () => {
    cy.mount(<Button label="Submit" />);
    cy.contains("Click Me").should("be.visible"); // ❌ This will fail because the button says "Submit"
  });

  it("should trigger onClick event", () => {
    const onClick = cy.spy();
    cy.mount(<Button label="Click Me" onClick={onClick} />);
    cy.contains("Click Me").click();
    cy.wrap(onClick).should("have.been.calledTwice"); // ❌ This will fail because it's only clicked once
  });
});
