import './assets/style/main.scss';
import './modules/Modal';
import './modules/Menu';

import Task from './modules/Task';

import { setTaskList } from './modules/TaskList';
import { renderList } from './modules/renderList';


const localList = JSON.parse(localStorage.getItem('taskList'));
if (localList) {
  const taskList = [];
  localList.forEach((item) => {
    taskList.push(new Task(item.title, item.description, item.priority, item.id, item.isDone));
  });
  setTaskList(taskList);
  renderList();
}
