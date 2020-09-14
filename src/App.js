import React from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = React.useState([
    { name: "priyam", category: "wip", bgcolor: "yellow" },
    { name: "poddar", category: "wip", bgcolor: "red" },
    { name: "podd", category: "complete", bgcolor: "skyblue" },
  ]);
  let tasks = [];
  let taskss = {
    wip: [],
    complete: [],
  };
  const appp = () => {
    task.forEach((a) => {
      tasks.push(
        <div
          key={a.name}
          className="draggable"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleNewDrop(e, a.name)}
          onDragStart={(e) => handleDragStart(e, a.name)}
          draggable
          style={{ backgroundColor: a.bgcolor }}
        >
          {a.name}
        </div>
      );
    });
  };

  appp();

  const apppp = () => {
    task.forEach((a) => {
      taskss[a.category].push(
        <div
          key={a.name}
          className="draggable"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleNewDrop(e, a.name)}
          onDragStart={(e) => handleDragStart(e, a.name)}
          draggable
          style={{ backgroundColor: a.bgcolor }}
        >
          {a.name}
        </div>
      );
    });
  };
  apppp();
  const handleDragStart = (e, id) => {
    console.log(id);
    e.dataTransfer.setData("id", id);
  };
  const handleNewDrop = (e, obj) => {
    let id = e.dataTransfer.getData("id");
    let index = task.findIndex((ob) => ob.name === obj);
    let index2 = task.findIndex((ob) => ob.name === id);
    let temp = task[index2];
    task[index2] = task[index];
    task[index] = temp;
    let tasks = task.filter((task) => {
      return task;
    });
    console.log(tasks);
    setTask(tasks);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    let id = e.dataTransfer.getData("id");
    let tasks = task.filter((task) => {
      if (task.name === id) {
        task.category = status;
      }
      return task;
    });
    console.log(tasks);
    setTask(tasks);
  };
  return (
    <>
      <div className="container-drag">
        <h2>Drag and drop</h2>
        <div
          className="wip"
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, "wip")}
        >
          <span className="task-header">TODO</span>
          {taskss.wip}
        </div>
        <div
          className="droppable"
          onDrop={(e) => handleDrop(e, "complete")}
          onDragOver={(e) => handleDragOver(e)}
        >
          <span className="task-header">COMPLETED</span>
          {taskss.complete}
        </div>
      </div>
      {tasks}
    </>
  );
};
export default App;
