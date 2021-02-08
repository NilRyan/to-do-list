/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
import format from 'date-fns/format';
import renderHeader from './renderHeader';
import detailRender from './detailRender';
import createNewtodo from './createNewtodo';
import renderTodo from './renderTodo';
import renderProjects from './renderProjects';
import deleteProject from './deleteProject';
import deleteTodo from './deleteTodo';

const taskList = document.querySelector('.task-list');
const todoForm = document.querySelector('.todo-form');

const submit = document.querySelector('#submit-todo');
//
const projects = document.querySelector('.projects');
const projectForm = document.querySelector('.add-project');

// initial render with default category
renderProjects(JSON.parse(localStorage.getItem('projects') || '[]'));
const initialRender = () => {
  renderHeader(projects.children[0].textContent);
  renderTodo(
    JSON.parse(localStorage.getItem('todos') || '[]'),
    projects.children[0].textContent
  );
};
initialRender();

// add projects
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  while (projects.children.length > 1) {
    projects.removeChild(projects.lastChild);
  }

  const projectsData = JSON.parse(localStorage.getItem('projects') || '[]');

  if (
    projectsData.every((project) => project !== projectForm.elements[0].value)
  ) {
    projectsData.push(projectForm.elements[0].value);
    localStorage.setItem('projects', JSON.stringify(projectsData));
  }

  renderProjects(JSON.parse(localStorage.getItem('projects')));
});

// delete projects
projects.addEventListener('click', (e) => {
  if (e.target.type === 'submit') {
    e.target.parentNode.remove();

    // side-bar
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

    // content
    localStorage.setItem(
      'todos',
      JSON.stringify(
        deleteTodo(
          JSON.parse(localStorage.getItem('todos')),
          'category',
          projectName
        )
      )
    );
    taskList.innerHTML = '';
    initialRender();
    projects.children[0].classList.add('active');
  }
});
// render individual detail of todo
taskList.addEventListener('click', (e) => {
  e.stopPropagation();

  if (e.target.nodeName === 'LI') {
    const id = e.target.getAttribute('data-id');
    detailRender(JSON.parse(localStorage.getItem('todos')), id);
    todoForm.classList.toggle('active', true);
  }
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
  const title = todoForm(e.target.nodeName === 'LI').children[0].title.value;
  const description = todoForm.children[0].description.value;
  const category = document.querySelector('.active').textContent;
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
  e.target.nodeName === 'LI';
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  console.log(todos);
  todos.push(todo);
  taskList.innerHTML = '';
  renderHeader(category);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodo(JSON.parse(localStorage.getItem('todos')), category);
});

// delete todo

// change category
projects.addEventListener('click', (e) => {
  console.log(e.target.textContent);
  if (
    e.target.type !== 'submit' &&
    e.target.nodeName === 'LI' &&
    e.target.nodeName !== 'UL'
  ) {
    taskList.innerHTML = '';
    renderHeader(e.target.textContent);
    renderTodo(JSON.parse(localStorage.getItem('todos')), e.target.textContent);

    projects.childNodes.forEach((project) => {
      if (project.nodeName === 'LI' && project.classList.contains('active')) {
        project.classList.remove('active');
      }
    });
    e.target.classList.add('active');
  }
});

// delete todos
// show specific category on click
// sort by date due/completed/priority
// toggle complete status
