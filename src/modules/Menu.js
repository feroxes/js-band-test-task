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
    filterName === 'isDone' ? filterPriority.selectedIndex = 0 : filterStatus.selectedIndex = 0;
    search.value = '';
  }
};

const searchTask = (list, query) => {
  const searchedList = list.filter((item) => item.title.includes(query));
  renderList(searchedList);
  filterPriority.selectedIndex = 0;
  filterStatus.selectedIndex = 0;
};

search.addEventListener('input', (e) => {
  const { value } = e.target;
  searchTask(taskList, value);
});

filterStatus.addEventListener('change', (e) => {
  const { value, name } = e.target;

  const formatValue = (val) => {
    if (val === 'done') return true;
    if (val === 'open') return false;
    return val;
  };

  filterTaskList(taskList, name, formatValue(value));
});

filterPriority.addEventListener('change', (e) => {
  const { value, name } = e.target;
  filterTaskList(taskList, name, value);
});
