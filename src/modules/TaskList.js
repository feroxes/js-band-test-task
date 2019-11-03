// Main task list array
export const taskList = [];

export const setTaskList = (list) => {
  list.forEach((item) => {
    taskList.push(item);
  });
};
