import { renderTasks } from './render';
import { setItem } from './storage';
import { createTask, getTasksList } from './tasksGateway';

export function createNewTasks() {
  const inputElem = document.querySelector('.task-input');
  const valueInputElem = inputElem.value;
  if (!valueInputElem) {
    return;
  }
  inputElem.value = '';

  const newTask = {
    text: valueInputElem,
    done: false,
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
}
