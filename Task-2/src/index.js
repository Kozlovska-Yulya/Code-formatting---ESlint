import { setItem } from './list/storage';
import { getTasksList } from './list/tasksGateway';
import { renderTasks } from './list/render';
import { initTodoListHandlers } from './list/toDoList';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
