describe("edit task functionality", () => {
  it("user can edit a task", () => {
    let date = new Date();
    let task =
      "testing edit task on " +
      date.getDay() +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear() +
      " @ " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    cy.visit("/");
    cy.findByRole("textbox", { name: /enter task/i }).type(task);
    cy.findByTestId("add-task").findByRole("button").click();
    cy.findByText(`${task}`).parent().findByTestId("edit-button").click();
    date = new Date();
    task =
      "testing edit task on " +
      date.getDay() +
      "/" +
      date.getMonth() +
      "/" +
      date.getFullYear() +
      " @ " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    cy.focused().clear();
    cy.findByTestId("editor-textbox").type(task);
    cy.findByTestId("editor-done-button").click();
    cy.findByText(`${task}`).should("be.visible");
  });
});
