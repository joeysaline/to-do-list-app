const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");

app.use(cors());
app.use(express.json());

// Routes

// Create task
app.post("/tasks", async (req, res) => {
  try {
    const { id, description, complete, user_id } = req.body;
    const newTask = await pool.query(
      "INSERT INTO tasks (id, description, complete, user_id) VALUES($1, $2, $3, $4) RETURNING *",
      [id, description, complete, user_id]
    );
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// // Read a task
// app.get("/tasks/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);

//     res.json(task.rows[0]);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// Read all tasks for a user
app.get("/tasks/:user_id", async (req, res) => {
  try {
    const {user_id} = req.params;
    const allTasks = await pool.query("SELECT * FROM tasks WHERE user_id = $1 ORDER BY index DESC", [user_id]);
    res.json(allTasks.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Update a task
app.put("/tasks/description", async (req, res) => {
  try {
    const { id, description } = req.body;
    const updateTask = await pool.query(
      "UPDATE tasks SET description = $1 WHERE id = $2 RETURNING *",
      [description, id]
    );
    res.json(updateTask.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// Update a tasks completion
app.put("/tasks/complete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { complete } = req.body;
    const updateTask = await pool.query(
      "UPDATE tasks SET complete = $1 WHERE id = $2 RETURNING *",
      [complete, id]
    );
    res.json(updateTask.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM tasks WHERE id = $1", [
      id,
    ]);
    res.json("Task deleted");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
