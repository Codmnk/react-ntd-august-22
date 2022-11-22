import React from "react";

export const TaskList = ({
  entryList,
  taskSwitcher,
  handleOnCheck,
  idsToDelete,
  handleOnSelectAll,
  allEntrySeleted,
}) => {
  return (
    <div className="col-md">
      <h2 className="text-center">Entry List</h2>
      <hr />
      {entryList.length > 1 && (
        <div>
          <input
            type="checkbox"
            className="form-check-input"
            value="entry"
            onChange={handleOnSelectAll}
            checked={allEntrySeleted}
          />{" "}
          Select All
        </div>
      )}

      <table className="table table-striped table-hover">
        <tbody id="task-list">
          {entryList.map((item, i) => (
            <tr key={item._id}>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={item._id}
                  onChange={handleOnCheck}
                  checked={idsToDelete.includes(item._id)}
                />
              </td>
              <td>{item.task}</td>
              <td>{item.hr}</td>
              <td className="text-end">
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
