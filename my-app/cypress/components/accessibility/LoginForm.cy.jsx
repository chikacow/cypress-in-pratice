import React from "react";
import { mount } from "cypress/react";
import LoginForm from "../../../src/components/accessibility/LoginForm"; // Adjust the import path as necessary
import "cypress-axe";

describe("LoginForm Accessibility", () => {
  beforeEach(() => {
    mount(<LoginForm onLogin={() => {}} />);
    cy.injectAxe(); // Inject axe for accessibility testing
  });

  it("should have no accessibility violations", () => {
    cy.checkA11y(); // Run accessibility tests
  });

  it("should have accessible input fields", () => {
    cy.get("input#username").should("have.attr", "aria-required", "true");
    cy.get("input#password").should("have.attr", "aria-required", "true");
  });

  it("should have a properly labeled button", () => {
    cy.get("button").should("have.attr", "aria-label", "Submit login form");
  });
});
