import render from './render';
import detailRender from './detailRender';
import createNewtodo from './createNewtodo';

const taskList = document.querySelector('.task-list');
const todoForm = document.querySelector('.todo-form');
const todos = JSON.parse(localStorage.getItem('todos') || '[]');
const submit = document.querySelector('#submit-todo');
localStorage.setItem('todos', JSON.stringify(todos));

todos.push(
  {
    id: 1,
    title: 'Do a thing',
    description: 'just do it',
    category: 'Project 1',
    completed: false,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'low',
  },
  {
    id: 2,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Grocery',
    completed: false,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Project 2',
    completed: false,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'medium',
  },
  {
    id: 4,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Grocery',
    completed: true,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'high',
  },
  {
    id: 5,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Grocery',
    completed: false,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'low',
  },
  {
    id: 6,
    title: 'Do another thing',
    description: 'just do it',
    category: 'Grocery',
    completed: true,
    dueDate: '2021-02-06T03:05:50+0000',
    priority: 'medium',
  }
);
render(todos, 'Grocery');

// render individual detail of todo
taskList.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log(e.target);
  const id = e.target.getAttribute('data-id');
  detailRender(todos, id);
  todoForm.classList.toggle('active', true);
});

// hide or show form
window.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.classList.contains('add-todo')) {
    todoForm.children[0].reset();
    todoForm.classList.toggle('active', true);
  } else if (!todoForm.contains(e.target)) {
    todoForm.classList.toggle('active', false);
  }
});

// add todo
submit.addEventListener('click', (e) => {
  e.preventDefault();
  const title = todoForm.children[0].title.value;
  const description = todoForm.children[0].description.value;
  const priority = todoForm.children[0].priority.value;

  console.log(title);
});
// sort by date due
// sort by heading
