import Modal from "../../src/components/component-testing/Modal";

describe("Modal Component", () => {
  it("does not render when closed", () => {
    cy.mount(<Modal isOpen={false} />);
    cy.get("div").should("not.exist");
  });

  it("renders when open", () => {
    cy.mount(<Modal isOpen={true}>Hello World</Modal>);
    cy.contains("Hello World").should("be.visible");
  });

  it("closes when the close button is clicked", () => {
    const onClose = cy.spy();
    cy.mount(<Modal isOpen={true} onClose={onClose}>Hello World</Modal>);
    
    cy.contains("Close").click();
    cy.wrap(onClose).should("have.been.calledOnce");
  });
});
