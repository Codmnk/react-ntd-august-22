import React from "react";
import { BadList } from "./BadList";
import { TaskList } from "./TaskList";

export const List = ({
  tasks,
  taskSwitcher,
  handleOnCheck,
  idsToDelete,
  handleOnSelectAll,
  allEntrySeleted,
  allBadSeleted,
}) => {
  const entryList = tasks.filter((item) => item.type === "entry");
  const badList = tasks.filter((item) => item.type === "bad");

  return (
    <div className="row mt-5 g-2">
      <TaskList
        entryList={entryList}
        taskSwitcher={taskSwitcher}
        handleOnCheck={handleOnCheck}
        idsToDelete={idsToDelete}
        handleOnSelectAll={handleOnSelectAll}
        allEntrySeleted={allEntrySeleted}
      />
      <BadList
        badList={badList}
        taskSwitcher={taskSwitcher}
        handleOnCheck={handleOnCheck}
        handleOnSelectAll={handleOnSelectAll}
        idsToDelete={idsToDelete}
        allBadSeleted={allBadSeleted}
      />
    </div>
  );
};
