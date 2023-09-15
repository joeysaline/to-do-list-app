# to-do-list-app
A web application that functions as a to-do list.
App: http://3.128.255.186:4000/

09/14/2023 - Phase 2 (Minimum Viable Product)

New functional requirements that have been met:
  1. A persistent task list that is shared for all users visiting the site.
  2. The ability to edit a task, which disables all other functions during editing. The user can cancel editing at any point.
  3. The ability to mark a task as complete, which displays a checkbox representing its status. The user can also unmark or mark a task as incomplete.

Non-functional requirements that have been met:
  1. A Postgresql RDBMS was created to store the tasks.
  2. A server was created to listen for calls to the API endpoints to modify the state of the database. All client requests are implemented fully with the RDBMS (Create, Read, Update, Delete).

04/26/2023 - Phase 1 (Proof of Concept)
Functional Requirements Met - (task list initially empty, user can create a task, delete a task, and upon refresh the task list will be reset)
Non-functional Requirements Met - (client-side only, web-based, cross-browser compatible, responsive to all device sizes)
