import Modal from "../../../src/components/component-testing/fail-test-case/Modal";

describe("Modal Component (Failing Test)", () => {
  it("should be visible even when closed", () => {
    cy.mount(<Modal isOpen={false} />);
    cy.contains("Modal Content").should("be.visible"); // ❌ This will fail because the modal should not render
  });

  it("should not close when clicked", () => {
    const onClose = cy.spy();
    cy.mount(<Modal isOpen={true} onClose={onClose} />);
    cy.contains("Close").click();
    cy.wrap(onClose).should("not.have.been.called"); // ❌ This will fail because the onClose function does get called
  });
});
