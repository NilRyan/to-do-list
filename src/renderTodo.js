/* eslint-disable import/no-extraneous-dependencies */
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

function dueDate(a, b) {
  if (a.dueDate < b.dueDate) return -1;
  if (a.dueDate > b.dueDate) return 1;
  return 0;
}

const renderTodo = (todos, categ, filter = 'category') => {
  const container = document.querySelector('.task-list');
  const data = todos.filter((todo) => todo[filter] === categ).sort(dueDate);
  const list = document.createElement('ul');

  data.forEach((todo) => {
    const listWrap = document.createElement('div');
    listWrap.classList.add('list-wrap');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('check');
    const listTodo = document.createElement('li');
    listTodo.setAttribute('data-id', todo.id);
    listTodo.textContent = todo.title;

    const date = document.createElement('li');
    date.textContent = format(parseISO(todo.dueDate), 'PP');
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-id', todo.id);
    deleteButton.classList.add('delete-button');
    deleteButton.classList.add('btn');
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-trash');
    deleteButton.appendChild(icon);

    listWrap.appendChild(checkbox);
    listWrap.appendChild(listTodo);
    listWrap.appendChild(date);
    listWrap.append(deleteButton);

    list.appendChild(listWrap);
  });

  container.appendChild(list);
};
export default renderTodo;
