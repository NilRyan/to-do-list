/* eslint-disable import/no-extraneous-dependencies */
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

const render = (todos, categ, filter = 'category') => {
  const container = document.querySelector('.task-list');
  const data = todos.filter((todo) => todo[filter] === categ);
  const list = document.createElement('ul');
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = `
  <h2> ${categ}</h2>
  <select class = "sort" name="sort">
    <option value="due">Date Due</option>
    <option value="completed">Completed</option>
    <option value="priority">Priority</option>
  </select>
</div>`;
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

    listWrap.appendChild(checkbox);
    listWrap.appendChild(listTodo);
    listWrap.appendChild(date);

    list.appendChild(listWrap);
  });
  container.appendChild(header);
  container.appendChild(list);
};
export default render;
