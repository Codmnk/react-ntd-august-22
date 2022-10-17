import React from "react";

export const TaskList = ({ entryList, handleOnDelete, taskSwitcher }) => {
  return (
    <div className="col-md">
      <h2 className="text-center">Entry List</h2>
      <hr />
      <table className="table table-striped table-hover">
        <tbody id="task-list">
          {entryList.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.task}</td>
              <td>{item.hr}</td>
              <td className="text-end">
                <button
                  onClick={() => handleOnDelete(item._id)}
                  className="btn btn-danger"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  onClick={() => taskSwitcher(item._id, "bad")}
                  className="btn btn-success"
                >
                  <i className="fa-solid fa-right-long"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
