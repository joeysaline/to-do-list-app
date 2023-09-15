describe("default use cases", () => {
  it("user can add a task, edit it, mark it complete, add another task, mark the first incomplete, edit but cancel the second, delete the first", () => {
    let date;
    let task1;
    let task2;
    cy.visit("/");
    date = new Date();
    task1 =
      `testing began on ` +
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
      date.getSeconds() +
      ":" +
      date.getMilliseconds();
    cy.findByRole("textbox", { name: /enter task/i }).type(task1);
    cy.findByTestId("add-task").findByRole("button").click();
    // add the first task
    date = new Date();
    task1 =
      `task 1 added on ` +
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
      date.getSeconds() +
      ":" +
      date.getMilliseconds();
    cy.findByRole("textbox", { name: /enter task/i }).type(task1);
    cy.findByTestId("add-task").findByRole("button").click();
    cy.findByText(`${task1}`).should("be.visible");
    // edit the first task
    cy.findByText(`${task1}`).parent().findByTestId("edit-button").click();
    cy.focused().clear();
    date = new Date();
    task1 =
      `task 1 edited on ` +
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
      date.getSeconds() +
      ":" +
      date.getMilliseconds();
    cy.findByTestId("editor-textbox").type(task1);
    cy.findByTestId("editor-done-button").click();
    cy.findByText(`${task1}`).should("be.visible");
    // mark the first task as complete
    cy.findByText(`${task1}`).parent().findByTestId("complete-button").click();
    // add the second task
    date = new Date();
    task2 =
      `task 2 added on ` +
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
      date.getSeconds() +
      ":" +
      date.getMilliseconds();
    cy.findByRole("textbox", { name: /enter task/i }).type(task2);
    cy.findByTestId("add-task").findByRole("button").click();
    cy.findByText(`${task2}`).should("be.visible");
    // mark the first task incomplete
    cy.findByText(`${task1}`).parent().findByTestId("complete-button").click();
    // edit the second but cancel the action after making changes
    cy.findByText(`${task2}`).parent().findByTestId("edit-button").click();
    cy.focused().clear();
    cy.findByTestId("editor-textbox").type("CANCEL ACTION DO NOT SUBMIT EDIT");
    cy.findByTestId("editor-cancel-button").click();
    cy.findByText(`${task2}`).should("be.visible");
    // delete the first task
    cy.findByText(`${task1}`).parent().findByTestId("remove-button").click();
    // teardown
    date = new Date();
    task1 =
      `testing completed on ` +
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
      date.getSeconds() +
      ":" +
      date.getMilliseconds();
    cy.findByText(`${task2}`).parent().findByTestId("remove-button").click();
    cy.findByRole("textbox", { name: /enter task/i }).type(task1);
    cy.findByTestId("add-task").findByRole("button").click();
  });

  //   it("user can add 5 tasks in a row", () => {
  //     let date;
  //     let task;
  //     cy.visit("/");
  //     for (let i = 0; i < 5; i++) {
  //       date = new Date();
  //       task =
  //         `testing add task #${i} on ` +
  //         date.getDay() +
  //         "/" +
  //         date.getMonth() +
  //         "/" +
  //         date.getFullYear() +
  //         " @ " +
  //         date.getHours() +
  //         ":" +
  //         date.getMinutes() +
  //         ":" +
  //         date.getSeconds();
  //       cy.findByRole("textbox", { name: /enter task/i }).type(task);
  //       cy.findByTestId("add-task").findByRole("button").click();
  //       cy.findByText(`${task}`).should("be.visible");
  //     }
  //   });
  //   it("user can load the page and add 2 tasks", () => {
  //     let date = new Date();
  //     let task1 =
  //       "testing edit task on " +
  //       date.getDay() +
  //       "/" +
  //       date.getMonth() +
  //       "/" +
  //       date.getFullYear() +
  //       " @ " +
  //       date.getHours() +
  //       ":" +
  //       date.getMinutes() +
  //       ":" +
  //       date.getSeconds();
  //     date = new Date();
  //     let task2 =
  //       "testing edit task on " +
  //       date.getDay() +
  //       "/" +
  //       date.getMonth() +
  //       "/" +
  //       date.getFullYear() +
  //       " @ " +
  //       date.getHours() +
  //       ":" +
  //       date.getMinutes() +
  //       ":" +
  //       date.getSeconds();
  //     cy.visit("/");
  //     cy.findByRole("textbox", { name: /enter task/i }).type(task1);
  //     cy.findByTestId("add-task").findByRole("button").click();
  //     cy.findByRole("textbox", { name: /enter task/i }).type(task2);
  //     cy.findByTestId("add-task").findByRole("button").click();
  //     cy.findByText(`${task1}`).should("be.visible");
  //     cy.findByText(`${task2}`).should("be.visible");
  //   });
});
