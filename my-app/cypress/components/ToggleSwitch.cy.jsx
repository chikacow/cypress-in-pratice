import ToggleSwitch from "../../src/components/component-testing/ToggleSwitch";

describe("ToggleSwitch Component", () => {
  it("renders with OFF state initially", () => {
    cy.mount(<ToggleSwitch onToggle={() => {}} />);
    cy.contains("OFF").should("be.visible");
  });

  it("toggles to ON when clicked", () => {
    const onToggle = cy.spy();
    cy.mount(<ToggleSwitch onToggle={onToggle} />);

    cy.contains("OFF").click();
    cy.contains("ON").should("be.visible");
    cy.wrap(onToggle).should("have.been.calledWith", true);
  });

  it("toggles back to OFF when clicked again", () => {
    const onToggle = cy.spy();
    cy.mount(<ToggleSwitch onToggle={onToggle} />);

    cy.contains("OFF").click();
    cy.contains("ON").click();
    cy.contains("OFF").should("be.visible");
    cy.wrap(onToggle).should("have.been.calledWith", false);
  });
});
