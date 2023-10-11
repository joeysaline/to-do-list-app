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
    const { id, description, complete } = req.body;
    const newTask = await pool.query(
      "INSERT INTO tasks (id, description, complete) VALUES($1, $2, $3) RETURNING *",
      [id, description, complete]
    );
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Read a task
app.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);

    res.json(task.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// Read all tasks
app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks ORDER BY index DESC");
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
