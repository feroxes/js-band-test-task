import { taskList } from './TaskList';
import { toggleModal } from './Modal';

const createElement = (element, config, where) => {
  const tag = document.createElement(element);
  Object.assign(tag, config);
  where.appendChild(tag);
  return tag;
};

const toggleBtn = (item, elem) => {
  item.toggleControls();
  item.isControlsOpened ? elem.style.display = 'flex' : elem.style.display = 'none';
};

const removeChildren = (elem) => {
  elem.innerHTML = '';
};

const saveItemToStarage = () => {
  localStorage.setItem('taskList', JSON.stringify(taskList));
};

export const renderList = (list = taskList) => {
  const taskListWrapper = document.getElementById('taskListWrapper');
  removeChildren(taskListWrapper);
  list.forEach((item, index) => {
    const { title, description, priority } = item;
    const taskWrapper = createElement('div', { className: item.isDone ? 'task-wrapper done-task' : 'task-wrapper' }, taskListWrapper);
    createElement('h3', { className: 'task-title', innerHTML: title }, taskWrapper);
    createElement('p', { className: 'task-description', innerHTML: description }, taskWrapper);
    const controlsWrapper = createElement('div', { className: 'controls-wrapper' }, taskWrapper);
    createElement('p', { className: 'task-priority', innerHTML: priority }, controlsWrapper);
    const controlsBtn = createElement('button', { className: 'base-btn controls-btn', innerHTML: '. . .' }, controlsWrapper);
    const controls = createElement('ul', { className: 'controls' }, controlsWrapper);
    const doneBtn = createElement('li', { className: 'controls-item', innerHTML: 'Done' }, controls);
    const editBtn = createElement('li', { className: 'controls-item', innerHTML: 'Edit' }, controls);
    const deleteBtn = createElement('li', { className: 'controls-item', innerHTML: 'Delete' }, controls);

    controlsBtn.addEventListener('click', () => toggleBtn(item, controls));

    doneBtn.addEventListener('click', () => {
      item.toggleTaskStatus();
      taskWrapper.classList.toggle('done-task');
      toggleBtn(item, controls);
      saveItemToStarage();
    });

    editBtn.addEventListener('click', () => {
      toggleModal(item, true);
      toggleBtn(item, controls);
    });

    deleteBtn.addEventListener('click', () => {
      list.splice(index, 1);
      renderList();
    });
  });
  saveItemToStarage();
};
