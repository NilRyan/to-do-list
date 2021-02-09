import { nanoid } from 'nanoid';

function dueDate(a, b) {
  if (a.dueDate < b.dueDate) return -1;
  if (a.dueDate > b.dueDate) return 1;
  return 0;
}
const renderProjects = (projects) => {
  const container = document.querySelector('.projects');

  projects.forEach((item) => {
    const project = document.createElement('li');
    project.setAttribute('data-id', nanoid());
    project.textContent = item;
    const del = document.createElement('button');
    del.classList.add('btn');
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-close');
    del.appendChild(icon);
    project.appendChild(del);

    container.appendChild(project);
  });
};

export default renderProjects;
