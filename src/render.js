import parseISO from 'date-fns/parseISO';

const render = (todos, categ, filter = 'category') => {
  const container = document.querySelector('.task-list');
  const data = todos.filter((todo) => todo[filter] === categ);
  const list = document.createElement('ul');

  data.forEach((todo) => {
    const listWrap = document.createElement('div');
    listWrap.classList.add('list-wrap');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const listTodo = document.createElement('li');
    listTodo.textContent = todo.title;

    const date = document.createElement('p');
    date.textContent = parseISO(todo.dueDate, { additionalDigits: 2 });

    listWrap.appendChild(checkbox);
    listWrap.appendChild(listTodo);
    listWrap.appendChild(date);

    list.appendChild(listWrap);
  });

  container.appendChild(list);
};
export default render;
