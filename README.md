# to-do-list-app
A web application that functions as a to-do list.

This application can be used by visiting the website http://3.128.255.186:4000/

09/14/2023.
This application is currently in phase 2. 
The functional requirements that have been met include:
  1. A persistent task list that is shared for all users visiting the site.
  2. An edit task function that can update the entry for a task, and the user can cancel this action at any point.
  3. A complete task function that displays a checkbox designating the status of a task, a user can mark or un-mark this checkbox.
The non-functional requirements that have been met include:
  1. A Postgresql RDBMS was created to store the tasks.
  2. A server was created to listen for calls to the API endpoints to modify the state of the database.

04/26/2023.
This is currently in phase 1, a proof of concept. The functionality is limited, and design was kept minimal in order to allow for future change.
I utilized the React javascript framework for all functionality, and Bootstrap/React-Bootstrap for all user interface and design elements.
To run phase 1 on your own device locally, please follow these steps:
  1. Clone repository
  2. In terminal, navigate to the repository
  3. Navigate to the folder 'to-do-list' (this is the actual React app folder)
  4. Type command 'npm start' and press enter
  5. Will run the react script on your local host port 3000 and will automatically open in your default web browser
