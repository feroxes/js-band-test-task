import { taskList } from './TaskList';
import { renderList } from './renderList';

const search = document.getElementById('search');
const filterStatus = document.getElementById('filter-status');
const filterPriority = document.getElementById('filter-priority');

const filterTaskList = (list, filterName, filterParameter) => {
  if (filterParameter === 'all') renderList();
  else {
    const filteredList = list.filter((item) => item[filterName] === filterParameter);
    renderList(filteredList);
  }
};

const searchTask = (list, query) => {
  const searchedList = list.filter((item) => item.title.includes(query));
  renderList(searchedList);
};

search.addEventListener('input', (e) => {
  const { value } = e.target;
  searchTask(taskList, value);
});

filterStatus.addEventListener('change', (e) => {
  const { value, name } = e.target;

  const formatValue = (val) => {
    if (val === 'open') return true;
    if (val === 'done') return false;
    return val;
  };

  filterTaskList(taskList, name, formatValue(value));
});

filterPriority.addEventListener('change', (e) => {
  const { value, name } = e.target;
  filterTaskList(taskList, name, value);
});
