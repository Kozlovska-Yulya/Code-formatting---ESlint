import { renderTasks } from './render';
import { setItem, getItem } from './storage';
import { getTasksList, updateTask } from './tasksGateway';

export function checkboxClick(event) {
  const taskId = event.target.closest('.list-item').dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find((task) => task.id === taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
}
