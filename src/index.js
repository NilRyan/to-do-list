/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
import format from 'date-fns/format';
import renderHeader from './renderHeader';
import detailRender from './detailRender';
import createNewtodo from './createNewtodo';
import renderTodo from './renderTodo';
import renderProjects from './renderProjects';
import deleteProject from './deleteProject';

const taskList = document.querySelector('.task-list');
const todoForm = document.querySelector('.todo-form');

const submit = document.querySelector('#submit-todo');
const projectsData = JSON.parse(localStorage.getItem('projects') || '[]');
const projects = document.querySelector('.projects');
const projectForm = document.querySelector('.add-project');

if (localStorage.todos === null) {
  localStorage.setItem('todos', '[]');
}
// initial render with default category
renderProjects(projectsData);
renderHeader(projects.children[0].textContent);
// renderTodo(todos, projects.children[0].textContent);

// add projects
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  while (projects.children.length > 1) {
    projects.removeChild(projects.lastChild);
  }
  projectsData.push(projectForm.elements[0].value);
  localStorage.setItem('projects', JSON.stringify(projectsData));
  renderProjects(JSON.parse(localStorage.getItem('projects')) || '[]');
});

// delete projects
projects.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.type === 'submit') {
    e.target.parentNode.remove();

    const projectName = e.target.parentNode.textContent;
    localStorage.setItem(
      'projects',
      JSON.stringify(
        deleteProject(JSON.parse(localStorage.getItem('projects')), projectName)
      )
    );
    while (projects.children.length > 1) {
      projects.removeChild(projects.lastChild);
    }
    renderProjects(JSON.parse(localStorage.getItem('projects')));
  }
});
// render individual detail of todo
taskList.addEventListener('click', (e) => {
  e.stopPropagation();

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
  const category = projects.children[0].textContent;
  const date =
    todoForm.children[0].duedate.value || format(new Date(), 'yyyy-MM-dd');
  const priority = todoForm.children[0].priority.value;

  const todo = createNewtodo(
    title,
    description,
    category,
    false,
    date,
    priority
  );
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  console.log(todos);
  todos.push(todo);
  taskList.innerHTML = '';
  renderHeader(category);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodo(JSON.parse(localStorage.getItem('todos')), category);
});
// sort by date due
// sort by heading
