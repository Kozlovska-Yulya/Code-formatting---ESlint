import { createNewTasks } from './createNewTasks';

import { handleListClicks } from './deleteTask';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', createNewTasks);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', handleListClicks);
};
