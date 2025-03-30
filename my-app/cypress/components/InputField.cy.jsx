import InputField from "../../src/components/component-testing/InputField";

describe("InputField Component", () => {
  it("renders with a placeholder", () => {
    cy.mount(<InputField placeholder="Enter text" />);
    cy.get("input").should("have.attr", "placeholder", "Enter text");
  });

  it("updates value when typed into", () => {
    const onChange = cy.spy();
    cy.mount(<InputField placeholder="Enter text" onChange={onChange} />);
    
    cy.get("input").type("Hello Cypress");
    cy.wrap(onChange).should("have.been.calledWith", "Hello Cypress");
  });
});
