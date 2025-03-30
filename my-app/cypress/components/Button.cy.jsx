import React from "react";
import Button from "../../src/components/component-testing/Button";

describe("Button Component", () => {
  it("renders correctly", () => {
    cy.mount(<Button label="Click Me" />);
    cy.contains("Click Me").should("be.visible");
  });

  it("calls onClick when clicked", () => {
    const onClick = cy.spy();
    cy.mount(<Button label="Click Me" onClick={onClick} />);
    cy.contains("Click Me").click();
    cy.wrap(onClick).should("have.been.calledOnce");
  });
});
