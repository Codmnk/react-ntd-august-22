import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { List } from "./components/List";

const ttlHrPerWek = 24 * 7;
function App() {
  const [tasks, setTasks] = useState([]);
  const [idsToDelete, setIdsToDelete] = useState([]);

  const totalHrs = tasks.reduce((acc, item) => acc + item.hr, 0);

  const taskEntry = (taskObj) => {
    if (totalHrs + taskObj.hr > ttlHrPerWek) {
      return alert("Yo Boss, too many hours, can't fit the task.");
    }
    setTasks([...tasks, taskObj]);
  };

  const handleOnDelete = (_id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }

    const filteredArg = tasks.filter((item) => item._id !== _id);

    setTasks(filteredArg);
  };

  const handleOnManyDelete = () => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }

    console.log(idsToDelete);
    const filteredArg = tasks.filter((item) => !idsToDelete.includes(item._id));

    setTasks(filteredArg);
    setIdsToDelete([]);
  };

  const taskSwitcher = (_id, type) => {
    console.log(tasks);

    const updatedArg = tasks.map((item) => {
      if (_id === item._id) {
        item.type = type;
      }

      return item;
    });
    console.log(updatedArg);
    setTasks(updatedArg);
  };

  const handleOnCheck = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      const tempArg = idsToDelete.filter((item) => item !== value);
      setIdsToDelete(tempArg);
    }
  };

  console.log(idsToDelete);
  return (
    <div className="wrapper">
      <div className="container">
        {/* <!-- top title --> */}
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        <Form taskEntry={taskEntry} />

        <List
          tasks={tasks}
          handleOnDelete={handleOnDelete}
          taskSwitcher={taskSwitcher}
          handleOnCheck={handleOnCheck}
        />

        {idsToDelete.length > 0 && (
          <div className="d-grid py-4">
            <button
              className="btn btn-lg btn-danger"
              onClick={handleOnManyDelete}
            >
              Delete selected tasks
            </button>
          </div>
        )}

        {/* <!-- total hr area --> */}
        <div className="row fw-bold">
          <div className="col">The total hours allocated = {totalHrs} Hrs</div>
        </div>
      </div>
    </div>
  );
}

export default App;
