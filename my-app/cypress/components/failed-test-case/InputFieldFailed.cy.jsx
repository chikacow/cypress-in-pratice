import InputField from "../../../src/components/component-testing/fail-test-case/InputField";

describe("InputField Component (Failing Test)", () => {
  it("should not accept input", () => {
    const onChange = cy.spy();
    cy.mount(<InputField placeholder="Enter text" onChange={onChange} />);
    cy.get("input").type("Hello");
    cy.wrap(onChange).should("not.have.been.called"); // ❌ This will fail because onChange gets called
  });

  it("should have a different placeholder", () => {
    cy.mount(<InputField placeholder="Search here" />);
    cy.get("input").should("have.attr", "placeholder", "Enter text"); // ❌ This will fail because the placeholder is "Search here"
  });
});
