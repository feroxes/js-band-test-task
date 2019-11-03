import Task from './Task';
import { taskList } from './TaskList';
import { renderList } from './renderList';

const openModalBtn = document.getElementById('open-modal-btn');
const modalWrapper = document.getElementById('modal-wrapper');
const modal = document.getElementById('modal');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
const titleInput = document.getElementById('title-input');
const descriptionArea = document.getElementById('description-area');
const prioritySelect = document.getElementById('priority-select');

const state = {
  isModalOpened: false,
  isEdit: false,
  editableElement: null,
};

const clearForm = () => {
  titleInput.value = '';
  descriptionArea.value = '';
  prioritySelect.value = '';
};

const setEditElement = (elem) => {
  titleInput.value = elem.title;
  descriptionArea.value = elem.description;
  prioritySelect.value = elem.priority;
  state.isEdit = true;
  state.editableElement = elem;
};

const formValidation = () => {
  const isValidForm = modal.checkValidity();
  for (let i = 0; i < modal.length; i++) {
    if (!modal[i].checkValidity()) modal[i].classList.add('error');
    else modal[i].classList.remove('error');
  }
  return isValidForm;
};

export const toggleModal = (elem, edit) => {
  state.isModalOpened = !state.isModalOpened;
  state.isModalOpened ? modalWrapper.style.display = 'flex' : modalWrapper.style.display = 'none';
  if (edit) setEditElement(elem);
};

openModalBtn.addEventListener('click', () => toggleModal());
cancelBtn.addEventListener('click', () => { toggleModal(); clearForm(); });

// Handle outside click
modalWrapper.addEventListener('click', (e) => {
  const isClickInside = modal.contains(e.target);
  if (!isClickInside) {
    toggleModal();
    clearForm();
  }
});

// Create new Task
saveBtn.addEventListener('click', () => {
  if (!formValidation()) return;
  const title = titleInput.value;
  const description = descriptionArea.value;
  const priority = prioritySelect.value;

  if (state.isEdit) {
    state.editableElement.editTitle(title);
    state.editableElement.editDescription(description);
    state.editableElement.editPriority(priority);
    state.isEdit = false;
  } else {
    const taskItem = new Task(title, description, priority, Number(new Date()));
    taskList.push(taskItem);
  }

  clearForm();
  toggleModal();
  renderList();
});
