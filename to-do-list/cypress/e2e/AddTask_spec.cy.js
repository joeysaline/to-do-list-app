describe("add task functionality", () => {
  it("page successfully loads", () => {
    cy.visit("/");
  });
  it("user can add a task with default submit", () => {
    let date = new Date();
    let task =
      "testing add task on " +
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
    cy.findByRole("form").submit();
    cy.findByText(`${task}`).should("be.visible");
  });
  it("user can add a task with button", () => {
    let date = new Date();
    let task =
      "testing add task on " +
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
    cy.findByText(`${task}`).should("be.visible");
  });

  it("user can add edit mark complete uncomplete and delete a task", () => {
    let date = new Date();
    let task =
      "testing began on " +
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
    // add
    cy.findByRole("textbox", { name: /enter task/i }).type(task);
    cy.findByTestId("add-task").findByRole("button").click();
    cy.findByText(`${task}`).should("be.visible");
    // edit
    cy.findByText(`${task}`).parent().findByTestId("edit-button").click();
    date = new Date();
    task =
      "edited on " +
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
    // complete
    cy.findByText(`${task}`).parent().findByTestId("complete-button").click();
    cy.findByText(`${task}`).parent().findByTestId("complete-button").click();
    // delete
    cy.findByText(`${task}`).parent().findByTestId("remove-button").click();
  });
});
